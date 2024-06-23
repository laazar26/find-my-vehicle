// pages/api/uploadCarProblem.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/app/_lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const carProblemData = req.body;

    console.log("Received data:", carProblemData);

    try {
      const { data, error } = await supabase
        .from("car_problems")
        .insert([carProblemData]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      res.status(200).json({ data });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
