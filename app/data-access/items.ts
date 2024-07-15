import { db } from "@/app/db/index";
import { vehicleProblems } from "@/app/db/schema";
import { formSchema } from "@/app/_lib/schemas/formSchema";

export async function getFormData(state: any, formData: FormData) {
  const parsedData = formSchema.safeParse({
    problem_desc: formData.get("problemDescription"),
    diagnostics_info: formData.get("diagnosticsInfo"),
    warning_lights: formData.get("warningLights"),
    brand: formData.get("brand"),
    model: formData.get("model"),
    year: Number(formData.get("year")),
    fuel: formData.get("fuel"),
    engine_size: formData.get("engineSize"),
    power: formData.get("power"),
    transmission: formData.get("transmission"),
  });

  if (!parsedData.success) {
    console.error("Validation Error:", parsedData.error);
    return { error: "Form validation failed. Please check your inputs." };
  }

  console.log("Uploading....");
  console.log(parsedData.data);
}
