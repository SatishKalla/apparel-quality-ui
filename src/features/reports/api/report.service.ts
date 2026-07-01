import { delay } from "@/shared/utils/mockData";
import { reportData } from "../mocks/report-data";

import type { ReportData } from "../types/report.types";

class ReportService {
  async getDashboard(): Promise<ReportData> {
    await delay();

    return structuredClone(reportData);
  }

  async exportCsv(): Promise<void> {
    await delay(500);

    // eslint-disable-next-line no-console
    console.log("Export CSV (Mock)");
  }

  async exportExcel(): Promise<void> {
    await delay(500);

    // eslint-disable-next-line no-console
    console.log("Export Excel (Mock)");
  }

  async printReport(): Promise<void> {
    await delay(300);

    window.print();
  }
}

export const reportService = new ReportService();
