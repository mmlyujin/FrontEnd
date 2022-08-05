//동작() -> 메소드
//이벤트 처리-> 메소드와 버튼을 연결
//박스 열고 닫기
// function showBox1() {
//   //   alert("ok"); 뜨는지 확인하는 용도!
//   /*console.log("ok"); 검사창 console에서 확인가능*/
//   //document.getElementById("box1").classList.remove("onOff");
//   document.querySelector("#box1").classList.remove("onOff");
// }

// function closeBox1() {
//   //   alert("안녕");
//   document.getElementById("box1").classList.add("onOff");
// }

// const closeBox1 = () => {
//   document.getElementById("box1").classList.add("onOff");
// };

//document.getElementById("box1Open").addEventListener("click", closeBox);

// let boxTwo = document.getElementById("box2");
// let boxTwoBtn = document.getElementById("box2Toggle");

// const toggleFn = () => {
//   console.log("안녕");
//   document.getElementById("box2").classList.toggle("onOff");
// };

//아이디체크버튼
// let UID = document.getElementById("userid");
// let IDBtn = document.getElementById("idBtn");
// let DomText = document.getElementById("text");

// const chkID = () => {
//   //   alert("ok");
//   //alert(UID.value);
//   if (UID.value == "busanit12345") {
//     alert("로그인 되었습니다.");
//     location.href = "https://www.naver.com";
//   } else if (UID.value == "") {
//     //공백일 때
//     DomText.innerHTML = "<b>아이디를 입력하세요.</b>";
//     UID.value = "";
//     UID.focus();
//   } else {
//     DomText.innerHTML = "<b>아이디를 확인하세요.</b>"; //아래에 글자뜨게하는 법
//     UID.value = ""; //글자지우면서 공백처리
//     UID.focus(); //깜빡임 효과
//   }
// };

// IDBtn.addEventListener("click", chkID);
