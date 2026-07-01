import { Card } from "antd";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { InspectionStatus } from "../types/dashboard.types";

interface Props {
  data: InspectionStatus[];
}

const COLORS = ["#52c41a", "#f5222d", "#faad14"];

export default function InspectionStatusChart({ data }: Props) {
  return (
    <Card title="Inspection Status">
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={110} label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
