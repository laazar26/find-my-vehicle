import Image from "next/image";
import logo from "@/public/logo.webp";
import mouse from "@/public/mouse.png";
import CarDetailsForm from "./_components/CarDetailsForm";
import CarForm from "./_components/CarForm";

console.log("log", process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center mt-32">
        <div>
          <h1 className="text-7xl mb-10 font-medium max-w-[650px]">
            Instant solution for your new vehicle
          </h1>
          <p className="max-w-xl mb-10 text-lg">
            Dobijte trenutnu, iskrenu i besplatnu dijagnostiku električnih
            sistema — bez dodatnih prodaja, samo rešenja.
          </p>
          <button className="px-4 py-2 mb-7 font-semibold bg-stone-100 text-black rounded-full">
            {" "}
            Find My Vehicle
          </button>
          <div className="flex items-center ">
            <Image width={25} height={25} src={mouse} alt="mouse icon" />
            <p>scroll down</p>
          </div>
        </div>
        <div className="">
          <Image width={500} height={500} src={logo} alt="app logo" />
        </div>
      </div>

      <CarForm />
      {/* <CarDetailsForm /> */}
    </>
  );
}
