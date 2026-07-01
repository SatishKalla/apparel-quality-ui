import { Typography } from "antd";

interface Props {
  title: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
}

export default function AppPage({ title, extra, children }: Props) {
  return (
    <>
      <Typography.Title level={3}>{title}</Typography.Title>
      {extra && <div className="mb-4">{extra}</div>}
      {children}
    </>
  );
}
