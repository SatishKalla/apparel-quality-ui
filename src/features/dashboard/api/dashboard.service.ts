import { delay } from "@/shared/utils/mockData";
import { dashboardData } from "../mocks/dashboard-data";

import type { DashboardData } from "../types/dashboard.types";

class DashboardService {
  async getDashboard(): Promise<DashboardData> {
    await delay();

    return structuredClone(dashboardData);
  }
}

export const dashboardService = new DashboardService();
