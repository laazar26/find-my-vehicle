export const carBrands = [
  "VW",
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Kia",
  "Mazda",
];

export const fuelTypes = [
  "Benzin",
  "Dizel",
  "Benzin + Gas (TNG)",
  "Benzin + Metan (CNG)",
  "Električni pogon",
  "Hibridni pogon",
];

export const years = Array.from({ length: 2024 - 1930 + 1 }, (_, i) =>
  (1930 + i).toString()
);

export const powerValues = [
  "25kW (34KS)",
  "35kW (48KS)",
  "44kW (60KS)",
  "55kW (75KS)",
  "66kW (90KS)",
  "74kW (101KS)",
  "80kW (109KS)",
  "85kW (109KS)",
  "96kW (109KS)",
  "110kW (109KS)",
  "125kW (109KS)",
  "147kW (109KS)",
  "184kW (109KS)",
  "222kW (109KS)",
  "262kW (109KS)",
  // Add more power values as needed
];

export type CarBrand = (typeof carBrands)[number];
export type FuelType = (typeof fuelTypes)[number];
export type Year = (typeof years)[number];
export type PowerValue = (typeof powerValues)[number];
