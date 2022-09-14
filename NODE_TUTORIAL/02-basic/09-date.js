/*
 .getFullYear() 
 .getMonth()+1 ->0부터 시작해서 +1 해줘야함.
 .getDate() -getDay XX
*/
const today = new Date();
// //console.log(today); ->잘 알아보지 못하게 나옴.
// const yy = today.getFullYear();
// let mm = today.getMonth()+1;
//const로 하면 today.getMonth()가 변하지 않는 데이터가 되므로 for문에서 변경이 불가능
// if (mm < 10) {
//   mm = "0" + mm;
// }
// const dd = today.getDate();

//const => 선언과 동시에 리터럴(변하지 않는 데이터) 값을 할당해서 변환이 불가.
//int a = 1; int 앞에 final를 붙일 시, a는 상수(변하지 않는 변수)가 된다.
//여기서 리터럴은 1 이다.
//
//let => 리터럴 값의 재할당이 가능
function getYymmdd(today) {
  const yy = today.getFullYear();
  const mm =
    today.getMonth() < 9
      ? `0${today.getMonth() + 1}`
      : `${today.getMonth() + 1}`;
  const dd = today.getDate();

  return `${yy}/${mm}/${dd}`;
}
console.log(getYymmdd(new Date()));
//출력 -> 오늘 날짜 : 2022/8/14

//.getTime() : 날짜를 초로 변환해서 사용할 때
const log_name = "Log";
const attach_name = "image";
//console.log(new Date().getTime()); //메서드 체크하고 ()빼먹지 말기

console.log(`Log file을 생성합니다 : ${log_name}_${new Date().getTime()}.txt`);

//.jpg .jpeg : 사진 배경이 흰색
//.png : 뒷 배경이 투명 사진이나 이미지
console.log(
  "업로드 된 첨부파일 : " +
    attach_name +
    "_" +
    new Date().getTime() +
    "_원본이름_" +
    ".jpg"
);
