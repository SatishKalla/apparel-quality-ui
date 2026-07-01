import { Button, Card, Descriptions, Statistic } from "antd";

import { EditOutlined } from "@ant-design/icons";

import { useNavigate, useParams } from "react-router-dom";

import { InspectorStatusTag } from "../components";
import { useInspector } from "../hooks";
import { AppPage } from "@/components/ui";

export default function InspectorDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const inspectorId = Number(id);

  const { data, isLoading } = useInspector(inspectorId);

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <div>Inspector not found.</div>;
  }

  return (
    <AppPage
      title="Inspector Details"
      extra={
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => navigate(`/inspectors/${inspectorId}/edit`)}
        >
          Edit
        </Button>
      }
    >
      <Descriptions bordered column={2}>
        <Descriptions.Item label="Employee ID">{data.employeeId}</Descriptions.Item>

        <Descriptions.Item label="Inspector">{data.name}</Descriptions.Item>

        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>

        <Descriptions.Item label="Phone">{data.phone}</Descriptions.Item>

        <Descriptions.Item label="Factory">{data.factory}</Descriptions.Item>

        <Descriptions.Item label="Specialization">{data.specialization}</Descriptions.Item>

        <Descriptions.Item label="Experience">{data.experience} Years</Descriptions.Item>

        <Descriptions.Item label="Status">
          <InspectorStatusTag status={data.status} />
        </Descriptions.Item>

        <Descriptions.Item label="Created At">{data.createdAt}</Descriptions.Item>

        <Descriptions.Item label="Updated At">{data.updatedAt}</Descriptions.Item>
      </Descriptions>

      <Card
        style={{
          marginTop: 24,
        }}
      >
        <Statistic title="Employee ID" value={data.employeeId} />
      </Card>
    </AppPage>
  );
}
