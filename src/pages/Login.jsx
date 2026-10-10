import React, { useContext } from "react";
import "./Login.css";
import { LanguageContext } from "../context/LanguageContext";

const Login = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="login">
      <h1>{t.login.title}</h1>
      <form>
        <div>
          <label>{t.login.email}</label>
          <input type="email" />
        </div>
        <div>
          <label>{t.login.password}</label>
          <input type="password" />
        </div>

        <button type="submit">{t.login.button}</button>
      </form>
    </div>
  );
};

export default Login;
