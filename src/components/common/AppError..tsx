import { Result } from "antd";

interface Props {
  title?: string;
}

export default function AppError({ title = "Something went wrong" }: Props) {
  return (
    <Result
      status="error"

      title={title}
    />
  );
}
