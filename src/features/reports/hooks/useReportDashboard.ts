import { useQuery } from "@tanstack/react-query";

import { reportService } from "../api/report.service";

export const REPORT_DASHBOARD_QUERY_KEY = ["reports", "dashboard"];

export function useReportDashboard() {
  return useQuery({
    queryKey: REPORT_DASHBOARD_QUERY_KEY,

    queryFn: () => reportService.getDashboard(),

    staleTime: 1000 * 60 * 5,
  });
}
