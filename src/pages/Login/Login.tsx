import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = async (values: { username: string; password: string }) => {
    await login(values.username, values.password);

    navigate("/");
  };

  return (
    <Card
      title="Login"
      style={{
        width: 400,
        margin: "100px auto",
      }}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </Card>
  );
}
