import { Card, Table, Tag } from "antd";

import type { ColumnsType } from "antd/es/table";

import type { RecentInspection } from "../types/dashboard.types";

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
    },
    {
      title: "Buyer",
      dataIndex: "buyer",
    },
    {
      title: "Factory",
      dataIndex: "factory",
    },
    {
      title: "Inspector",
      dataIndex: "inspector",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: RecentInspection["status"]) => (
        <Tag color={statusColor[status]}>{status}</Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "inspectionDate",
    },
  ];

  return (
    <Card title="Recent Inspections" style={{ marginTop: 24 }}>
      <Table rowKey="id" columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
}
