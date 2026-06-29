import { Col, Row } from "antd";
import { PlusOutlined, ReloadOutlined, SearchOutlined } from "@ant-design/icons";

import type { InspectionQuery, InspectionStatus } from "../types/inspection.types";
import AppInput from "@/components/ui/AppInput/AppInput";
import { AppButton, AppSelect } from "@/components/ui";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/page";

interface Props {
  query: InspectionQuery;
  buyers: string[];
  factories: string[];

  onChange: (query: InspectionQuery) => void;
  onCreate: () => void;
}

const statusOptions: InspectionStatus[] = ["Passed", "Pending", "Rejected"];

export default function InspectionToolbar({ query, buyers, factories, onChange, onCreate }: Props) {
  const update = (value: Partial<InspectionQuery>) => {
    onChange({
      ...query,
      page: 1,
      ...value,
    });
  };

  const handleReset = () => {
    onChange({
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      search: "",
      buyer: undefined,
      factory: undefined,
      status: undefined,
      sortField: undefined,
      sortOrder: undefined,
    });
  };

  return (
    <Row gutter={16} style={{ marginBottom: 24 }}>
      <Col span={6}>
        <AppInput
          allowClear
          placeholder="Search Style / Buyer / Factory"
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
        <AppSelect
          allowClear
          placeholder="Status"
          style={{ width: "100%" }}
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

      <Col span={4}>
        <AppSelect
          allowClear
          placeholder="Buyer"
          style={{ width: "100%" }}
          value={query.buyer}
          onChange={(value) =>
            update({
              buyer: value,
            })
          }
          options={buyers.map((buyer) => ({
            label: buyer,
            value: buyer,
          }))}
        />
      </Col>

      <Col span={4}>
        <AppSelect
          allowClear
          placeholder="Factory"
          style={{ width: "100%" }}
          value={query.factory}
          onChange={(value) =>
            update({
              factory: value,
            })
          }
          options={factories.map((factory) => ({
            label: factory,
            value: factory,
          }))}
        />
      </Col>

      <Col span={6} style={{ textAlign: "right" }}>
        <AppButton icon={<ReloadOutlined />} style={{ marginRight: 8 }} onClick={handleReset}>
          Reset
        </AppButton>

        <AppButton type="primary" icon={<PlusOutlined />} onClick={onCreate}>
          New Inspection
        </AppButton>
      </Col>
    </Row>
  );
}
