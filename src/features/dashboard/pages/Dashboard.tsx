import { Col, Row, Spin } from "antd";

import {
  DashboardSummaryCards,
  InspectionStatusChart,
  InspectionTrendChart,
  RecentInspectionsTable,
  TopFactoriesCard,
} from "../components";

import { useDashboard } from "../hooks";
import { AppPage } from "@/components/ui";

export default function DashboardPage() {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return <Spin size="large" />;
  }

  return (
    <AppPage title="Dashboard">
      <DashboardSummaryCards summary={data.summary} />

      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <InspectionTrendChart data={data.monthlyTrend} />
        </Col>

        <Col xs={24} lg={8}>
          <InspectionStatusChart data={data.inspectionStatus} />
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <RecentInspectionsTable data={data.recentInspections} />
        </Col>

        <Col xs={24} lg={8}>
          <TopFactoriesCard data={data.topFactories} />
        </Col>
      </Row>
    </AppPage>
  );
}
