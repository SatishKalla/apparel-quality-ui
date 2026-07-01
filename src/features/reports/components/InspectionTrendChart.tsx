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

import type { MonthlyInspection } from "../types/report.types";

interface Props {
  data: MonthlyInspection[];
}

export default function InspectionTrendChart({ data }: Props) {
  return (
    <Card title="Monthly Inspection Trend" style={{ marginTop: 24 }}>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line type="monotone" dataKey="passed" />

          <Line type="monotone" dataKey="failed" />

          <Line type="monotone" dataKey="pending" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
