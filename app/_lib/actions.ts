import { supabase } from "@/app/_lib/supabase"; // Ensure this is the correct path to your Supabase file

interface CarProblemData {
  id: string;
  detailed_description: string;
  diagnostics_info: string;
  warning_lights: string;
}

export async function uploadCarProblem(data: CarProblemData, userId: string) {
  if (!userId) {
    console.error("No user ID found.");
    return { error: new Error("No user ID found.") };
  }

  // Check if the user exists in the users table
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("id, questions_left")
    .eq("id", userId)
    .single();

  console.log(user);
  // TO DO: SUBTRACT 1 FROM QUESTIONS_LEFT
  await checkQuestionsLeft(userId);

  console.log("User Query Result:", user);

  if (userError && userError.code === "PGRST116") {
    // If user does not exist, insert the user with questions_left set to 2
    const { error: insertUserError } = await supabase
      .from("users")
      .insert([{ id: userId, questions_left: 2 }]);

    console.log("Insert User Error:", insertUserError);

    if (insertUserError) {
      console.error("Error inserting user: ", insertUserError);
      return { error: insertUserError };
    }
  } else if (user && user.questions_left <= 0) {
    console.log("No more free form submissions left");
    return { error: new Error("No free form submissions left.") };
  }

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

  // Decrease the questions_left by 1
  const { error: updateUserError } = await supabase
    .from("users")
    .update({ questions_left: (user?.questions_left || 2) - 1 })
    .eq("id", userId);

  if (updateUserError) {
    return { error: updateUserError };
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

export const updateCarProblem = async (
  data: UpdateCarProblemData,
  userId: string
) => {
  if (!userId) {
    console.error("No user ID found.");
    return { error: new Error("No user ID found.") };
  }

  const { data: updateData, error } = await supabase
    .from("car_details")
    .update(data)
    .eq("user_id", userId);

  return { updateData, error };
};

export async function checkQuestionsLeft(userId: string): Promise<void> {
  try {
    const { data: user, error: fetchError } = await supabase
      .from("users")
      .select("questions_left")
      .eq("id", userId)
      .single();

    console.log("checkQuestionsLeft: ", user);

    if (fetchError) {
      throw new Error(`Error fetching user: ${fetchError.message}`);
    }

    if (user && user.questions_left > 0) {
      const { data, error: updateError } = await supabase
        .from("users")
        .update({ questions_left: user.questions_left - 1 })
        .eq("id", userId);

      if (updateError)
        throw new Error(`Error updating user: ${updateError.message}`);

      console.log("Questions left updated", data);
    }
  } catch (err) {
    console.log("Error:", err);
  }
}
