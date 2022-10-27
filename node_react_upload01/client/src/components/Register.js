import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUseraname] = useState("");
  const [position, setPosition] = useState("");
  const [attach, setAttach] = useState("");

  const navigate = useNavigate();

  function frmHandler(e) {
    e.prventDefault();
    let formData = new FormData(); //formdata안에 자료를 전부 이어 붙이기 해서 서버로 전송
    formData.append("username", username);
    formData.append("position", position);
    formData.append("attach", attach);

    axios.post("/register", formData).then((response) => {
      if (response.data.status === 201) {
        //200, 201 : success
        window.alert(response.data.message);
        navigate("/getAllData");
      } else {
        window.alert("Failed.");
        navigate("/getAllData");
      }
    });
  }

  return (
    <div>
      <form method="post" encType="multipart/form-data" onSubmit={frmHandler}>
        <div>
          <input
            onChange={(e) => setUseraname(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            name="position"
            placeholder="Position"
            required
          />
        </div>
        <div>
          <input
            onChange={(e) => setAttach(e.target.files[0])}
            type="file"
            name="attach"
            required
          />
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}

export default Register;
