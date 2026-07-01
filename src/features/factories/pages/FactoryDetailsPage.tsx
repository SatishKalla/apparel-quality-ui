import { Button, Card, Descriptions, Statistic } from "antd";

import { EditOutlined } from "@ant-design/icons";

import { useNavigate, useParams } from "react-router-dom";

import { FactoryStatusTag } from "../components";

import { useFactory } from "../hooks";
import { AppPage } from "@/components/ui";

export default function FactoryDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data } = useFactory(Number(id));

  if (!data) {
    return null;
  }

  return (
    <AppPage
      title="Factory Details"

      extra={
        <Button
          icon={<EditOutlined />}

          type="primary"

          onClick={() => navigate(`/factories/${id}/edit`)}
        >
          Edit
        </Button>
      }
    >
      <Descriptions bordered column={2}>
        <Descriptions.Item label="Code">{data.code}</Descriptions.Item>

        <Descriptions.Item label="Factory">{data.name}</Descriptions.Item>

        <Descriptions.Item label="City">{data.city}</Descriptions.Item>

        <Descriptions.Item label="State">{data.state}</Descriptions.Item>

        <Descriptions.Item label="Country">{data.country}</Descriptions.Item>

        <Descriptions.Item label="Contact">{data.contactPerson}</Descriptions.Item>

        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>

        <Descriptions.Item label="Phone">{data.phone}</Descriptions.Item>

        <Descriptions.Item label="Status">
          <FactoryStatusTag status={data.status} />
        </Descriptions.Item>
      </Descriptions>

      <Card
        style={{
          marginTop: 24,
        }}
      >
        <Statistic
          title="Factory Code"

          value={data.code}
        />
      </Card>
    </AppPage>
  );
}
