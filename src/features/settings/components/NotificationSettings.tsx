import { Button, Card, Form, Switch } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { useUpdateNotifications } from "../hooks";

import type { SettingsData } from "../types/settings.types";

interface Props {
  notifications: SettingsData["notifications"];
}

export default function NotificationSettings({ notifications }: Props) {
  const mutation = useUpdateNotifications();

  const { control, handleSubmit, reset } = useForm<SettingsData["notifications"]>({
    defaultValues: notifications,
  });

  useEffect(() => {
    reset(notifications);
  }, [notifications, reset]);

  return (
    <Card title="Notification Settings" style={{ marginTop: 24 }}>
      <Form layout="vertical" onFinish={handleSubmit((data) => mutation.mutate(data))}>
        <Form.Item label="Email Notifications">
          <Controller
            name="emailNotifications"
            control={control}
            render={({ field }) => <Switch checked={field.value} onChange={field.onChange} />}
          />
        </Form.Item>

        <Form.Item label="Inspection Reminders">
          <Controller
            name="inspectionReminder"
            control={control}
            render={({ field }) => <Switch checked={field.value} onChange={field.onChange} />}
          />
        </Form.Item>

        <Form.Item label="Weekly Report">
          <Controller
            name="weeklyReport"
            control={control}
            render={({ field }) => <Switch checked={field.value} onChange={field.onChange} />}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Save Notification Settings
        </Button>
      </Form>
    </Card>
  );
}
