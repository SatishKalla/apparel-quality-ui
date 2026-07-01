import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { AppPage } from "@/components/ui";

import InspectionForm from "../components/InspectionForm";
import { useCreateInspection } from "../hooks/useCreateInspection";
import { AllRoutes } from "@/shared/constants/routes";

export default function CreateInspectionPage() {
  const navigate = useNavigate();

  const createMutation = useCreateInspection();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    await createMutation.mutateAsync(values);

    message.success("Inspection created successfully");

    navigate(AllRoutes.inspections);
  };

  return (
    <AppPage title="Create Inspection">
      <InspectionForm loading={createMutation.isPending} onSubmit={handleSubmit} />
    </AppPage>
  );
}
