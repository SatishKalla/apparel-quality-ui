import { Button, Card, Col, Form, Input, Row } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { useUpdateProfile } from "../hooks";

import type { SettingsData } from "../types/settings.types";

interface Props {
  profile: SettingsData["profile"];
}

export default function ProfileSettings({ profile }: Props) {
  const mutation = useUpdateProfile();

  const { control, handleSubmit, reset } = useForm<SettingsData["profile"]>({
    defaultValues: profile,
  });

  useEffect(() => {
    reset(profile);
  }, [profile, reset]);

  return (
    <Card title="Profile">
      <Form layout="vertical" onFinish={handleSubmit((data) => mutation.mutate(data))}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="First Name">
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Last Name">
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Email">
              <Controller
                control={control}
                name="email"
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Phone">
              <Controller
                control={control}
                name="phone"
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Designation">
              <Controller
                control={control}
                name="designation"
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Save Profile
        </Button>
      </Form>
    </Card>
  );
}
