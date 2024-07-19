"use client";

import { carBrands, fuelTypes, years, powerValues } from "@/app/_lib/data/data";
import { useFormState } from "react-dom";
import { getFormData } from "../_lib/actions";

function Form() {
  const [state, formAction] = useFormState(getFormData, null);

  return (
    <form action={formAction}>
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
      <div>
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-700"
        >
          Marka automobila:
        </label>
        <select
          name="brand"
          className="mt-1 text-black font-semibold mb-5 block h-14 w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="" disabled>
            Odaberite marku
          </option>
          {carBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
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
          placeholder="Primer: Golf, Civic, Corolla"
          className="mt-1 h-14 text-black font-semibold block mb-5 w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-700"
        >
          Godište
        </label>
        <select
          name="year"
          className="mt-1 text-black font-semibold mb-5 block h-14 w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="" disabled>
            Odaberite godište
          </option>
          {[...years].reverse().map((year) => (
            <option key={year} value={year}>
              {year} god.
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="fuel"
          className="block text-sm font-medium text-gray-700"
        >
          Gorivo
        </label>
        <select
          name="fuel"
          className="mt-1 h-14 text-black font-semibold block w-full p-2.5 border border-gray-300 rounded-md shadow-sm mb-5"
        >
          <option value="" disabled>
            Odaberite gorivo
          </option>
          {fuelTypes.map((fuel) => (
            <option key={fuel} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>
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
          placeholder="Primer: 2000"
          className="mt-1 h-14 mb-5 text-black font-semibold block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="power"
          className="block text-sm font-medium text-gray-700"
        >
          Snaga (kw)
        </label>
        <select
          name="power"
          className="mt-1 h-14 block text-black font-semibold w-full p-2.5 border border-gray-300 rounded-md mb-5 shadow-sm"
        >
          <option value="" disabled>
            Odaberite snagu
          </option>
          {powerValues.map((power) => (
            <option key={power} value={power}>
              {power}
            </option>
          ))}
        </select>
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
          className="mt-1 mb-10 text-black font-semibold block w-full p-2.5 border h-14 border-gray-300 rounded-md shadow-sm"
        >
          <option value="Automatski">Automatski</option>
          <option value="Manualni">Manualni</option>
        </select>
      </div>
      <button className="py-4 px-7 bg-cyan-950">Submit</button>
    </form>
  );
}

export default Form;
