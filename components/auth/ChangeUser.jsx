import React from "react";
import { Button } from "../ui/button";

const ChangeUser = ({ user }) => {
  return (
    <div className="bg-white w-1/4 flex items-center justify-center flex-col">
      {user === "loyer" ? (
        <h1 className="text-[#FFC700] text-center text-[35px] font-semibold">
          je suis <br />
          Particulier
        </h1>
      ) : (
        <h1>je suis un avocat</h1>
      )}
      <Button size="lg">Sign in</Button>
    </div>
  );
};

export default ChangeUser;
