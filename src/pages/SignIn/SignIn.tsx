import React, { FormEvent, useState } from "react";
import "./SignIn.scss";

const SignIn: React.FC = () => {
  const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("login");
  };

  return (
    <main>
      <h1>Sign In</h1>

      <form className="form">
        <input
          className="form__input"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="form__input"
          type="password"
          placeholder="Enter your password"
        />

        <button className="form__button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </main>
  );
};

export default SignIn;
