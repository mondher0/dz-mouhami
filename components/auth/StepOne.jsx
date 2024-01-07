import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import FormControl from "./FormControl";
import { setActivStep } from "../../store/features/auth/auth-slice";

const StepOne = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-white text-center text-[30px] font-semibold">
        je suis un <span className="text-[#FFC700]">Avocat</span>
      </h1>
      <form
        className="flex flex-col items-center w-full gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setActivStep(1));
        }}
      >
        <FormControl name="Email address:" type="email" />
        <FormControl name="password:" type="password" />
        <FormControl name="Confirm password:" type="password" />
        <Button size="lg">Next</Button>
      </form>
    </>
  );
};

export default StepOne;
