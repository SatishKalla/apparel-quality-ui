import { Button, Popconfirm, Space, Table } from "antd";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import type { Inspector, InspectorQuery } from "../types/inspector.types";

import InspectorStatusTag from "./InspectorStatusTag";

interface Props {
  data: Inspector[];
  loading: boolean;
  total: number;
  query: InspectorQuery;

  onQueryChange: (query: InspectorQuery) => void;

  onDelete: (inspector: Inspector) => void;
}

export default function InspectorTable({
  data,
  loading,
  total,
  query,
  onQueryChange,
  onDelete,
}: Props) {
  return (
    <Table
      rowKey="id"
      loading={loading}
      dataSource={data}
      pagination={{
        current: query.page,
        pageSize: query.pageSize,
        total,
        showSizeChanger: true,
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(pagination, _, sorter: any) => {
        onQueryChange({
          ...query,
          page: pagination.current ?? 1,
          pageSize: pagination.pageSize ?? 10,
          sortField: sorter.field,
          sortOrder:
            sorter.order === "descend" ? "desc" : sorter.order === "ascend" ? "asc" : undefined,
        });
      }}
      columns={[
        {
          title: "Employee ID",
          dataIndex: "employeeId",
          sorter: true,
        },
        {
          title: "Inspector",
          dataIndex: "name",
          sorter: true,
        },
        {
          title: "Factory",
          dataIndex: "factory",
        },
        {
          title: "Specialization",
          dataIndex: "specialization",
        },
        {
          title: "Experience",
          dataIndex: "experience",
          render: (value: number) => `${value} Years`,
          sorter: true,
        },
        {
          title: "Status",
          dataIndex: "status",
          render: (status) => <InspectorStatusTag status={status} />,
        },
        {
          title: "Actions",
          width: 170,
          render: (_, record) => (
            <Space>
              <Link to={`/inspectors/${record.id}`}>
                <Button type="text" icon={<EyeOutlined />} />
              </Link>

              <Link to={`/inspectors/${record.id}/edit`}>
                <Button type="text" icon={<EditOutlined />} />
              </Link>

              <Popconfirm
                title="Delete Inspector?"
                description="Are you sure you want to delete this inspector?"
                onConfirm={() => onDelete(record)}
              >
                <Button danger type="text" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Space>
          ),
        },
      ]}
    />
  );
}
