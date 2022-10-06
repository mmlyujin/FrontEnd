import { useState } from "react";

function Forms() {
  const [userid, setUserid] = useState("");
  const [subject, setSubject] = useState("");
  const [agree, setAgree] = useState(false);

  //submit 했을 때 실행하는 함수
  function handleData(e) {
    e.preventDefault(); //기본 동작을 막음(input했을 때 화면넘어가는 걸 막음)
    if (userid == "") {
      alert("아이디를 입력하세요");
    }
  }

  return (
    //회원가입
    <div>
      {/* submit 버튼을 누르면 실행하는 함수는 form 안에 함수 이름만 사용 */}
      <form method="post" onSubmit={handleData}>
        {/* <h1>{userid}</h1>
        <h1>{subject}</h1>
        <h1>{agree}</h1>
        <p></p> */}
        <div>
          아이디 :
          <input type="text" onChange={(e) => setUserid(e.target.value)} />
        </div>
        <div>
          과목명 :
          <select onChange={(e) => setSubject(e.target.value)}>
            <option>Java</option>
            <option>Spring</option>
            <option>NodeJS</option>
            <option>ReactJS</option>
          </select>
        </div>
        <div>
          {/* 선택하면 true, 해제하면 false */}
          <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
          회원가입에 동의하시겠습니까?
        </div>
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
}

export default Forms;
