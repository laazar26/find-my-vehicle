import { NextApiRequest, NextApiResponse } from "next";
import { uploadCarProblem } from "@/app/_lib/actions"; // Ensure this is the correct path

export default async function handleSubmitForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      id,
      detailed_description,
      diagnostics_info,
      warning_lights,
      user_id,
    } = req.body;

    const data = {
      id,
      detailed_description,
      diagnostics_info,
      warning_lights,
    };

    const result = await uploadCarProblem(data, user_id);

    if (result.error) {
      res.status(400).json({ error: result.error.message });
    } else {
      res.status(200).json({ message: "Data inserted successfully" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
