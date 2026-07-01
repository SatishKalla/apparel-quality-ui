import { Spin, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { InspectorForm } from "../components";

import { useInspector, useUpdateInspector } from "../hooks";
import { AppPage } from "@/components/ui";

export default function EditInspectorPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const inspectorId = Number(id);

  const { data, isLoading } = useInspector(inspectorId);

  const mutation = useUpdateInspector();

  if (isLoading) {
    return <Spin />;
  }

  if (!data) {
    return <div>Inspector not found.</div>;
  }

  return (
    <AppPage title="Edit Inspector">
      <InspectorForm
        initialValues={data}
        loading={mutation.isPending}
        onSubmit={async (values) => {
          await mutation.mutateAsync({
            id: inspectorId,
            data: values,
          });

          message.success("Inspector updated successfully");

          navigate("/inspectors");
        }}
      />
    </AppPage>
  );
}
