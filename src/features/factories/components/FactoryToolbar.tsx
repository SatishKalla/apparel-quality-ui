import { Col, Input, Row, Select } from "antd";

import { PlusOutlined, ReloadOutlined, SearchOutlined } from "@ant-design/icons";

import type { FactoryQuery, FactoryStatus } from "../types/factory.types";
import { AppButton } from "@/components/ui";

interface Props {
  query: FactoryQuery;

  onChange: (query: FactoryQuery) => void;

  onCreate: () => void;
}

const statusOptions: FactoryStatus[] = ["Active", "Inactive"];

export default function FactoryToolbar({ query, onChange, onCreate }: Props) {
  const update = (value: Partial<FactoryQuery>) => {
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
          placeholder="Search Factory..."
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
        <AppButton icon={<ReloadOutlined />} style={{ marginRight: 8 }} onClick={reset}>
          Reset
        </AppButton>

        <AppButton type="primary" icon={<PlusOutlined />} onClick={onCreate}>
          New Factory
        </AppButton>
      </Col>
    </Row>
  );
}
