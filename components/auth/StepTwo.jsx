"use client";
import React from "react";
import FormControl from "./FormControl";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { register, setActivStep } from "../../store/features/auth/auth-slice";
import PdfAsset from "./PdfAsset";
import DispoTable from "./DispoTable";
import LocationMap from "./LocationMap";
import { DropDown } from "./DropDown";
import { CategoriesDropDown } from "./CategoriesDropDown";

const StepTwo = () => {
  const dispatch = useDispatch();
  const {
    disponibility,
    commune,
    wilaya,
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    description,
    categorieId,
    position,
    social,
    error,
  } = useSelector((state) => state.auth);
  return (
    <>
      <h1 className="text-white text-center text-[30px] font-semibold">
        Infomations Personnelles
      </h1>
      <form
        className="flex flex-col items-center w-full gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(disponibility);
          let data = [];
          disponibility.forEach((item) => {
            if (item.hours.length > 0) {
              data.push(item);
            }
          });
          console.log(data);
          console.log(wilaya);
          console.log(commune);
          dispatch(
            register({
              firstName,
              lastName,
              email,
              password,
              phone,
              address,
              description,
              categorieId,
              position,
              social,
              wilaya,
              commune,
            }),
          );
        }}
      >
        <FormControl displayName="Family name :" type="text" name="lastName" />
        <FormControl displayName="First name:" type="text" name="firstName" />
        <FormControl displayName="Address:" type="text" name="address" />
        <FormControl
          displayName="Description:"
          type="text"
          name="description"
        />
        <div className="flex w-1/2 gap-6">
          <DropDown name="wilaya" displayValue="Wilaya" />
          <DropDown name="commune" displayValue="Commune" />
        </div>
        <FormControl displayName="N de telephone:" type="tel" name="phone" />
        <div className="flex items-center justify-start w-1/2 gap-5">
          <label
            htmlFor="pdf"
            className="text-white text-[18px] font-semibold flex hover:cursor-pointer"
          >
            Spécialité:
          </label>
          <CategoriesDropDown name="categorieId" displayValue="Spécialité" />
        </div>
        <FormControl displayName="Social links:" type="text" name="social" />
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
        <div className="w-1/2">
          <p className="text-white text-[18px] font-semibold">
            Goegraphical location :
          </p>
          <LocationMap />
        </div>
        <DispoTable />
        <Button size="lg">Next</Button>
      </form>
    </>
  );
};

export default StepTwo;
