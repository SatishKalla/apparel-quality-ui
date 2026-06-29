import { Button, Card, Descriptions, Space, Spin, Statistic } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";

import InspectionStatusTag from "../components/InspectionStatusTag";
import { useInspection } from "../hooks/useInspection";
import { AppPage } from "@/components/ui";
import { AllRoutes } from "@/shared/constants/routes";

export default function InspectionDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const inspectionId = Number(id);

  const { data, isLoading } = useInspection(inspectionId);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (!data) {
    return <div>Inspection not found.</div>;
  }

  return (
    <AppPage
      title="Inspection Details"
      extra={
        <Button
          icon={<EditOutlined />}
          type="primary"
          onClick={() => navigate(AllRoutes.inspectionEdit.replace(":id", `${inspectionId}`))}
        >
          Edit
        </Button>
      }
    >
      <Descriptions bordered column={2}>
        <Descriptions.Item label="Style Number">{data.styleNo}</Descriptions.Item>

        <Descriptions.Item label="Buyer">{data.buyer}</Descriptions.Item>

        <Descriptions.Item label="Factory">{data.factory}</Descriptions.Item>

        <Descriptions.Item label="Inspector">{data.inspector}</Descriptions.Item>

        <Descriptions.Item label="Inspection Date">{data.inspectionDate}</Descriptions.Item>

        <Descriptions.Item label="Status">
          <InspectionStatusTag status={data.status} />
        </Descriptions.Item>
      </Descriptions>

      <Space
        size={24}
        style={{
          marginTop: 24,
        }}
      >
        <Card>
          <Statistic title="Order Quantity" value={data.quantity} />
        </Card>

        <Card>
          <Statistic title="Inspected" value={data.inspectedQuantity} />
        </Card>

        <Card>
          <Statistic title="Defects" value={data.defectCount} />
        </Card>
      </Space>
    </AppPage>
  );
}
