import { useQuery } from "@tanstack/react-query";

import { inspectionService } from "../api/inspection.service";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useInspection(id: number) {
  return useQuery({
    queryKey: [QueryKeys.inspections, id],
    queryFn: () => inspectionService.getById(id),
    enabled: !!id,
  });
}
