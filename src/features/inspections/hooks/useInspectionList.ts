import { useQuery } from "@tanstack/react-query";

import { inspectionService } from "../api/inspection.service";
import type { InspectionQuery } from "../types/inspection.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useInspectionList(query: InspectionQuery) {
  return useQuery({
    queryKey: [QueryKeys.inspections, query],

    queryFn: () => inspectionService.getAll(query),

    placeholderData: (previousData) => previousData,

    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
