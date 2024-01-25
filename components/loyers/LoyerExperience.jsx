import { Briefcase, GraduationCap, Languages, School } from "lucide-react";
import React from "react";

const LoyerExperience = () => {
  const experience = [
    {
      title: "ecole",
      name: "estin university",
      icon: <School />,
    },
    {
      title: "diplôma",
      name: "phd and master 2 ",
      icon: <GraduationCap />,
    },
    {
      title: "langue",
      name: "arabe/Français",
      icon: <Languages />,
    },
    {
      title: "work",
      name: "plus de 20 ans",
      icon: <Briefcase />,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-3 ">
      <p className="text-[#001F3F] font-semibold">Expérience</p>
      <div className="flex flex-col  rounded-md p-[10px] outline-none gap-5">
        {experience.map((e,index) => {
          return (
            <div className="flex items-center gap-8" key={index}>
              <label
                htmlFor="job-title"
                className="flex items-center gap-2 text-[#1F2B54] w-[100px]"
              >
                {e.icon}
                {e.title}
              </label>
              <input
                type="text"
                id="job-title"
                className="bg-transparent outline-none text-[#1F2B54D6] text-[16px] font-medium w-[250px]"
                value={e.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoyerExperience;
