import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { InspectorForm } from "../components";
import { useCreateInspector } from "../hooks";
import { AppPage } from "@/components/ui";

export default function CreateInspectorPage() {
  const navigate = useNavigate();

  const mutation = useCreateInspector();

  return (
    <AppPage title="Create Inspector">
      <InspectorForm
        loading={mutation.isPending}
        onSubmit={async (data) => {
          await mutation.mutateAsync(data);

          message.success("Inspector created successfully");

          navigate("/inspectors");
        }}
      />
    </AppPage>
  );
}
