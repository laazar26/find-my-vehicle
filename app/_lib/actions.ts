import { supabase } from "@/app/_lib/supabase"; // Ensure this is the correct path to your Supabase file
import toast from "react-hot-toast";

interface CarProblemData {
  // id: string;
  detailed_description: string;
  diagnostics_info: string;
  warning_lights: string;
}

export async function uploadCarProblem(data: CarProblemData, userId: string) {
  // Check free questions left
  await checkQuestionsLeft(userId);

  // Insert the car problem data into the car_details table
  const { data: insertData, error: insertError } = await supabase
    .from("car_details")
    .insert([
      {
        ...data,
        user_id: userId,
      },
    ]);

  console.log("Insert Car Details Result:", data);

  if (insertError) {
    return { error: insertError };
  }

  return { insertData, error: null };
}

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

export async function updateCarProblem(
  data: UpdateCarProblemData,
  userId: string
) {
  const { data: updateData, error } = await supabase
    .from("car_details")
    .update(data)
    .eq("user_id", userId);

  return { updateData, error };
}

export async function checkQuestionsLeft(userId: string): Promise<void> {
  try {
    if (!userId) {
      toast.error("Refresh page");
      return;
    }

    // 1) Fetch the user's current data
    const { data: user, error: fetchError } = await supabase
      .from("users")
      .select("questions_left")
      .eq("id", userId)
      .single();

    if (fetchError) {
      throw new Error(`Error fetching user: ${fetchError.message}`);
    }

    console.log("checkQuestionsLeft - Fetched user:", user);

    // 2) Check how many questions left to ask
    // 3)

    if (user && user.questions_left > 0) {
      toast.success("User found and has questions left. Updating...");

      // Subtract 1 from questions_left
      const { data: userData, error: updateError } = await supabase
        .from("users")
        .update({ questions_left: user.questions_left - 1 })
        .eq("id", userId)
        .select();

      if (updateError) {
        toast.error(`Error updating user: ${updateError.message}`);
      }
      // Add Function for POST data to SUPABASE
      // SUCCESS
    } else {
      toast.error("no questions left");
    }
  } catch (err) {
    console.error("Error in checkQuestionsLeft:", err);
  }
}
