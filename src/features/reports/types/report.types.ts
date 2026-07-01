export interface DashboardSummary {
  totalInspections: number;
  passedInspections: number;
  failedInspections: number;
  pendingInspections: number;

  totalFactories: number;
  totalInspectors: number;
}

export interface MonthlyInspection {
  month: string;
  passed: number;
  failed: number;
  pending: number;
}

export interface FactorySummary {
  factory: string;
  inspections: number;
}

export interface BuyerSummary {
  buyer: string;
  inspections: number;
}

export interface RecentInspection {
  id: number;
  inspectionNo: string;
  styleNo: string;
  buyer: string;
  factory: string;
  inspector: string;
  status: "Passed" | "Failed" | "Pending";
  inspectionDate: string;
}

export interface ReportData {
  summary: DashboardSummary;
  monthlyTrend: MonthlyInspection[];
  factorySummary: FactorySummary[];
  buyerSummary: BuyerSummary[];
  recentInspections: RecentInspection[];
}
