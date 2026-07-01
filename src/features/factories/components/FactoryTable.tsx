import { Button, Popconfirm, Space } from "antd";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import type { Factory, FactoryQuery } from "../types/factory.types";

import FactoryStatusTag from "./FactoryStatusTag";
import { AppTable } from "@/components/ui";

interface Props {
  data: Factory[];
  loading: boolean;
  total: number;
  query: FactoryQuery;

  onQueryChange: (query: FactoryQuery) => void;

  onDelete: (factory: Factory) => void;
}

export default function FactoryTable({
  data,
  loading,
  total,
  query,
  onQueryChange,
  onDelete,
}: Props) {
  return (
    <AppTable
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
          title: "Code",
          dataIndex: "code",
          sorter: true,
        },
        {
          title: "Factory Name",
          dataIndex: "name",
          sorter: true,
        },
        {
          title: "City",
          dataIndex: "city",
        },
        {
          title: "Contact",
          dataIndex: "contactPerson",
        },
        {
          title: "Status",
          dataIndex: "status",
          render: (status) => <FactoryStatusTag status={status} />,
        },
        {
          title: "Actions",
          width: 170,
          render: (_, record) => (
            <Space>
              <Link to={`/factories/${record.id}`}>
                <Button type="text" icon={<EyeOutlined />} />
              </Link>

              <Link to={`/factories/${record.id}/edit`}>
                <Button type="text" icon={<EditOutlined />} />
              </Link>

              <Popconfirm title="Delete Factory?" onConfirm={() => onDelete(record)}>
                <Button danger type="text" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Space>
          ),
        },
      ]}
    />
  );
}
