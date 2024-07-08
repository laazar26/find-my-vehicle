// schemas/formSchema.ts
import { z } from "zod";
import { carBrands, fuelTypes, years, powerValues } from "@/app/_lib/data/data";

export const formSchema = z.object({
  problem_desc: z.string(),
  diagnostics_info: z.string(),
  warning_lights: z.string(),
  brand: z.enum(carBrands, {
    errorMap: () => ({ message: "Brand is required" }),
  }),
  model: z.string(),
  year: z.enum(years, { errorMap: () => ({ message: "Year is required" }) }),
  fuel: z.enum(fuelTypes, {
    errorMap: () => ({ message: "Fuel type is required" }),
  }),
  engine_size: z.string(),
  power: z.enum(powerValues, {
    errorMap: () => ({ message: "Power is required" }),
  }),
  transmission: z.enum(["Automatski", "Manualni"], {
    errorMap: () => ({ message: "Transmission type is required" }),
  }),
});
