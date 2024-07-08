// _lib/schemas/carIssueSchema.ts
import { z } from "zod";

const carBrands = [
  "VW",
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Kia",
  "Mazda",
] as const;

export const formSchema = z.object({
  problemDescription: z.string().min(1, "Problem description is required"),
  diagnosticsInfo: z.string().min(1, "Diagnostics info is required"),
  warningLights: z.string().min(1, "Warning lights info is required"),
  brand: z.enum(carBrands, {
    errorMap: () => ({ message: "Brand is required" }),
  }),
  model: z.string().min(1, "Model is required"),
  year: z.string().min(1, "Year is required"),
  fuel: z.string().min(1, "Fuel type is required"),
  engineSize: z.string().min(1, "Engine size is required"),
  power: z.string().min(1, "Power is required"),
  transmission: z.enum(["Automatski", "Manualni"], {
    errorMap: () => ({ message: "Transmission type is required" }),
  }),
});
