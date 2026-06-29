import type { DashboardSummary } from "../types/dashboard.types";

export class DashboardService {
  async getSummary(): Promise<DashboardSummary> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalInspections: 150,
          passedInspections: 132,
          rejectedInspections: 8,
          pendingInspections: 10,
        });
      }, 500);
    });
  }
}

export const dashboardService = new DashboardService();
