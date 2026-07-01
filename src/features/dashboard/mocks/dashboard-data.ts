import type { DashboardData } from "../types/dashboard.types";

export const dashboardData: DashboardData = {
  summary: {
    totalInspections: 1280,
    passedInspections: 1018,
    failedInspections: 142,
    pendingInspections: 120,

    totalFactories: 10,
    activeFactories: 9,

    totalInspectors: 10,
    activeInspectors: 8,

    passRate: 79.5,
  },

  monthlyTrend: [
    { month: "Jan", passed: 82, failed: 11, pending: 8 },
    { month: "Feb", passed: 95, failed: 14, pending: 7 },
    { month: "Mar", passed: 88, failed: 10, pending: 5 },
    { month: "Apr", passed: 101, failed: 13, pending: 9 },
    { month: "May", passed: 115, failed: 16, pending: 11 },
    { month: "Jun", passed: 120, failed: 15, pending: 10 },
    { month: "Jul", passed: 110, failed: 12, pending: 8 },
    { month: "Aug", passed: 108, failed: 14, pending: 9 },
    { month: "Sep", passed: 126, failed: 18, pending: 11 },
    { month: "Oct", passed: 134, failed: 16, pending: 12 },
    { month: "Nov", passed: 142, failed: 17, pending: 15 },
    { month: "Dec", passed: 147, failed: 16, pending: 15 },
  ],

  inspectionStatus: [
    {
      name: "Passed",
      value: 1018,
    },
    {
      name: "Failed",
      value: 142,
    },
    {
      name: "Pending",
      value: 120,
    },
  ],

  topFactories: [
    {
      name: "Hyderabad Apparel Ltd",
      inspections: 248,
    },
    {
      name: "Tiruppur Knitwear",
      inspections: 221,
    },
    {
      name: "Bangalore Fashion House",
      inspections: 194,
    },
    {
      name: "Chennai Garments",
      inspections: 170,
    },
    {
      name: "Mumbai Textile Mills",
      inspections: 148,
    },
  ],

  recentInspections: [
    {
      id: 1,
      inspectionNo: "INSP-1001",
      buyer: "H&M",
      factory: "Hyderabad Apparel Ltd",
      inspector: "Rahul Sharma",
      status: "Passed",
      inspectionDate: "2026-06-28",
    },
    {
      id: 2,
      inspectionNo: "INSP-1002",
      buyer: "Zara",
      factory: "Tiruppur Knitwear",
      inspector: "Priya Reddy",
      status: "Pending",
      inspectionDate: "2026-06-28",
    },
    {
      id: 3,
      inspectionNo: "INSP-1003",
      buyer: "Target",
      factory: "Mumbai Textile Mills",
      inspector: "Anita Rao",
      status: "Failed",
      inspectionDate: "2026-06-27",
    },
    {
      id: 4,
      inspectionNo: "INSP-1004",
      buyer: "Primark",
      factory: "Chennai Garments",
      inspector: "Vijay Patel",
      status: "Passed",
      inspectionDate: "2026-06-27",
    },
    {
      id: 5,
      inspectionNo: "INSP-1005",
      buyer: "Walmart",
      factory: "Bangalore Fashion House",
      inspector: "Sneha Iyer",
      status: "Passed",
      inspectionDate: "2026-06-26",
    },
  ],
};
