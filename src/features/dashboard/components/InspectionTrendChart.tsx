import { Card } from "antd";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { MonthlyInspectionTrend } from "../types/dashboard.types";

interface Props {
  data: MonthlyInspectionTrend[];
}

export default function InspectionTrendChart({ data }: Props) {
  return (
    <Card title="Monthly Inspection Trend">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line type="monotone" dataKey="passed" stroke="#52c41a" strokeWidth={2} />

          <Line type="monotone" dataKey="failed" stroke="#f5222d" strokeWidth={2} />

          <Line type="monotone" dataKey="pending" stroke="#faad14" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
