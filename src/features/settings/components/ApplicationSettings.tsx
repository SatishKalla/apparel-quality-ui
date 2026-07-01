import { Button, Card, Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { useUpdateApplication } from "../hooks";

import type { SettingsData } from "../types/settings.types";

interface Props {
  application: SettingsData["application"];
}

const themeOptions = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
];

const languageOptions = [
  {
    label: "English",
    value: "English",
  },
];

const dateFormatOptions = [
  {
    label: "DD/MM/YYYY",
    value: "DD/MM/YYYY",
  },
  {
    label: "MM/DD/YYYY",
    value: "MM/DD/YYYY",
  },
  {
    label: "YYYY-MM-DD",
    value: "YYYY-MM-DD",
  },
];

export default function ApplicationSettings({ application }: Props) {
  const mutation = useUpdateApplication();

  const { control, handleSubmit, reset } = useForm<SettingsData["application"]>({
    defaultValues: application,
  });

  useEffect(() => {
    reset(application);
  }, [application, reset]);

  return (
    <Card title="Application Settings" style={{ marginTop: 24 }}>
      <Form layout="vertical" onFinish={handleSubmit((data) => mutation.mutate(data))}>
        <Form.Item label="Theme">
          <Controller
            name="theme"
            control={control}
            render={({ field }) => <Select {...field} options={themeOptions} />}
          />
        </Form.Item>

        <Form.Item label="Language">
          <Controller
            name="language"
            control={control}
            render={({ field }) => <Select {...field} options={languageOptions} />}
          />
        </Form.Item>

        <Form.Item label="Date Format">
          <Controller
            name="dateFormat"
            control={control}
            render={({ field }) => <Select {...field} options={dateFormatOptions} />}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Save Application Settings
        </Button>
      </Form>
    </Card>
  );
}
