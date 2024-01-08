"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setActivStep } from "../../store/features/auth/auth-slice";

const UserStepOne = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-[#001F3F] text-center text-[30px] font-semibold">
        je suis un <span className="text-[#FFC700]">particulier</span> /{" "}
        <span className="text-[#FFC700]">entreprise</span>
      </h1>
      <p className="text-[#001F3F] text-center text-[30px] font-semibold">
        s’identifier avec google
      </p>
      <Button
        variant="secondary"
        onClick={() => {
          dispatch(setActivStep(1));
        }}
      >
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
          <span className="text-[#1010C8]">conditions d'utilisation</span> et la{" "}
          <span className="text-[#1010C8]">politique de confidentialité</span>
        </p>
        <p className="text-[#001F3F] ">
          Vous avez de compte?{" "}
          <span className="text-[#1010C8]">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserStepOne;
