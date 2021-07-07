import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function AuthScreen() {
  const { loginWithRedirect, logout } = useAuth0();
  const [isRegistered, setIsRegistered] = useState(true);
  return (
  <div>
        <button onClick={()=>{
            loginWithRedirect();
        }} type="submit">
          {isRegistered ? "Login" : "Register"}
        </button>
      <p>
        {isRegistered ? "New to this page?" : "Already Have an account?"}{" "}
        <span
          onClick={() => {
            setIsRegistered((prev) => !prev);
          }}
        >
          {isRegistered ? "Sign Up" : "Sign in"}
        </span>
      </p>
  </div>);
}

export default AuthScreen;
