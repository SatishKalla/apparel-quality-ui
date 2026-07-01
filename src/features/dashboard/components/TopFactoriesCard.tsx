import { Card, List, Progress, Typography } from "antd";

import type { TopFactory } from "../types/dashboard.types";

const { Text } = Typography;

interface Props {
  data: TopFactory[];
}

export default function TopFactoriesCard({ data }: Props) {
  const max = data.length > 0 ? Math.max(...data.map((item) => item.inspections)) : 1;

  return (
    <Card title="Top Factories">
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <div
              style={{
                width: "100%",
              }}
            >
              <Text strong>{item.name}</Text>

              <Progress
                percent={Math.round((item.inspections / max) * 100)}
                format={() => `${item.inspections}`}
              />
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}
