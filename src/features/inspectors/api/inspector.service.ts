import { delay } from "@/shared/utils/mockData";
import { inspectors } from "../mocks/inspector-data";
import type {
  Inspector,
  InspectorFormData,
  InspectorListResponse,
  InspectorQuery,
} from "../types/inspector.types";

class InspectorService {
  async getAll(query: InspectorQuery): Promise<InspectorListResponse> {
    await delay();

    let data = [...inspectors];

    // Search
    if (query.search.trim()) {
      const keyword = query.search.toLowerCase();

      data = data.filter(
        (item) =>
          item.employeeId.toLowerCase().includes(keyword) ||
          item.name.toLowerCase().includes(keyword) ||
          item.email.toLowerCase().includes(keyword) ||
          item.factory.toLowerCase().includes(keyword) ||
          item.specialization.toLowerCase().includes(keyword),
      );
    }

    // Status Filter
    if (query.status) {
      data = data.filter((item) => item.status === query.status);
    }

    // Factory Filter
    if (query.factory) {
      data = data.filter((item) => item.factory === query.factory);
    }

    // Sorting
    if (query.sortField) {
      data.sort((a, b) => {
        const field = query.sortField!;

        const valueA = a[field];
        const valueB = b[field];

        if (valueA < valueB) {
          return query.sortOrder === "desc" ? 1 : -1;
        }

        if (valueA > valueB) {
          return query.sortOrder === "desc" ? -1 : 1;
        }

        return 0;
      });
    }

    const total = data.length;

    const start = (query.page - 1) * query.pageSize;

    const end = start + query.pageSize;

    return {
      data: data.slice(start, end),
      total,
    };
  }

  async getById(id: number): Promise<Inspector | undefined> {
    await delay();

    return inspectors.find((item) => item.id === id);
  }

  async create(data: InspectorFormData): Promise<Inspector> {
    await delay();

    const inspector: Inspector = {
      id: inspectors.length > 0 ? Math.max(...inspectors.map((i) => i.id)) + 1 : 1,

      ...data,

      createdAt: new Date().toISOString().split("T")[0],

      updatedAt: new Date().toISOString().split("T")[0],
    };

    inspectors.unshift(inspector);

    return inspector;
  }

  async update(id: number, data: InspectorFormData): Promise<Inspector> {
    await delay();

    const index = inspectors.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error("Inspector not found");
    }

    inspectors[index] = {
      ...inspectors[index],
      ...data,
      updatedAt: new Date().toISOString().split("T")[0],
    };

    return inspectors[index];
  }

  async delete(id: number): Promise<void> {
    await delay();

    const index = inspectors.findIndex((item) => item.id === id);

    if (index >= 0) {
      inspectors.splice(index, 1);
    }
  }
}

export const inspectorService = new InspectorService();
