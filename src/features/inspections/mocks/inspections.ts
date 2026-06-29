import type { Inspection } from "../types/inspection.types";

const buyers = ["Nike", "Adidas", "Puma", "Levi's", "Zara", "H&M"];

const factories = ["Hyderabad Unit", "Tiruppur Unit", "Bangalore Unit", "Chennai Unit"];

const inspectors = ["John", "David", "Satish", "Rahul", "Priya", "Anitha"];

const statuses: Inspection["status"][] = ["Passed", "Pending", "Rejected"];

export const inspectionData: Inspection[] = Array.from({ length: 50 }, (_, index) => {
  const quantity = 500 + (index % 10) * 100;
  const inspectedQuantity = quantity - (index % 5) * 20;
  const defectCount = index % 15;

  return {
    id: index + 1,
    styleNo: `ST-${1001 + index}`,
    buyer: buyers[index % buyers.length],
    factory: factories[index % factories.length],
    inspector: inspectors[index % inspectors.length],
    inspectionDate: new Date(2026, index % 12, (index % 28) + 1).toISOString().split("T")[0],
    quantity,
    inspectedQuantity,
    defectCount,
    status: statuses[index % statuses.length],
  };
});
