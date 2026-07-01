import { Card, Col, Row, Statistic } from "antd";

import type { DashboardSummary } from "../types/dashboard.types";

interface Props {
  summary: DashboardSummary;
}

export default function DashboardSummaryCards({ summary }: Props) {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic title="Total Inspections" value={summary.totalInspections} />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic title="Factories" value={summary.totalFactories} />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic title="Inspectors" value={summary.totalInspectors} />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic title="Pass Rate" value={summary.passRate} suffix="%" />
        </Card>
      </Col>
    </Row>
  );
}
