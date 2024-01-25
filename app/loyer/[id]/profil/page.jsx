import React from "react";
import ProfileHeader from "../../../../components/loyer/ProfileHeader";
import ProfileContent from "../../../../components/loyer/ProfileContent";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-7 w-full">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};

export default ProfilePage;
