import { Row, Col } from "antd";

import StatisticCard from "../components/StatisticCard";
import { useDashboard } from "../hooks/useDashboard";
import { AppLoader, AppPage } from "@/components/ui";
import AppEmpty from "@/components/common/AppEmpty";

export default function Dashboard() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return <AppLoader />;
  }

  if (!data) {
    return <AppEmpty />;
  }

  return (
    <AppPage title="Dashboard">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <StatisticCard title="Total" value={data.totalInspections} />
        </Col>

        <Col span={6}>
          <StatisticCard title="Passed" value={data.passedInspections} />
        </Col>

        <Col span={6}>
          <StatisticCard title="Rejected" value={data.rejectedInspections} />
        </Col>

        <Col span={6}>
          <StatisticCard title="Pending" value={data.pendingInspections} />
        </Col>
      </Row>
    </AppPage>
  );
}
