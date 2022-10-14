import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">GetUsers</Link>
      <Link to="/addUser">AddUsers</Link>
    </div>
  );
}

export default Navbar;
