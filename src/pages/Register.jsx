import React, { useContext } from "react";
import "./Register.css";
import { LanguageContext } from "../context/LanguageContext";

const Register = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="register">
      <h1>{t.register.title}</h1>
      <form>
        <div>
          <label>{t.register.name}</label>
          <input type="text" />
        </div>
        <div>
          <label>{t.register.email}</label>
          <input type="email" />
        </div>

        <div>
          <label>{t.register.password}</label>
          <input type="password" />
        </div>
        <div>
          <label>{t.register.confirmPassword}</label>
          <input type="password" />
        </div>
        <button>{t.register.button}</button>
      </form>
    </div>
  );
};

export default Register;
