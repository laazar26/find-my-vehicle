"use client";

import { useState } from "react";
import { uloadCarProblem } from "../_lib/actions";

interface CarProblemData {
  problemDescription: string;
  diagnosticsInfo: string;
  warningLights: string;
}

function CarIsueForm() {
  const [problemDescription, setProblemDescription] = useState("");
  const [diagnosticsInfo, setDiagnosticsInfo] = useState("");
  const [warningLights, setWarningLights] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const carProblem: CarProblemData = {
      problemDescription,
      diagnosticsInfo,
      warningLights,
    };

    uloadCarProblem(carProblem);
    console.log(problemDescription, diagnosticsInfo, warningLights);
  }

  return (
    <div className="border mt-32 border-[#5dffff] rounded-3xl px-14 py-24 max-w-screen-lg mx-auto shadow-subtle-white">
      <form className="" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="problemDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Sto detaljniji opis problema?
          </label>
          <textarea
            id="problemDescription"
            name="problemDescription"
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            placeholder="Ovde detaljno opisi sa kakvim se problemom suocavas. Posto nemam priliku ( za sada ) da pogledam, cujem, prockackam, potrudi se da sto bolje docaras sta se desava."
            className="mt-1 text-black font-semibold mb-5 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
          />
        </div>

        <div>
          <label
            htmlFor="diagnosticsInfo"
            className="block text-sm font-medium text-gray-700"
          >
            Jeste li ga prikopcavali na dijagnostiku, sta kaze?
          </label>
          <textarea
            id="diagnosticsInfo"
            name="diagnosticsInfo"
            value={diagnosticsInfo}
            onChange={(e) => setDiagnosticsInfo(e.target.value)}
            placeholder="Ako je ucitavana dijagnostika, sta je pisalo."
            className="mt-1 text-black font-semibold mb-5 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
          />
        </div>

        <div>
          <label
            htmlFor="warningLights"
            className="block text-sm font-medium text-gray-700"
          >
            Gori li neka lampica?
          </label>
          <textarea
            id="warningLights"
            name="warningLights"
            value={warningLights}
            onChange={(e) => setWarningLights(e.target.value)}
            placeholder="Ako gori neka lampica, napisite koja ili ako ne znate kako se zove opisite je kako izgleda."
            className="mt-1 text-black font-semibold mb-5 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            DALJE
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarIsueForm;
``;
