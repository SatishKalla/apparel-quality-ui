export type InspectorStatus = "Active" | "Inactive";

export interface Inspector {
  id: number;

  employeeId: string;

  name: string;

  email: string;

  phone: string;

  specialization: string;

  experience: number;

  factory: string;

  status: InspectorStatus;

  createdAt: string;

  updatedAt: string;
}

export interface InspectorFormData {
  employeeId: string;

  name: string;

  email: string;

  phone: string;

  specialization: string;

  experience: number;

  factory: string;

  status: InspectorStatus;
}

export interface InspectorQuery {
  page: number;

  pageSize: number;

  search: string;

  status?: InspectorStatus;

  factory?: string;

  sortField?: keyof Inspector;

  sortOrder?: "asc" | "desc";
}

export interface InspectorListResponse {
  data: Inspector[];
  total: number;
}
