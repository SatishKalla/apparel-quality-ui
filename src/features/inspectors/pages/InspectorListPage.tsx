import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDebounce } from "@/shared/hooks/useDebounce";

import { defaultInspectorQuery } from "../constants/defaultInspectorQuery";

import { InspectorTable, InspectorToolbar } from "../components";

import { useDeleteInspector, useInspectorList } from "../hooks";
import { AppPage } from "@/components/ui";

export default function InspectorListPage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState(defaultInspectorQuery);

  const search = useDebounce(query.search);

  const searchQuery = useMemo(
    () => ({
      ...query,
      search,
    }),
    [query, search],
  );

  const { data, isLoading } = useInspectorList(searchQuery);

  const deleteMutation = useDeleteInspector();

  return (
    <AppPage title="Inspector Management">
      <InspectorToolbar
        query={query}
        onChange={setQuery}
        onCreate={() => navigate("/inspectors/create")}
      />

      <InspectorTable
        data={data?.data ?? []}
        total={data?.total ?? 0}
        loading={isLoading}
        query={query}
        onQueryChange={setQuery}
        onDelete={(inspector) => deleteMutation.mutate(inspector.id)}
      />
    </AppPage>
  );
}
