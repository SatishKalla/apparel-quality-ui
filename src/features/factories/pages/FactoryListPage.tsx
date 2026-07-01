import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDebounce } from "@/shared/hooks/useDebounce";

import { useDeleteFactory, useFactoryList } from "../hooks";
import { AppPage } from "@/components/ui";
import FactoryToolbar from "../components/FactoryToolbar";
import FactoryTable from "../components/FactoryTable";
import { defaultFactoryQuery } from "../constants/defaultFactoryQuery";

export default function FactoryListPage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState(defaultFactoryQuery);

  const search = useDebounce(query.search);

  const searchQuery = useMemo(
    () => ({
      ...query,
      search,
    }),
    [query, search],
  );

  const { data, isLoading } = useFactoryList(searchQuery);

  const deleteMutation = useDeleteFactory();

  return (
    <AppPage title="Factory Management">
      <FactoryToolbar
        query={query}
        onChange={setQuery}
        onCreate={() => navigate("/factories/create")}
      />

      <FactoryTable
        data={data?.data ?? []}
        total={data?.total ?? 0}
        loading={isLoading}
        query={query}
        onQueryChange={setQuery}
        onDelete={(factory) => deleteMutation.mutate(factory.id)}
      />
    </AppPage>
  );
}
