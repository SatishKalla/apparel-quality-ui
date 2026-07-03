import { Button, Card, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/auth/useAuth";
import { AllRoutes } from "@/shared/constants/routes";

const { Title, Paragraph, Text } = Typography;

export default function Login() {
  const a: string = 10;
  const navigate = useNavigate();

  const { login } = useAuth();

  const onFinish = async (values: { username: string; password: string }) => {
    await login(values.username, values.password);

    navigate(AllRoutes.dashboard);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4989e2 0%, #000811 100%)",
        padding: 24,
      }}
    >
      <Card
        bordered={false}
        style={{
          width: 450,
          borderRadius: 12,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <Title level={2} style={{ marginBottom: 0 }}>
            AQIP
          </Title>

          <Paragraph type="secondary" style={{ marginTop: 8 }}>
            Apparel Quality Inspection Platform
          </Paragraph>

          <Text type="secondary">Sign in to continue</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish} size="large">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your username",
              },
            ]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Login
          </Button>
        </Form>

        <div
          style={{
            marginTop: 24,
            textAlign: "center",
          }}
        >
          <Text type="secondary">Version 1.0.0</Text>
        </div>
      </Card>
    </div>
  );
}
