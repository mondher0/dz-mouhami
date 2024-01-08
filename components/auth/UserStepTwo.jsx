import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const UserStepTwo = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-[#001F3F] text-center text-[30px] font-semibold">
        je suis un <span className="text-[#FFC700]">particulier</span> /{" "}
        <span className="text-[#FFC700]">entreprise</span>
      </h1>
      <p className="text-[#001F3F] text-center text-[30px] font-semibold">
        Votre compte a été crée avec succes
      </p>
      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default UserStepTwo;
