import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "../api/dashboard.service";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useDashboard() {
  return useQuery({
    queryKey: [QueryKeys.dashboard],
    queryFn: () => dashboardService.getSummary(),
  });
}
