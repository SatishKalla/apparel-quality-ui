import { Button, Col, Row, Space, Spin } from "antd";

import { DownloadOutlined, FileExcelOutlined, PrinterOutlined } from "@ant-design/icons";

import { reportService } from "../api/report.service";

import {
  BuyerSummaryChart,
  FactorySummaryChart,
  InspectionTrendChart,
  RecentInspectionsTable,
  SummaryCards,
} from "../components";

import { useReportDashboard } from "../hooks";
import { AppPage } from "@/components/ui";

export default function ReportsPage() {
  const { data, isLoading } = useReportDashboard();

  if (isLoading || !data) {
    return <Spin size="large" />;
  }

  return (
    <AppPage
      title="Reports"
      extra={
        <Space>
          <Button icon={<DownloadOutlined />} onClick={() => reportService.exportCsv()}>
            Export CSV
          </Button>

          <Button icon={<FileExcelOutlined />} onClick={() => reportService.exportExcel()}>
            Export Excel
          </Button>

          <Button icon={<PrinterOutlined />} onClick={() => reportService.printReport()}>
            Print
          </Button>
        </Space>
      }
    >
      <SummaryCards summary={data.summary} />

      <InspectionTrendChart data={data.monthlyTrend} />

      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={12}>
          <FactorySummaryChart data={data.factorySummary} />
        </Col>

        <Col span={12}>
          <BuyerSummaryChart data={data.buyerSummary} />
        </Col>
      </Row>

      <RecentInspectionsTable data={data.recentInspections} />
    </AppPage>
  );
}
