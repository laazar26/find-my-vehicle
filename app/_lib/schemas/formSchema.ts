import { z } from "zod";
import { carBrands, fuelTypes, years, powerValues } from "@/app/_lib/data/data";

export const formSchema = z.object({
  problemDescription: z.string().min(1, "Problem description is required"),
  diagnosticsInfo: z.string().min(1, "Diagnostics info is required"),
  warningLights: z.string().min(1, "Warning lights info is required"),
  brand: z.enum(carBrands, {
    errorMap: () => ({ message: "Brand is required" }),
  }),
  model: z.string().min(1, "Model is required"),
  year: z.enum(years, { errorMap: () => ({ message: "Year is required" }) }),
  fuel: z.enum(fuelTypes, {
    errorMap: () => ({ message: "Fuel type is required" }),
  }),
  engineSize: z.string().min(1, "Engine size is required"),
  power: z.enum(powerValues, {
    errorMap: () => ({ message: "Power is required" }),
  }),
  transmission: z.enum(["Automatski", "Manualni"], {
    errorMap: () => ({ message: "Transmission type is required" }),
  }),
});
