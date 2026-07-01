import { useQuery } from "@tanstack/react-query";

import { factoryService } from "../api/factory.service";
import type { FactoryQuery } from "../types/factory.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useFactoryList(query: FactoryQuery) {
  return useQuery({
    queryKey: [QueryKeys.factories, query],

    queryFn: () => factoryService.getAll(query),

    placeholderData: (previousData) => previousData,

    staleTime: 1000 * 60 * 5,
  });
}
