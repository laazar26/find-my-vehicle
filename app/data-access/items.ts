import { db } from "@/app/db/index";
import { vehicleProblems } from "@/app/db/schema";
import { formSchema } from "@/app/_lib/schemas/formSchema";
import { eq } from "drizzle-orm";

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
export async function getUser(email: string) {
  const user = await db.select().from(users).where(eq(users.email, email)).limit(1)

  return user
}

export async function createUser(user: typeof users.$inferSelect) {
  return await db.insert(users).values(user)
}