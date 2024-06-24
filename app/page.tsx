import CarDetailsForm from "./_components/CarDetailsForm";
import CarForm from "./_components/CarForm";
import HeroSection from "./_components/HeroSection";
import { uploadCarProblem } from "@/app/_lib/actions";

export default async function Home() {
  await uploadCarProblem(undefined, undefined);

  return (
    <>
      <HeroSection />
      <CarForm />

      {/* <CarDetailsForm /> */}
    </>
  );
}
