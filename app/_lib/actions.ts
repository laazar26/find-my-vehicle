import { supabase } from "@/app/_lib/supabase"; // Ensure this is the correct path to your Supabase file

interface CarProblemData {
  detailed_description: string;
  diagnostics_info: string;
  warning_lights: string;
}

export const uploadCarProblem = async (
  data: CarProblemData,
  userId: string
) => {
  if (!userId) {
    console.error("No user ID found.");
    return;
  }

  const { error } = await supabase.from("car_details").insert([
    {
      data,
      user_id: userId,
    },
  ]);

  if (error) {
    console.error("Error inserting data: ", error);
  } else {
    console.log("Data inserted successfully");
    // Optionally reset the form or provide user feedback here
  }
};

interface UpdateCarProblemData {
  detailed_description?: string;
  diagnostics_info?: string;
  warning_lights?: string;
  brand?: string;
  model?: string;
  year?: string;
  fuel?: string;
  engine_size?: string;
  power?: string;
  transmission?: string;
}

export const updateCarProblem = async (
  data: UpdateCarProblemData,
  userId: string
) => {
  if (!userId) {
    console.error("No user ID found.");
    return;
  }

  const { error } = await supabase
    .from("car_details")
    .update(data)
    .eq("user_id", userId);

  if (error) {
    console.error("Error updating data: ", error);
  } else {
    console.log("Data updated successfully");
    // Optionally provide user feedback here
  }
};
