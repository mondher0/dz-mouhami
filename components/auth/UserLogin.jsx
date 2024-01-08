import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const UserLogin = () => {
  return (
    <div className="w-3/4 flex flex-col  justify-center p-[20px] gap-16 rounded-tr-none rounded-br-none rounded-tl-3xl rounded-bl-3xl bg-white">
      <h1 className="text-[#FFC700] text-center text-[30px] font-semibold">
        Login
      </h1>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-[#001F3F] text-center text-[30px] font-semibold">
          je suis un <span className="text-[#FFC700]">particulier</span> /{" "}
          <span className="text-[#FFC700]">entreprise</span>
        </h1>
        <p className="text-[#001F3F] text-center text-[30px] font-semibold">
          s’identifier avec google
        </p>
        <Button variant="secondary">
          <Image
            src="/assets/google-icon.svg"
            width={20}
            height={20}
            alt="google"
          />
          Sign in with Google
        </Button>
        <div className="flex flex-col gap-3">
          <p className="text-[#001F3F] ">
            J'accepte les{" "}
            <span className="text-[#1010C8]">conditions d'utilisation</span> et
            la{" "}
            <span className="text-[#1010C8]">politique de confidentialité</span>
          </p>
          <p className="text-[#001F3F] ">
            Vous n'avez pas encore de compte?{" "}
            <span className="text-[#1010C8]">
              <Link href="/register">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
