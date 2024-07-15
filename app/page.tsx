import HeroSection from "./_components/HeroSection";
<<<<<<< HEAD
import { uploadCarProblem } from "@/app/_lib/actions";

export default async function Home() {
  await uploadCarProblem(undefined, undefined);
=======
import MainForm from "./_components/MainForm";
>>>>>>> aa290d2ce565d85a1a5173b12cb643a6976b21fe

  return (
    <>
      <HeroSection />
<<<<<<< HEAD
      <CarForm />

      {/* <CarDetailsForm /> */}
=======
>>>>>>> aa290d2ce565d85a1a5173b12cb643a6976b21fe
    </>
  );
}
