"use client";
import React, { useEffect } from "react";
import ProfileSideBar from "./ProfileSideBar";
import ProfileSetting from "./ProfileSetting";
import PersonnelSettings from "./PersonnelSettings";
import SecuritySettings from "./SecuritySettings";
import SocialMedia from "./SocialMedia";
import { useDispatch, useSelector } from "react-redux";
import { setProfileInfo } from "../../store/features/profile/profile-slice";

const ProfileContent = ({ profileInfo }) => {
  const { profileState } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProfileInfo(profileInfo));
  }, []);
  return (
    <div className="flex items-start justify-between w-full gap-9">
      <ProfileSideBar />
      {profileState === "PROFILE_SETTINGS" && <ProfileSetting />}
      {profileState === "PERSONNEL_SETTINGS" && <PersonnelSettings />}
      {profileState === "SECURITY_SETTINGS" && <SecuritySettings />}
      {profileState === "SOCIAL_MEDIA" && <SocialMedia />}
    </div>
  );
};

export default ProfileContent;
