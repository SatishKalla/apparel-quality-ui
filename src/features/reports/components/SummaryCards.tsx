import { Card, Col, Row, Statistic } from "antd";

import type { DashboardSummary } from "../types/report.types";

interface Props {
  summary: DashboardSummary;
}

export default function SummaryCards({ summary }: Props) {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic title="Total Inspections" value={summary.totalInspections} />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Passed"
            value={summary.passedInspections}
            valueStyle={{ color: "#3f8600" }}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Failed"
            value={summary.failedInspections}
            valueStyle={{ color: "#cf1322" }}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Pending"
            value={summary.pendingInspections}
            valueStyle={{ color: "#faad14" }}
          />
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
    </Row>
  );
}
