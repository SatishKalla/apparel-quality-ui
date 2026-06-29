import { Button, type ButtonProps } from "antd";

export default function AppButton(props: ButtonProps) {
  return <Button type="primary" size="middle" {...props} />;
}
