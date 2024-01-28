"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LoyerSection = () => {
  const router = useRouter();
  return (
    <section
      className="mt-[50px] flex flex-col justify-center items-start gap-10 p-[60px]"
      id="avocat"
    >
      <p className="text-[#FFC700] text-[30px] font-semibold">
        VOUS ETES AVOCAT
      </p>
      <h1 className="text-[#FFF] font-bold text-[40px]">
        Simplifiez Votre Travail Juridique avec Nous
      </h1>
      <p className="text-[#fff] font-medium text-[25px]">
        Si vous êtes avocat, signez-vous ici pour accéder à des
        <br /> outils exclusifs, simplifier votre pratique juridique, et faire
        <br />
        partie d'une communauté dédiée à l'excellence <br /> juridique.
      </p>
      <div className="flex items-center justify-center w-full">
        <Button
          size="lg"
          onClick={() => {
            router.push("/loyer-login");
          }}
        >
          JOIN US HERE
        </Button>
      </div>
    </section>
  );
};

export default LoyerSection;
