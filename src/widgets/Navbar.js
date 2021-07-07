import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { logout, isAuthenticated,user } = useAuth0();
  return (
    <div>
      <p>{isAuthenticated}</p>
      <Link to="/">Landing </Link>
      <Link to="/home">Home</Link>
      {isAuthenticated ? (
        <p
          onClick={() => {
            logout();
          }}
        >
          Logout
        </p>
      ) : (
        <Link to="/auth">Login/Register</Link>
      )}
      {isAuthenticated ? <img width={30} src={user.picture} /> : <></>}
    </div>
  );
}

export default Navbar;
