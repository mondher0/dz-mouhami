import React from "react";
import ProfileSideBar from "./ProfileSideBar";
import ProfileSetting from "./ProfileSetting";
import PersonnelSettings from "./PersonnelSettings";

const ProfileContent = () => {
  return (
    <div className="flex items-start justify-between w-full gap-9">
      <ProfileSideBar />
      {/* <ProfileSetting /> */}
      <PersonnelSettings />
    </div>
  );
};

export default ProfileContent;
