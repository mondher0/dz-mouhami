import React from "react";
import FormControl from "./FormControl";
import { Button } from "../ui/button";
import Link from "next/link";

const LoyerLogin = () => {
  return (
    <div className="w-3/4 flex flex-col  justify-center p-[20px] gap-20 rounded-tl-none rounded-bl-none rounded-tr-3xl  rounded-br-3xl bg-[#3B372C]">
      <h1 className="text-[#FFC700] text-center text-[30px] font-semibold">
        Login
      </h1>
      <h1 className="text-white text-center text-[30px] font-semibold">
        je suis un <span className="text-[#FFC700]">Avocat</span>
      </h1>
      <form className="flex flex-col items-center w-full gap-5">
        <FormControl displayName="Email address:" type="email" name="email" />
        <FormControl displayName="Password:" type="password" name="email" />
        <Button size="lg">Login</Button>
        <div className="flex flex-col gap-3">
          <p className="text-white ">
            J'accepte les{" "}
            <span className="text-[#FFC700]">conditions d'utilisation</span> et
            la{" "}
            <span className="text-[#FFC700]">politique de confidentialité</span>
          </p>
          <p className="text-white">
            Vous n'avez pas encore de compte?{" "}
            <span className="text-[#FFC700]">
              <Link href="/loyer-register">SIGN IN</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoyerLogin;
