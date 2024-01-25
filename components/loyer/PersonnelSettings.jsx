import React from "react";
import ProfileInput from "./ProfileInput";
import EditLocation from "./EditLocation";
import EditDispoTable from "./EditDispoTable";

const PersonnelSettings = () => {
  return (
    <div className="flex gap-4 flex-col items-start justify-center w-4/5 border border-solid border-blue-900 rounded-lg bg-white shadow-md p-6">
      <ProfileInput name="Family name :" type="text" id="fn" data="firstName" />
      <ProfileInput name="first name :" type="text" id="ln" data="lastName" />
      <ProfileInput name="address :" type="text" id="add" data="address" />
      <ProfileInput name="wilaya :" type="text" id="wy" data="wilaya" />
      <ProfileInput name="Commune:" type="text" id="co" data="commune" />
      <ProfileInput name="n de telephone" type="tel" id="phone" data="phone" />
      <ProfileInput name="spécialité" type="text" id="sp" data="specialite" />
      <EditLocation />
      <EditDispoTable />
    </div>
  );
};

export default PersonnelSettings;
