import { useFormStatus } from "react-dom";

function SubmitButton() {
  const status = useFormStatus();
  console.log(status.pending);
  return (
    <button
      disabled={status.pending}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {status.pending ? "Saving..." : "Next"}
    </button>
  );
}

export default SubmitButton;
