import { Card, Table, Tag } from "antd";

import type { ColumnsType } from "antd/es/table";

import type { RecentInspection } from "../types/report.types";

interface Props {
  data: RecentInspection[];
}

const statusColor: Record<RecentInspection["status"], string> = {
  Passed: "green",
  Failed: "red",
  Pending: "orange",
};

export default function RecentInspectionsTable({ data }: Props) {
  const columns: ColumnsType<RecentInspection> = [
    {
      title: "Inspection No",
      dataIndex: "inspectionNo",
      key: "inspectionNo",
    },
    {
      title: "Style No",
      dataIndex: "styleNo",
      key: "styleNo",
    },
    {
      title: "Buyer",
      dataIndex: "buyer",
      key: "buyer",
    },
    {
      title: "Factory",
      dataIndex: "factory",
      key: "factory",
    },
    {
      title: "Inspector",
      dataIndex: "inspector",
      key: "inspector",
    },
    {
      title: "Inspection Date",
      dataIndex: "inspectionDate",
      key: "inspectionDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: RecentInspection["status"]) => (
        <Tag color={statusColor[status]}>{status}</Tag>
      ),
    },
  ];

  return (
    <Card title="Recent Inspections" style={{ marginTop: 24 }}>
      <Table rowKey="id" columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
}
