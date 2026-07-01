import { Card } from "antd";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { BuyerSummary } from "../types/report.types";

interface Props {
  data: BuyerSummary[];
}

const COLORS = ["#1677ff", "#52c41a", "#faad14", "#f5222d", "#722ed1"];

export default function BuyerSummaryChart({ data }: Props) {
  return (
    <Card title="Buyer-wise Inspection Distribution" style={{ marginTop: 24 }}>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="inspections"
            nameKey="buyer"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
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
