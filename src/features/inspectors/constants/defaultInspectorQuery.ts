import type { InspectorQuery } from "../types/inspector.types";

export const defaultInspectorQuery: InspectorQuery = {
  page: 1,
  pageSize: 10,
  search: "",
  status: undefined,
  factory: undefined,
  sortField: undefined,
  sortOrder: undefined,
};
