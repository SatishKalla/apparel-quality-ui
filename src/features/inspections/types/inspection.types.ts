export type InspectionStatus = "Pending" | "Passed" | "Rejected";

export interface Inspection {
  id: number;
  styleNo: string;
  buyer: string;
  factory: string;
  inspector: string;
  inspectionDate: string;
  quantity: number;
  inspectedQuantity: number;
  defectCount: number;
  status: InspectionStatus;
}

export interface InspectionQuery {
  page: number;
  pageSize: number;
  search: string;
  status?: InspectionStatus;
  factory?: string;
  buyer?: string;
  sortField?: keyof Inspection;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface InspectionForm {
  styleNo: string;
  buyer: string;
  factory: string;
  inspector: string;
  inspectionDate: string;
  quantity: number;
  inspectedQuantity: number;
  defectCount: number;
  status: InspectionStatus;
}
