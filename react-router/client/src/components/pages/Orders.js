import React from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Let's Orders!! :D</h2>
      {/* back버튼 이동 */}
      {/* 주소이동 : useNavigate(import) -> navigate(사용할 때) */}
      {/* -1은 뒤로, 0은 현재 위치 */}
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Orders;
