import React from "react";
import FormControl from "./FormControl";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setActivStep } from "../../store/features/auth/auth-slice";
import PdfAsset from "./PdfAsset";
import DispoTable from "./DispoTable";

const StepTwo = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-white text-center text-[30px] font-semibold">
        Infomations Personnelles
      </h1>
      <form
        className="flex flex-col items-center w-full gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setActivStep(2));
        }}
      >
        <FormControl name="Family name :" type="text" />
        <FormControl name="First name:" type="text" />
        <FormControl name="Address:" type="text" />
        <div className="flex w-1/2 gap-6">
          <FormControl name="Wilaya:" type="text" />
          <FormControl name="Commune:" type="text" />
        </div>
        <FormControl name="N de telephone:" type="tel" />
        <FormControl name="Spécialité:" type="text" />
        <div className="w-1/2">
          <p className="text-white text-[18px] font-semibold">
            Goegraphical location :
          </p>
        </div>
        <div className="w-1/2">
          <label
            htmlFor="pdf"
            className="text-white text-[18px] font-semibold flex hover:cursor-pointer"
          >
            veuillez joindre votre certificat professionnel :
            <PdfAsset />
          </label>
          <input type="file" id="pdf" className="opacity-0" />
          <p className="text-white text-[14px]">
            Ce certificat sera vérifié par nos administrateurs avant la
            validation de votre inscription
          </p>
        </div>
        <DispoTable />
        <Button size="lg">Next</Button>
      </form>
    </>
  );
};

export default StepTwo;
