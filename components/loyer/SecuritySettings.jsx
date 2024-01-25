import React from "react";
import ProfileInput from "./ProfileInput";
import EditLocation from "./EditLocation";
import EditDispoTable from "./EditDispoTable";

const SecuritySettings = () => {
  return (
    <div className="flex gap-4 flex-col items-start justify-center w-4/5 border border-solid border-blue-900 rounded-lg bg-white shadow-md p-6">
      <ProfileInput
        name="CURRENT PASSWORD :"
        type="password"
        id="cp"
        data="currentPassword"
      />
      <ProfileInput
        name="NEW PASSWORD:"
        type="password"
        id="np"
        data="newPassword"
      />
      <ProfileInput
        name="CONFIRM NEW PASSWORD:"
        type="password"
        id="cmp"
        data="confirmNewPassword"
      />
      <ProfileInput name="EMAIL" type="email" id="email" data="email" />
    </div>
  );
};

export default SecuritySettings;
