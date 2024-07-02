"use client";

import { useFormState } from "react-dom";
import { getInfo } from "../_lib/actions";

function DetailsForm() {
  const [state, action] = useFormState(getInfo, null);

  return (
    <form action={action}>
      <div>
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-700"
        >
          Marka automobila:
        </label>
        <input
          name="brand"
          placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
          className="mt-1 text-black font-semibold  mb-5 block h-14 w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="model"
          className="block text-sm font-medium text-gray-700"
        >
          Model
        </label>
        <input
          name="model"
          placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
          className="mt-1 h-14 text-black font-semibold block mb-5 w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-700"
        >
          Godište
        </label>
        <input
          name="year"
          placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
          className="mt-1 h-14 mb-5 block w-full p-2.5 border border-gray-300 rounded-md text-black font-semibold shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="fuel"
          className="block text-sm font-medium text-gray-700"
        >
          Gorivo
        </label>
        <input
          name="fuel"
          placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
          className="mt-1 h-14 text-black font-semibold block w-full p-2.5 border border-gray-300 rounded-md shadow-sm mb-5 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="engineSize"
          className="block text-sm font-medium text-gray-700"
        >
          Kubikaza (cc)
        </label>
        <input
          name="engineSize"
          placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
          className="mt-1 h-14 mb-5 text-black font-semibold block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="power"
          className="block text-sm font-medium text-gray-700"
        >
          Snaga (kw)
        </label>
        <input
          name="power"
          placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
          className="mt-1 h-14 block text-black font-semibold w-full p-2.5 border border-gray-300 rounded-md mb-5 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="transmission"
          className="block text-sm font-medium text-gray-700"
        >
          Menjac
        </label>
        <select
          name="transmission"
          className="mt-1 mb-10 text-black font-semibold block w-full p-2.5 border h-14 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="Automatski">Automatski</option>
          <option value="Manualni">Manualni</option>
        </select>
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
  );
}

export default DetailsForm;
