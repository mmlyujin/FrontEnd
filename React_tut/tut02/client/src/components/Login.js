import { useState } from "react";

function Login() {
  //false 예외사항이 x, true 는 입력값에 예외사항이 생겼을 때
  const [userid, setUserid] = useState("");
  const [passwd, setPasswd] = useState("");
  const [useridError, setUseridError] = useState(false);
  const [passwdError, setPasswdError] = useState(false);

  function useridHandler(e) {
    if (e.target.value.length < 10) {
      setUseridError(true);
      //setUserid(""); 잘못 썼다면 공백처리
    } else {
      setUseridError(false);
      setUserid(e.target.value); //예외없이 정상적으로 입력했다면 변수에 저장
    }
  }

  function passwdHandler(e) {
    if (e.target.value.length < 12) {
      setPasswdError(true);
      //setPasswd("");
    } else {
      setPasswdError(false);
      setPasswd(e.target.value); //변수에 저장
    }
  }

  function loginHandler(e) {
    e.preventDefault();
    // eslint-disable-next-line eqeqeq
    if (userid == "" || passwd == "") {
      alert("아이디와 비밀번호를 입력하세요");
    } else {
      alert("로그인을 진행합니다.");
    }
  }

  return (
    <div>
      <form method="post" onSubmit={loginHandler}>
        <div>
          아이디 :<input type="text" onChange={useridHandler}></input>
          <span>{useridError ? "아이디 길이가 유효하지 않습니다." : ""}</span>
        </div>
        <div>
          비밀번호 :<input type="text" onChange={passwdHandler}></input>
          <span>{passwdError ? "사용할 수 없는 비밀번호입니다." : ""}</span>
        </div>
        <div>
          <input type="submit" value="Login"></input>
        </div>
      </form>
    </div>
  );
}

export default Login;
