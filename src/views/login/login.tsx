import { useEffect, useState } from "react";
import Logo from "../../components/logo/logo";
import SignIn from "../../components/signIn/signIn";
import Toast from "../../components/toast/toast";
import "./login.css";

const Login = () => {
  const [toast, setToast] = useState(false);
  useEffect(() => {
    setToast(Boolean(sessionStorage.getItem("success")));
  });
  setInterval(() => {
    sessionStorage.removeItem("success");
    setToast(Boolean(sessionStorage.getItem("success")));
  }, 2000);

  return (
    <div>
      <div className="snackBar">
        {toast ? <Toast message="signUp success" /> : ""}
      </div>
      <div className="container">
        <div className="loginContainer">
          <Logo />
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
