import React from "react";
import ProfileHeader from "../../../../components/loyer/ProfileHeader";
import ProfileContent from "../../../../components/loyer/ProfileContent";
import { baseUrl } from "../../../../lib/utils";
import { cookies } from "next/headers";

const ProfilePage = async () => {
  const getProfileInfo = async () => {
    try {
      const token = cookies().get("token");
      console.log(token.value);
      const response = await fetch(`${baseUrl}users/lawyer/me`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const profileInfo = await getProfileInfo();
  console.log(profileInfo);
  return (
    <div className="flex flex-col items-start justify-center gap-7 w-full">
      <ProfileHeader />
      <ProfileContent profileInfo={profileInfo} />
    </div>
  );
};

export default ProfilePage;
