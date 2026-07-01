import type { FactoryQuery } from "../types/factory.types";

export const defaultFactoryQuery: FactoryQuery = {
  page: 1,
  pageSize: 10,
  search: "",
  status: undefined,
  sortField: undefined,
  sortOrder: undefined,
};
