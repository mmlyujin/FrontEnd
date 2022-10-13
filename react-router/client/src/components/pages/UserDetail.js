import React from "react";
import { useParams, useNavigate } from "react-router-dom";
//const id = useParams();

function UserDetail() {
  const { getID } = useParams();
  const navigate = useNavigate(); //메소드

  return (
    <>
      <h3>사원번호 {getID}번 : 개인정보 상세보기</h3>
      <p>상세보기(table)</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/admin")}>List</button>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

export default UserDetail;
