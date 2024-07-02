"use client";

import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

function Form() {
  const [state, action] = useFormState();

  return (
    <form action={() => console.log("run")} className="flex">
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
