import { Button, Col, Input, Row, Select } from "antd";

import { PlusOutlined, ReloadOutlined, SearchOutlined } from "@ant-design/icons";

import type { InspectorQuery, InspectorStatus } from "../types/inspector.types";

interface Props {
  query: InspectorQuery;
  onChange: (query: InspectorQuery) => void;
  onCreate: () => void;
}

const statusOptions: InspectorStatus[] = ["Active", "Inactive"];

export default function InspectorToolbar({ query, onChange, onCreate }: Props) {
  const update = (value: Partial<InspectorQuery>) => {
    onChange({
      ...query,
      page: 1,
      ...value,
    });
  };

  const reset = () => {
    onChange({
      page: 1,
      pageSize: 10,
      search: "",
      status: undefined,
      factory: undefined,
      sortField: undefined,
      sortOrder: undefined,
    });
  };

  return (
    <Row
      gutter={16}
      style={{
        marginBottom: 24,
      }}
    >
      <Col span={8}>
        <Input
          allowClear
          placeholder="Search Inspector..."
          prefix={<SearchOutlined />}
          value={query.search}
          onChange={(e) =>
            update({
              search: e.target.value,
            })
          }
        />
      </Col>

      <Col span={4}>
        <Select
          allowClear
          style={{ width: "100%" }}
          placeholder="Status"
          value={query.status}
          onChange={(value) =>
            update({
              status: value,
            })
          }
          options={statusOptions.map((status) => ({
            label: status,
            value: status,
          }))}
        />
      </Col>

      <Col
        span={12}
        style={{
          textAlign: "right",
        }}
      >
        <Button icon={<ReloadOutlined />} style={{ marginRight: 8 }} onClick={reset}>
          Reset
        </Button>

        <Button type="primary" icon={<PlusOutlined />} onClick={onCreate}>
          New Inspector
        </Button>
      </Col>
    </Row>
  );
}
