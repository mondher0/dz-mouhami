import { Briefcase, GraduationCap, Languages, School } from "lucide-react";
import React from "react";

const Experience = () => {
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
      <p className="text-[#FFC700] text-[24px] font-semibold">Expérience</p>
      <div className="flex flex-col border border-solid border-black rounded-md bg-blue-100 p-[10px] outline-none">
        {experience.map((e) => {
          return (
            <div className="flex items-center gap-8">
              <label
                htmlFor="job-title"
                className="flex items-center gap-2 text-[#8E8E8E] w-[100px]"
              >
                {e.icon}
                {e.title}
              </label>
              <input
                type="text"
                id="job-title"
                className="bg-transparent outline-none text-[#001F3F] text-[18px] font-bold w-[250px]"
                value={e.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
