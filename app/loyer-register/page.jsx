import React from "react";
import LoyerRegister from "../../components/auth/LoyerRegister";
import ChangeUser from "../../components/auth/ChangeUser";

const LoyerRegisterPage = () => {
  return (
    <div className="flex bg-white">
      <LoyerRegister />
      <ChangeUser user="loyer"/>
    </div>
  );
};

export default LoyerRegisterPage;
