export interface Inspection {
  id: number;

  styleNo: string;

  buyer: string;

  factory: string;

  inspectionDate: string;

  status: "Pending" | "Passed" | "Rejected";

  inspector: string;
}
