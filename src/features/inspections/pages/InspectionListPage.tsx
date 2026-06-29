import { useMemo, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { AppLoader, AppPage } from "@/components/ui";
import { useDebounce } from "@/shared/hooks/useDebounce";

import { defaultInspectionQuery } from "../constants/defaultInspectionQuery";

import InspectionToolbar from "../components/InspectionToolbar";
import InspectionTable from "../components/InspectionTable";

import type { Inspection } from "../types/inspection.types";

import { useInspectionList } from "../hooks/useInspectionList";
import { useBuyers } from "../hooks/useBuyers";
import { useFactories } from "../hooks/useFactories";
import { useDeleteInspection } from "../hooks/useDeleteInspection";
import { AllRoutes } from "@/shared/constants/routes";
import { notify } from "@/shared/utils/notification";

export default function InspectionListPage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState(defaultInspectionQuery);

  const debouncedSearch = useDebounce(query.search);

  const searchQuery = useMemo(
    () => ({
      ...query,
      search: debouncedSearch,
    }),
    [query, debouncedSearch],
  );

  const { data, isLoading } = useInspectionList(searchQuery);

  const { data: buyers = [] } = useBuyers();

  const { data: factories = [] } = useFactories();

  const deleteMutation = useDeleteInspection();

  const handleDelete = async (inspection: Inspection) => {
    await deleteMutation.mutateAsync(inspection.id);

    notify.success("Inspection deleted successfully");
  };

  if (isLoading && !data) {
    return <AppLoader />;
  }

  return (
    <AppPage title="Inspection Management">
      <InspectionToolbar
        query={query}
        buyers={buyers}
        factories={factories}
        onChange={setQuery}
        onCreate={() => navigate(AllRoutes.inspectionCreate)}
      />

      <InspectionTable
        data={data?.data ?? []}
        total={data?.total ?? 0}
        loading={isLoading}
        query={query}
        onQueryChange={setQuery}
        onDelete={handleDelete}
      />
    </AppPage>
  );
}
