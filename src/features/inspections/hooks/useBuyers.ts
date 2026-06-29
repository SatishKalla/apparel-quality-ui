import { useQuery } from "@tanstack/react-query";
import { inspectionService } from "../api/inspection.service";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useBuyers() {
  return useQuery({
    queryKey: [QueryKeys.buyers],
    queryFn: () => inspectionService.getBuyers(),
    staleTime: Infinity,
  });
}
