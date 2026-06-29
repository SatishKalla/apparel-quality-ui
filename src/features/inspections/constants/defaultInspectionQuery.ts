import type { InspectionQuery } from "../types/inspection.types";

export const defaultInspectionQuery: InspectionQuery = {
  page: 1,
  pageSize: 10,
  search: "",
  status: undefined,
  buyer: undefined,
  factory: undefined,
  sortField: undefined,
  sortOrder: undefined,
};
