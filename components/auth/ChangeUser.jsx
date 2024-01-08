"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ChangeUser = ({ user }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        user === "loyer" ? "bg-white" : "bg-[#3B372C]"
      } w-1/4 flex items-center justify-center flex-col`}
    >
      {user === "loyer" ? (
        <h1 className="text-[#FFC700] text-center text-[35px] font-semibold">
          je suis <br />
          Particulier
        </h1>
      ) : (
        <h1 className="text-[#FFC700] text-center text-[35px] font-semibold">
          je suis un avocat
        </h1>
      )}
      <Button
        size="lg"
        type="button"
        onClick={() => {
          if (user === "loyer") {
            router.push("/register");
          } else {
            router.push("/loyer-register");
          }
        }}
      >
        Sign in
      </Button>
    </div>
  );
};

export default ChangeUser;
