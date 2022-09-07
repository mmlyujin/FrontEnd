/*
클래스 = 객체 = 배열
1.Object(js:화면에 출력할 떄,json : 통신할 때) 출력
            key : "value"    "key":"value"

2.const 객체명 = {};
3.const 객체들명 = [{},{}];
*/

/*
    객체 사용하는 이유
        -처리해야 할 데이터가 많을 때 데이터를 다루기 쉽게 하기 위해서

*/
const person = {
  userid: "코코",
  passwd: "12324",
  username: "부산광역시",
};
//객체출력
console.log(person);
console.log("아이디 : " + person.userid);
/*
if (person.passwd.length <= 8) {
  console.log("비밀번호 너무 짧음. 길게 적으셈");
}
if (person.userid == "" && person.passwd == "") {
  console.log("회원가입 페이지로 이동합니다.");
} else {
  console.log("관리자 페이지로 슝슝슝");
}
*/
//const person = {}; 객체 1명 생성
const persons = [
  {
    userid: "루비",
    regdate: "2022-09-07",
  },
  {
    userid: "단비",
    regdate: "2022-09-05",
  },
  {
    userid: "코코",
    regdate: "2022-09-01",
  },
];
console.log(persons[0]);
console.log(persons[1]);
console.log(persons[2]);
console.log("가입 날짜 : " + persons[2].regdate);

console.log("");
console.log("");
console.log("");

const jsObjUser = {
  userid: "busanit",
  passwd: "12345",
};
//웹 전송 : 문자열로 전송
//숫자로 전송 :문자로 -> 숫자로 변환해야 사용
const jsonObjUser = JSON.stringify(jsObjUser, null, 2);
console.log(jsonObjUser); //서버로 전송
//내 컴퓨터에서 받으려면 js객체로 바꿔야 -json.parse
const jsObjParse = JSON.parse(jsonObjUser);
console.log(jsObjParse);
