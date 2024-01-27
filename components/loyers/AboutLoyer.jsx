import React from "react";
import CaseChart from "./CaseChart";

const AboutLoyer = ({ desc }) => {
  return (
    <section id="about" className="p-10">
      <h1 className="text-[#FFC700] text-[40px] font-bold">about</h1>
      <p className="text-[#001F3F] text-[30px]">{desc}</p>
      <p className="text-[#001F3F] text-[30px] font-semibold">
        cases statistic
      </p>
      <div className="flex items-center justify-evenly">
        <CaseChart />
        <div>
          <div className="flex items-center gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-[#FFC700]"></div>
            <p>Solved cases</p>
            <span>70%</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-[#0066CC]"></div>
            <p>Pending cases</p>
            <span>25%</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-[#FF5733]"></div>
            <p>Awaiting Resolution</p>
            <span>5%</span>
          </div>
        </div>
      </div>
      <p className="text-center text-[#90A4AE]">
        Trust in our proven track record.
      </p>
    </section>
  );
};

export default AboutLoyer;
