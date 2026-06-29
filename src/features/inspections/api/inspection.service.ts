import { inspectionData } from "../mocks/inspections";
import type {
  Inspection,
  InspectionQuery,
  PaginatedResponse,
  InspectionForm,
} from "../types/inspection.types";

let inspections: Inspection[] = [...inspectionData];

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

class InspectionService {
  async getAll(query: InspectionQuery): Promise<PaginatedResponse<Inspection>> {
    await delay();

    let data = [...inspections];

    // Search
    if (query.search.trim()) {
      const keyword = query.search.toLowerCase();

      data = data.filter(
        (item) =>
          item.styleNo.toLowerCase().includes(keyword) ||
          item.buyer.toLowerCase().includes(keyword) ||
          item.factory.toLowerCase().includes(keyword) ||
          item.inspector.toLowerCase().includes(keyword),
      );
    }

    // Status Filter
    if (query.status) {
      data = data.filter((item) => item.status === query.status);
    }

    // Buyer Filter
    if (query.buyer) {
      data = data.filter((item) => item.buyer === query.buyer);
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

        if (valueA < valueB) return query.sortOrder === "desc" ? 1 : -1;

        if (valueA > valueB) return query.sortOrder === "desc" ? -1 : 1;

        return 0;
      });
    }

    const total = data.length;

    const start = (query.page - 1) * query.pageSize;

    const end = start + query.pageSize;

    return {
      data: data.slice(start, end),
      total,
      page: query.page,
      pageSize: query.pageSize,
    };
  }

  async getById(id: number): Promise<Inspection | undefined> {
    await delay();

    return inspections.find((item) => item.id === id);
  }

  async create(payload: InspectionForm): Promise<Inspection> {
    await delay();

    const inspection: Inspection = {
      id: inspections.length > 0 ? Math.max(...inspections.map((i) => i.id)) + 1 : 1,
      ...payload,
    };

    inspections.unshift(inspection);

    return inspection;
  }

  async update(id: number, payload: InspectionForm): Promise<Inspection> {
    await delay();

    const index = inspections.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error("Inspection not found");
    }

    inspections[index] = {
      id,
      ...payload,
    };

    return inspections[index];
  }

  async delete(id: number): Promise<void> {
    await delay();

    inspections = inspections.filter((item) => item.id !== id);
  }

  async getBuyers(): Promise<string[]> {
    await delay(200);

    return [...new Set(inspections.map((item) => item.buyer))].sort();
  }

  async getFactories(): Promise<string[]> {
    await delay(200);

    return [...new Set(inspections.map((item) => item.factory))].sort();
  }
}

export const inspectionService = new InspectionService();
