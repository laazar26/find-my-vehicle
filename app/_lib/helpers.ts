export async function submitCarProblem(
  carDetailId: string,
  problemDescription: string,
  diagnosticsInfo: string,
  warningLights: string,
  userId: string
) {
  const response = await fetch("/api/submitForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: carDetailId,
      detailed_description: problemDescription,
      diagnostics_info: diagnosticsInfo,
      warning_lights: warningLights,
      user_id: userId,
    }),
  });

  const result = await response.json();
  if (response.ok) {
    console.log("result");
    return { success: true, message: "Data inserted successfully", result };
  } else {
    return { success: false, message: result.error, result };
  }
}
