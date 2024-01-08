import ChangeUser from "../../components/auth/ChangeUser";
import LoyerLogin from "../../components/auth/LoyerLogin";

const LoyerLoginPage = () => {
  return (
    <div className="flex bg-white">
      <LoyerLogin />
      <ChangeUser user="loyer" />
    </div>
  );
};

export default LoyerLoginPage;
