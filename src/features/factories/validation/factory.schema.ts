import { z } from "zod";

export const factorySchema = z.object({
  code: z.string().min(1, "Factory code is required"),
  name: z.string().min(1, "Factory name is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  email: z.email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  status: z.enum(["Active", "Inactive"]),
});

export type FactoryFormValues = z.infer<typeof factorySchema>;
