import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { useCreateFactory } from "../hooks";
import { AppPage } from "@/components/ui";
import { FactoryForm } from "../components";

export default function CreateFactoryPage() {
  const navigate = useNavigate();

  const mutation = useCreateFactory();

  return (
    <AppPage title="Create Factory">
      <FactoryForm
        loading={mutation.isPending}

        onSubmit={async (data) => {
          await mutation.mutateAsync(data);

          message.success("Factory created successfully");

          navigate("/factories");
        }}
      />
    </AppPage>
  );
}
