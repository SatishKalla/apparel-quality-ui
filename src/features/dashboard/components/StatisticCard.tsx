import { Card, Statistic } from "antd";

interface Props {
  title: string;
  value: number;
}

export default function StatisticCard({ title, value }: Props) {
  return (
    <Card>
      <Statistic title={title} value={value} />
    </Card>
  );
}
