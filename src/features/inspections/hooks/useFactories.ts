import { useQuery } from "@tanstack/react-query";
import { inspectionService } from "../api/inspection.service";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useFactories() {
  return useQuery({
    queryKey: [QueryKeys.factories],
    queryFn: () => inspectionService.getFactories(),
    staleTime: Infinity,
  });
}
