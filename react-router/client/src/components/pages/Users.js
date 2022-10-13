import React from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <div style={{ margin: "20px" }}>
      <ol>
        <li>
          <Link to="userDetail/1">User 01</Link>
        </li>
        <li style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Link to="userDetail/2">User 02</Link>
        </li>
        <li>
          <Link to="userDetail/3">User 03</Link>
        </li>
      </ol>
    </div>
  );
}

export default Users;
