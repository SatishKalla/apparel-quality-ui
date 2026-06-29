import { Spin, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import InspectionForm from "../components/InspectionForm";
import { useInspection } from "../hooks/useInspection";
import { useUpdateInspection } from "../hooks/useUpdateInspection";
import { AppPage } from "@/components/ui";
import { AllRoutes } from "@/shared/constants/routes";

export default function EditInspectionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const inspectionId = Number(id);

  const { data, isLoading } = useInspection(inspectionId);

  const updateMutation = useUpdateInspection();

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (!data) {
    return <div>Inspection not found.</div>;
  }

  return (
    <AppPage title="Edit Inspection">
      <InspectionForm
        initialValues={data}
        loading={updateMutation.isPending}
        onSubmit={async (values) => {
          await updateMutation.mutateAsync({
            id: inspectionId,
            data: values,
          });

          message.success("Inspection updated successfully");

          navigate(AllRoutes.inspections);
        }}
      />
    </AppPage>
  );
}
