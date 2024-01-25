import { Globe, Shield } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "../ui/button";

const ProfileSideBar = () => {
  const features = [
    {
      title: "profile setting",
      icon: <FaUser size={30} color="#FFC700" />,
      description: "change profile information",
    },
    {
      title: "personnelle setting ",
      icon: <IoSettingsOutline size={30} color="#FFC700" />,
      description: "change your personnelle settings",
    },
    {
      title: "Security settings",
      icon: <Shield size={30} color="#FFC700" />,
      description: "change password and email",
    },
    {
      title: "Social media",
      icon: <Globe size={30} color="#FFC700" />,
      description: "add any personnelle accounts",
    },
  ];
  return (
    <aside className="w-fit bg-white rounded-[30px] shadow-md p-6 sticky top-0  flex flex-col gap-[50px]">
      <ul className="flex flex-col gap-5 items-start justify-center">
        {features.map((feature, index) => {
          return (
            <li key={index}>
              <div className="flex items-center gap-4">
                <div className="w-[65px] h-[65px] bg-gray-200 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-[15px] font-bold">{feature.title}</p>
                  <p className="text-[12px] text-[#8E8E8E]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-5 w-full justify-center mt-[50px]">
        <Button>Update</Button>
        <Button variant="outline" className="text-[#8E8E8E]">
          Cancel
        </Button>
      </div>
    </aside>
  );
};

export default ProfileSideBar;
