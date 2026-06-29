import { Typography } from "antd";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function AppPage({ title, children }: Props) {
  return (
    <>
      <Typography.Title level={3}>{title}</Typography.Title>

      {children}
    </>
  );
}
