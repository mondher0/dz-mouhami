import React from "react";
import ProfileInput from "./ProfileInput";
import EditLocation from "./EditLocation";
import EditDispoTable from "./EditDispoTable";

const PersonnelSettings = () => {
  return (
    <div className="flex gap-4 flex-col items-start justify-center w-4/5 border border-solid border-blue-900 rounded-lg bg-white shadow-md p-6">
      <ProfileInput />
      <ProfileInput />
      <ProfileInput />
      <ProfileInput />
      <ProfileInput />
      <ProfileInput />
      <ProfileInput />
      <EditLocation />
      <EditDispoTable />
    </div>
  );
};

export default PersonnelSettings;
