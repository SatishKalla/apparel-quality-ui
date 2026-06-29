import { z } from "zod";

export const inspectionSchema = z.object({
  styleNo: z.string().min(1, "Style Number is required"),

  buyer: z.string().min(1, "Buyer is required"),

  factory: z.string().min(1, "Factory is required"),

  inspector: z.string().min(1, "Inspector is required"),

  inspectionDate: z.string().min(1, "Inspection Date is required"),

  quantity: z
    .number({
      error: "Quantity is required",
    })
    .positive(),

  inspectedQuantity: z
    .number({
      error: "Inspected Quantity is required",
    })
    .positive(),

  defectCount: z
    .number({
      error: "Defect Count is required",
    })
    .min(0),

  status: z.enum(["Passed", "Pending", "Rejected"]),
});

export type InspectionFormValues = z.infer<typeof inspectionSchema>;
