"use client";

import { getInfo } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function Form() {
  // const [state, action] = useFormState();
  const userID = "Lazar";
  console.log("🚀 ~ Form ~ Lazar:", Lazar);

  return (
    <form
      onSubmit={() => {
        console.log("sda");
        getInfo(userID);
      }}
      className="flex"
    >
      <label>Sto detaljniji opis problema?</label>
      <input
        name="problemDescription"
        className="mt-1 text-black font-semibold mb-5 block w-52 p-2.5 border border-gray-300 rounded-md shadow-sm"
      />
      <label>Sto detaljniji opis problema?</label>
      <input
        name="diagnosticsInfo"
        className="mt-1 text-black font-semibold mb-5 block w-52 p-2.5 border border-gray-300 rounded-md shadow-sm"
      />
      <label>Sto detaljniji opis problema?</label>
      <input
        name="warningLights"
        className="mt-1 text-black font-semibold mb-5 block w-52 p-2.5 border border-gray-300 rounded-md shadow-sm"
      />
      <SubmitButton />
    </form>
  );
}

export default Form;
