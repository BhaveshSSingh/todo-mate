import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

export default function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="
data:image/png;base64,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          "
          alt="logo"
        />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}
