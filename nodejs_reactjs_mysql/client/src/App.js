import "./App.css";
import { useState } from "react";
import axios from "axios";
//useNavigate = react-router-dom 설치해야한다.
//주소이동을 위해서 사용한다.
//import { useNavigate } from "react-router-dom";

function App() {
  const [userid, setUserid] = useState("");
  const [passwd, setPasswd] = useState("");
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  //const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault(); //page넘김 X
    // const result = await axios.post("http://localhost:5000/api/users/addUser", {
    //   userid,
    //   passwd,
    //   username,
    // }); //값은 전달하는 거니깐 post
    // console.log(result.data.msg);
    const { data } = await axios.post(
      "http://localhost:5000/api/users/addUser",
      { userid, passwd, username }
    );
    setMsg(data.msg);
  }

  return (
    <>
      <h1>{msg}</h1>
      <div>
        {/* submit 누를 때 함수 발생시키기 -> onSubmit */}
        <form method="post" autoComplete="off" onSubmit={handleSubmit}>
          ID
          <input
            type="text"
            name="userid"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
          <br />
          Passwd
          <input
            type="text"
            name="passwd"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          <br />
          Name
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <button type="submit">Register</button>
          {/* 버튼을 누르면 그때 axios 실행 */}
        </form>
      </div>
    </>
  );
}

export default App;
