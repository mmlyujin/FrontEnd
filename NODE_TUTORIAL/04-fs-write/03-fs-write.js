/*
1.Log(방문기록)...: 날짜로 파일이름
 -하루 한번 :년원일
 -자주기록 : gettime(); 1/1000초 기록


*/
const fs = require("fs");
const path = require("path");

//new Date() :년원일
//가공 : getFullYear,getMonth,getDay 메소드
/* 폴더 생성 */
let yy = new Date().getFullYear();
let mm = new Date().getMonth() + 1; //달을 0부터 시작해서 +1 해줘야함
//달 앞에 0이 붙게하려면 예외처리 해줘야함
if (mm < 10) {
  mm = "0" + mm;
}
let dd = new Date().getDate();
if (dd < 32) {
  dd = "0" + dd;
}
let yymmdd = `${yy}${mm}${dd}`;
//console.log(yymmdd);
/*
fs.mkdir(yymmdd, (err) => {
  if (err) {
    throw err;
  }
  console.log(yymmdd + " 폴더가 생성되었습니다."); //오늘날짜 뜬다.
});
/*파일생성 : 시간 밀리타임 세컨즈*/
function UNIX_TIMESTAMP() {
  //1/1000초 단위로 변환
  return Math.floor(new Date().getTime()); //혹시나 소수점이 나오면 버림
}

//console.log(UNIX_TIMESTAMP());
//fs.writeFile(path.join(__dirname,"연결하고싶은폴더이름","파일이름","넣을내용",(콜백)=>{})

let str = "Login information write...";
fs.writeFile(
  path.join(__dirname, yymmdd, UNIX_TIMESTAMP() + ".txt"),
  str,
  (err) => {
    if (err) {
      throw err;
    }
    console.log(UNIX_TIMESTAMP() + " 파일이 생성되었습니다.");
  }
);
