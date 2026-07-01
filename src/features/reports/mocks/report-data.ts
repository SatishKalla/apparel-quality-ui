import type { ReportData } from "../types/report.types";

export const reportData: ReportData = {
  summary: {
    totalInspections: 1280,
    passedInspections: 1018,
    failedInspections: 142,
    pendingInspections: 120,

    totalFactories: 10,
    totalInspectors: 10,
  },

  monthlyTrend: [
    {
      month: "Jan",
      passed: 82,
      failed: 11,
      pending: 8,
    },
    {
      month: "Feb",
      passed: 95,
      failed: 14,
      pending: 7,
    },
    {
      month: "Mar",
      passed: 88,
      failed: 10,
      pending: 5,
    },
    {
      month: "Apr",
      passed: 101,
      failed: 13,
      pending: 9,
    },
    {
      month: "May",
      passed: 115,
      failed: 16,
      pending: 11,
    },
    {
      month: "Jun",
      passed: 120,
      failed: 15,
      pending: 10,
    },
    {
      month: "Jul",
      passed: 110,
      failed: 12,
      pending: 8,
    },
    {
      month: "Aug",
      passed: 108,
      failed: 14,
      pending: 9,
    },
    {
      month: "Sep",
      passed: 126,
      failed: 18,
      pending: 11,
    },
    {
      month: "Oct",
      passed: 134,
      failed: 16,
      pending: 12,
    },
    {
      month: "Nov",
      passed: 142,
      failed: 17,
      pending: 15,
    },
    {
      month: "Dec",
      passed: 147,
      failed: 16,
      pending: 15,
    },
  ],

  factorySummary: [
    {
      factory: "Hyderabad Apparel Ltd",
      inspections: 248,
    },
    {
      factory: "Tiruppur Knitwear",
      inspections: 221,
    },
    {
      factory: "Bangalore Fashion House",
      inspections: 194,
    },
    {
      factory: "Chennai Garments",
      inspections: 170,
    },
    {
      factory: "Mumbai Textile Mills",
      inspections: 148,
    },
  ],

  buyerSummary: [
    {
      buyer: "H&M",
      inspections: 320,
    },
    {
      buyer: "Zara",
      inspections: 285,
    },
    {
      buyer: "Primark",
      inspections: 243,
    },
    {
      buyer: "Target",
      inspections: 226,
    },
    {
      buyer: "Walmart",
      inspections: 206,
    },
  ],

  recentInspections: [
    {
      id: 1,
      inspectionNo: "INSP-1001",
      styleNo: "ST-501",
      buyer: "H&M",
      factory: "Hyderabad Apparel Ltd",
      inspector: "Rahul Sharma",
      status: "Passed",
      inspectionDate: "2026-06-28",
    },
    {
      id: 2,
      inspectionNo: "INSP-1002",
      styleNo: "ST-502",
      buyer: "Zara",
      factory: "Tiruppur Knitwear",
      inspector: "Priya Reddy",
      status: "Pending",
      inspectionDate: "2026-06-28",
    },
    {
      id: 3,
      inspectionNo: "INSP-1003",
      styleNo: "ST-503",
      buyer: "Target",
      factory: "Mumbai Textile Mills",
      inspector: "Anita Rao",
      status: "Failed",
      inspectionDate: "2026-06-27",
    },
    {
      id: 4,
      inspectionNo: "INSP-1004",
      styleNo: "ST-504",
      buyer: "Primark",
      factory: "Chennai Garments",
      inspector: "Vijay Patel",
      status: "Passed",
      inspectionDate: "2026-06-27",
    },
    {
      id: 5,
      inspectionNo: "INSP-1005",
      styleNo: "ST-505",
      buyer: "Walmart",
      factory: "Bangalore Fashion House",
      inspector: "Sneha Iyer",
      status: "Passed",
      inspectionDate: "2026-06-26",
    },
  ],
};
