import { Card, type CardProps } from "antd";

export default function AppCard(props: CardProps) {
  return <Card bordered={false} {...props} />;
}
