import { Card, Descriptions, Typography } from "antd";

const { Paragraph, Text } = Typography;

export default function AboutCard() {
  return (
    <Card title="About Application" style={{ marginTop: 24 }}>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Application">
          Apparel Quality Inspection Platform
        </Descriptions.Item>

        <Descriptions.Item label="Version">v1.0.0</Descriptions.Item>

        <Descriptions.Item label="Frontend">React 19 + Vite + TypeScript</Descriptions.Item>

        <Descriptions.Item label="Backend">NestJS (Coming Soon)</Descriptions.Item>

        <Descriptions.Item label="UI Library">Ant Design</Descriptions.Item>

        <Descriptions.Item label="State Management">TanStack Query</Descriptions.Item>
      </Descriptions>

      <Paragraph style={{ marginTop: 24 }}>
        This application demonstrates a production-style Apparel Quality Inspection Platform built
        for learning modern software development and deployment practices.
      </Paragraph>

      <Paragraph>
        <Text strong>Upcoming:</Text>
      </Paragraph>

      <ul>
        <li>NestJS REST API</li>
        <li>Docker</li>
        <li>Docker Compose</li>
        <li>GitHub Actions</li>
        <li>Jenkins</li>
        <li>Kubernetes</li>
        <li>Argo CD</li>
      </ul>
    </Card>
  );
}
