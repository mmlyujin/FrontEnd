import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetUsers() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    //axios로 실행을 시킴
    const { data } = await axios.get("http://localhost:5000/api/users");
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [users]);
  //실행값 저장
  //[변수 ] :변수의 값이 변할 때 재실행 됨. 변수 안 넣으면 새로고침 내가 해야 함.

  async function deleteUser(id) {
    await axios.delete("http://localhost:5000/api/users/deleteUser/" + id);
    getUsers();
  }

  return (
    <div>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <td>No.</td>
            <td>Userid.</td>
            <td>Password.</td>
            <td>Username.</td>
            <td>Regdate.</td>
            <td>.</td>
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
                <td>
                  view/update/
                  <Link onClick={() => deleteUser(user.id)}>delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GetUsers;
