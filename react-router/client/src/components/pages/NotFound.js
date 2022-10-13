import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <h1>Page Not Found...</h1>
      <Link to="/">Main</Link>
    </>
  );
}

export default NotFound;
