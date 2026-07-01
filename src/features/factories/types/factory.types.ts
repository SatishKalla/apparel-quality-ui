export type FactoryStatus = "Active" | "Inactive";

export interface Factory {
  id: number;

  code: string;

  name: string;

  city: string;

  state: string;

  country: string;

  contactPerson: string;

  email: string;

  phone: string;

  status: FactoryStatus;

  createdAt: string;

  updatedAt: string;
}

export interface FactoryFormData {
  code: string;
  name: string;
  city: string;
  state: string;
  country: string;
  contactPerson: string;
  email: string;
  phone: string;
  status: FactoryStatus;
}

export interface FactoryQuery {
  page: number;
  pageSize: number;
  search: string;

  status?: FactoryStatus;

  sortField?: keyof Factory;

  sortOrder?: "asc" | "desc";
}

export interface FactoryListResponse {
  data: Factory[];
  total: number;
}
