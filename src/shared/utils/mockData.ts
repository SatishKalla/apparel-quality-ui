export interface QueryOptions<T> {
  data: T[];

  search?: string;

  searchFields?: (keyof T)[];

  filters?: Partial<T>;

  sortField?: keyof T;

  sortOrder?: "asc" | "desc";

  page: number;

  pageSize: number;
}

export interface QueryResult<T> {
  data: T[];
  total: number;
}

export function queryData<T>({
  data,

  search = "",

  searchFields = [],

  filters = {},

  sortField,

  sortOrder,

  page,

  pageSize,
}: QueryOptions<T>): QueryResult<T> {
  let result = [...data];

  // Search
  if (search.trim()) {
    const keyword = search.toLowerCase();

    result = result.filter((item) =>
      searchFields.some((field) =>
        String(item[field] ?? "")
          .toLowerCase()
          .includes(keyword),
      ),
    );
  }

  // Filters
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      result = result.filter((item) => item[key as keyof T] === value);
    }
  });

  // Sorting
  if (sortField && sortOrder) {
    result.sort((a, b) => {
      const first = a[sortField];
      const second = b[sortField];

      if (first == null || second == null) {
        return 0;
      }

      if (first < second) {
        return sortOrder === "asc" ? -1 : 1;
      }

      if (first > second) {
        return sortOrder === "asc" ? 1 : -1;
      }

      return 0;
    });
  }

  const total = result.length;

  const start = (page - 1) * pageSize;

  return {
    total,
    data: result.slice(start, start + pageSize),
  };
}

export async function delay(ms = 400) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
