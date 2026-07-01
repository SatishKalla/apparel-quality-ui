import { Spin, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import FactoryForm from "../components/FactoryForm";

import { useFactory, useUpdateFactory } from "../hooks";
import { AppPage } from "@/components/ui";

export default function EditFactoryPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const factoryId = Number(id);

  const { data, isLoading } = useFactory(factoryId);

  const mutation = useUpdateFactory();

  if (isLoading) {
    return <Spin />;
  }

  if (!data) {
    return <div>Factory not found.</div>;
  }

  return (
    <AppPage title="Edit Factory">
      <FactoryForm
        initialValues={data}

        loading={mutation.isPending}

        onSubmit={async (values) => {
          await mutation.mutateAsync({
            id: factoryId,

            data: values,
          });

          message.success("Factory updated successfully");

          navigate("/factories");
        }}
      />
    </AppPage>
  );
}
