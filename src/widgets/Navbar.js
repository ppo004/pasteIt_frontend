import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/">Landing </Link>
      <Link to="/home">Home</Link>
    </div>
  );
}

export default Navbar;
