import React from "react";
import ChangeUser from "../../components/auth/ChangeUser";
import UserRegister from "../../components/auth/UserRegister";

const RegisterPage = () => {
  return (
    <div className="flex bg-[#3B372C]">
      <ChangeUser user="user" />
      <UserRegister />
    </div>
  );
};

export default RegisterPage;
