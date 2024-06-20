import { supabase } from "./supabase";

interface CarProblemData {
  problemDescription: string;
  diagnosticsInfo: string;
  warningLights: string;
}

export async function uloadCarProblem(formData: CarProblemData) {
  try {
    const { data, error } = await supabase
      .from("CarProblemData")
      .insert([formData]);

    if (error) {
      throw error;
    }

    console.log("Car added:", data);
  } catch (error) {
    alert("error in uploading");
  }
}
