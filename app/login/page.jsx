import React from "react";
import ChangeUser from "../../components/auth/ChangeUser";
import UserLogin from "../../components/auth/UserLogin";

const LoginPage = () => {
  return (
    <div className="flex bg-[#3B372C]">
      <ChangeUser user="user" />
      <UserLogin />
    </div>
  );
};

export default LoginPage;
