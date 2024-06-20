import { useUser } from "../context/UserContext";
import { uploadCarProblem } from "../_lib/actions";

function UploadCarProblemButton() {
  const { userId, carProblemData } = useUser();

  const handleUpload = async () => {
    if (userId && carProblemData) {
      try {
        await uploadCarProblem(userId, carProblemData);
        console.log("Car problem successfully uploaded.");
      } catch (error) {
        console.error("Failed to upload car problem:", error);
      }
    } else {
      console.error("User ID or car problem data is missing.");
    }
  };

  return (
    <button type="button" onClick={handleUpload}>
      Upload Car Problem
    </button>
  );
}

export default UploadCarProblemButton;
