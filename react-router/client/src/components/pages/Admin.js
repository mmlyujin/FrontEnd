import React from "react";
import { Outlet } from "react-router-dom";
//제목은 그대로지만 아래 내용이 바뀔 때 Outlet 사용
function Admin() {
  return (
    <div>
      <h2>Users List(Admin Mode)</h2>
      {/* App.js 자식 element에 설정한 파일이 표시 됨. */}
      <Outlet />
    </div>
  );
}

export default Admin;
