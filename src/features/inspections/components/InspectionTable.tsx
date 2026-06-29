import { Button, Popconfirm, Space, Table, type TableColumnsType } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import type { Inspection, InspectionQuery } from "../types/inspection.types";

import InspectionStatusTag from "./InspectionStatusTag";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/page";
import { Link } from "react-router-dom";
import { AppButton } from "@/components/ui";

interface Props {
  data: Inspection[];
  loading: boolean;
  total: number;
  query: InspectionQuery;

  onQueryChange: (query: InspectionQuery) => void;

  onDelete: (inspection: Inspection) => void;
}

export default function InspectionTable({
  data,
  loading,
  total,
  query,
  onQueryChange,
  onDelete,
}: Props) {
  const columns: TableColumnsType<Inspection> = [
    {
      title: "Style No",
      dataIndex: "styleNo",
      sorter: true,
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
      title: "Inspection Date",
      dataIndex: "inspectionDate",
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => <InspectionStatusTag status={status} />,
    },
    {
      title: "Actions",
      width: 180,
      render: (_, record) => (
        <Space>
          <Link to={`/inspections/${record.id}`}>
            <AppButton type="text" icon={<EyeOutlined />} />
          </Link>

          <Link to={`/inspections/${record.id}/edit`}>
            <AppButton type="text" icon={<EditOutlined />} />
          </Link>

          <Popconfirm
            title="Delete Inspection"
            description="Are you sure you want to delete this inspection?"
            onConfirm={() => onDelete(record)}
          >
            <AppButton danger type="text" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table<Inspection>
      rowKey="id"
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={{
        current: query.page,
        pageSize: query.pageSize,
        total,
        showSizeChanger: true,
        showTotal: (total) => `Total ${total} inspections`,
      }}
      onChange={(pagination, _, sorter) => {
        const sort = Array.isArray(sorter) ? sorter[0] : sorter;

        onQueryChange({
          ...query,
          page: pagination.current ?? 1,
          pageSize: pagination.pageSize ?? DEFAULT_PAGE_SIZE,
          sortField: sort?.field as keyof Inspection | undefined,
          sortOrder:
            sort?.order === "descend" ? "desc" : sort?.order === "ascend" ? "asc" : undefined,
        });
      }}
    />
  );
}
