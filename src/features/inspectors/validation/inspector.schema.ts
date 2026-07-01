import { z } from "zod";

export const inspectorSchema = z.object({
  employeeId: z.string().min(1, "Employee ID is required"),

  name: z.string().min(1, "Inspector name is required"),

  email: z.string().email("Enter a valid email address"),

  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  specialization: z.string().min(1, "Specialization is required"),

  experience: z.number().min(0, "Experience cannot be negative").max(50, "Experience is invalid"),

  factory: z.string().min(1, "Factory is required"),

  status: z.enum(["Active", "Inactive"]),
});

export type InspectorFormValues = z.infer<typeof inspectorSchema>;
