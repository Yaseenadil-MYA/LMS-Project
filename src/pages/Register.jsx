import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>

        <div>
          <label>password</label>
          <input type="password" />
        </div>
        <div>
          <label>Comfirm password</label>
          <input type="password" />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
