import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUsers() {
  const [userid, SetUserid] = useState("");
  const [passwd, setPasswd] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate(); //뒤에 () 꼭 붙여야함.

  async function handleForm(e) {
    e.preventDefault();
    const info = {
      userid,
      passwd,
      username,
    };
    // await axios.post("http://localhost:5000/api/users/addUser",{userid,passwd,username});
    await axios.post("http://localhost:5000/api/users/addUser", info);
    navigate("/"); //list로 이동하기 위함.
  }

  return (
    <div>
      <form onSubmit={handleForm} method="post" autoComplete="off">
        <input
          type="text"
          name="userid"
          onChange={(e) => SetUserid(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="passwd"
          onChange={(e) => setPasswd(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input type="submit" value="register"></input>
      </form>
    </div>
  );
}

export default AddUsers;
