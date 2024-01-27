import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import FormControl from "./FormControl";
import { checkEmail } from "../../store/features/auth/auth-slice";
import Link from "next/link";

const StepOne = () => {
  const dispatch = useDispatch();
  const { email, password, error, loading } = useSelector(
    (state) => state.auth,
  );
  return (
    <>
      {error && alert("error")}
      <h1 className="text-white text-center text-[30px] font-semibold">
        je suis un <span className="text-[#FFC700]">Avocat</span>
      </h1>
      <form
        className="flex flex-col items-center w-full gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(checkEmail({ email, password }));
        }}
      >
        <FormControl displayName="Email address:" type="email" name="email" />
        <FormControl displayName="password:" type="password" name="password" />
        <FormControl
          displayName="Confirm password:"
          type="password"
          name="password"
        />
        <Button size="lg">{loading ? "Loading..." : "Next"}</Button>
        <p className="text-white">
          Vous avez un compte?{" "}
          <span className="text-[#FFC700]">
            <Link href="/loyer-login">SIGN UP</Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default StepOne;
