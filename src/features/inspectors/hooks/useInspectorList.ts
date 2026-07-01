import { useQuery } from "@tanstack/react-query";

import { inspectorService } from "../api/inspector.service";
import type { InspectorQuery } from "../types/inspector.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useInspectorList(query: InspectorQuery) {
  return useQuery({
    queryKey: [QueryKeys.inspectors, query],

    queryFn: () => inspectorService.getAll(query),

    placeholderData: (previousData) => previousData,

    staleTime: 1000 * 60 * 5,
  });
}
