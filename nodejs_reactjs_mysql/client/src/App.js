import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
//useNavigate = react-router-dom 설치해야한다.
//주소이동을 위해서 사용한다.
//import { useNavigate } from "react-router-dom";

function App() {
  const [userid, setUserid] = useState("");
  const [passwd, setPasswd] = useState("");
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const [users, setUsers] = useState([]); //전체회원을 담기 위한 객체

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

  async function getUsers() {
    const { data } = await axios.get("http://localhost:5000/api/users");
    setUsers(data);
  }

  //화면 켜자마자 떠야 하는 데이터
  useEffect(() => {
    getUsers();
  }, []);

  //console.log(users);

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
        <div>
          {/* <h1 style={msg == 'success!' ? {} : null }>{msg}</h1> */}
          값을 넣었을 때
          <h1 style={msg == "success!" ? { backgroundColor: "yellow" } : null}>
            {msg}
          </h1>
          <table border="1">
            <thead>
              <tr>
                <td>ID</td>
                <td>UserID</td>
                <td>Password</td>
                <td>UserName</td>
                <td>Regdate</td>
                <td>update/delete</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => {
                return (
                  <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.userid}</td>
                    <td>{user.passwd}</td>
                    <td>{user.username}</td>
                    <td>{user.regdate}</td>
                    <td>update/delete</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
