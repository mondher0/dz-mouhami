import React from "react";
import SideBar from "./SideBar";

const LoyerContainer = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <main className="bg-white w-[100%] rounded-tl-[50px] rounded-bl-[50px] p-9 ">
        {children}
      </main>
    </div>
  );
};

export default LoyerContainer;
