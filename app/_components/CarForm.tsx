"use client";

import React, { useState } from "react";

const CarForm: React.FC = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [power, setPower] = useState("");
  const [transmission, setTransmission] = useState("Automatski");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ brand, model, year, fuel, engineSize, power, transmission });
  };

  return (
    <div className="gradient-border rounded-2xl">
      <div className="inner-content rounded-2xl">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Marka automobila:
            </label>
            <input
              id="brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
              className="mt-1 text-black font-semibold mb-5 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              id="model"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
              className="mt-1 text-black font-semibold block mb-5 w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              id="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
              className="mt-1 mb-5 block w-full p-2.5 border border-gray-300 rounded-md text-black font-semibold shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              id="fuel"
              name="fuel"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
              className="mt-1 text-black font-semibold block w-full p-2.5 border border-gray-300 rounded-md shadow-sm mb-5 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              id="engineSize"
              name="engineSize"
              value={engineSize}
              onChange={(e) => setEngineSize(e.target.value)}
              placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
              className="mt-1 mb-5 text-black font-semibold block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              id="power"
              name="power"
              value={power}
              onChange={(e) => setPower(e.target.value)}
              placeholder="Primer: VW, BMW, Audi, Mercedes-Benz"
              className="mt-1 block text-black font-semibold w-full p-2.5 border border-gray-300 rounded-md mb-5 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              id="transmission"
              name="transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              className="mt-1 mb-10 text-black font-semibold block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
      </div>
    </div>
  );
};

export default CarForm;
