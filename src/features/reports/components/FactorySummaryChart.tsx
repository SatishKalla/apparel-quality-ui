import { Card } from "antd";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import type { FactorySummary } from "../types/report.types";

interface Props {
  data: FactorySummary[];
}

export default function FactorySummaryChart({ data }: Props) {
  return (
    <Card title="Factory-wise Inspections" style={{ marginTop: 24 }}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="factory" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="inspections" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
