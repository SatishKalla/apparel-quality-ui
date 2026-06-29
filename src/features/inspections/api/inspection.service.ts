import { inspections } from "../mocks/inspections";

class InspectionService {
  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(inspections);
      }, 500);
    });
  }
}

export default new InspectionService();
