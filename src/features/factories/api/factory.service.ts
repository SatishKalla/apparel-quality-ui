import { factories } from "../mocks/factory-data";
import type { Factory, FactoryFormData, FactoryQuery } from "../types/factory.types";

import { delay, queryData } from "@/shared/utils/mockData";

class FactoryService {
  async getAll(query: FactoryQuery) {
    await delay();

    return queryData({
      data: factories,

      search: query.search,

      searchFields: ["code", "name", "city", "contactPerson"],

      filters: {
        status: query.status,
      },

      sortField: query.sortField,

      sortOrder: query.sortOrder,

      page: query.page,

      pageSize: query.pageSize,
    });
  }

  async getById(id: number): Promise<Factory | undefined> {
    await delay();

    return factories.find((item) => item.id === id);
  }

  async create(data: FactoryFormData): Promise<Factory> {
    await delay();

    const factory: Factory = {
      id: factories.length + 1,

      ...data,

      createdAt: new Date().toISOString().split("T")[0],

      updatedAt: new Date().toISOString().split("T")[0],
    };

    factories.unshift(factory);

    return factory;
  }

  async update(id: number, data: FactoryFormData): Promise<Factory> {
    await delay();

    const index = factories.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error("Factory not found");
    }

    factories[index] = {
      ...factories[index],
      ...data,
      updatedAt: new Date().toISOString().split("T")[0],
    };

    return factories[index];
  }

  async delete(id: number): Promise<void> {
    await delay();

    const index = factories.findIndex((item) => item.id === id);

    if (index >= 0) {
      factories.splice(index, 1);
    }
  }
}

export const factoryService = new FactoryService();
