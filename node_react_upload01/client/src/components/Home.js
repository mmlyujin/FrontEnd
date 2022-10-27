import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, SetUsers] = useState([]);

  async function getAllData() {
    await axios.get("/getAllData").then((response) => {
      if (response.data.status === 201) {
        SetUsers(response.data.users);
        console.log(response.data.message);
      } else {
        console.log("Get Data Failed.");
      }
    });
  }

  useEffect(() => {
    getAllData();
  }, []);

  async function deleteItem(id) {
    await axios.delete(`/delete/${id}`).then((response) => {
      if (response.data.status === 201) {
        window.alert(response.data.message);
        getAllData(); //useEffect() 새로고침 안하기 위해서
      } else {
        window.alert("Delete Failed..");
      }
    });
  }

  return (
    <div className="wrapper">
      {users.length > 0
        ? users.map((user, key) => {
            return (
              <div className="box" key={key}>
                <h5>{user.id}</h5>
                <img src={user.attach} alt={user.id} />
                <h3>{user.username}</h3>
                <h4>{user.position}</h4>
                <h5>{user.regdate}</h5>
                <p>
                  <button>수정</button>/
                  <button onClick={() => deleteItem(user.id)}>삭제</button>
                </p>
              </div>
            );
          })
        : "No Data"}
    </div>
  );
}

export default Home;
