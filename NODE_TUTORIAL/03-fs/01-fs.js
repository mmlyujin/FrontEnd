/*
fs :file system i/o -> 예외처리
-필요하다면 require 가져와서 사용
-directory 생성/삭제, file 쓰기/삭제/이어붙이기
-file 입출력 시
    -동기화(sync) : 1(글자만 출력)2(파일 업로드)3(글자만 출력)
        1,2,3 : 2번 작업이 끝날때까지 기다렸다가 3번 작업
    -비동기화(async)
        1,2,3 동시작업


const fs = require("fs"); //node.js 설치할 때 같이 설치되는 모듈

fs.mkdir("만들이름",콜백함수()); 디렉토리 만들기 -->콜백함수를 이용해서 예외처리 무조건 해야
fs.writeFile("만들파일이름",콜백함수()); 파일 만듬 ->콜백함수를 이용해서 예외처리 무조건 해

//files 폴더 만듬
fs.mkdir("files", function (err) {
  //arrow
  if (err) {
    throw err;
  } //예외가 생기면 출력
  console.log("파일이 생성되었습니다.");
});
//json 폴더만듬
fs.mkdir("./json", (err) => {
  if (err) throw err;

  console.log("Make Directoy Completed...");
});
//json 삭제
fs.rmdir("./json", (err) => {
  if (err) throw err;

  console.log("Remove Directoy Completed...");
});
*/
/*
    상대경로 : 위에 작업한 내용은 ./files ./json
    절대경로 : 실무 또는 프로젝트 path
     -> 현재위치,현재 파일이름, 현재 파일이름의 확장자를 관리하는 모듈
*/

/*내가 있는 디렉토리 위치 */
console.log(__dirname);
console.log(__filename);
const path = require("path"); //파일을 상세하게 관리할 때
console.log(path.parse(__filename).name);
console.log(path.extname(__filename)); //확장자 이름 -> .js
/*path.join(디렉토리,파일명) 경로 + 파일을 연결해서 절대경로로 표시할 때 */
const curDir = __dirname;
//console.log(curDir);
const filename = "index.html";

/*디렉토리 + 파일연결 :절대경로 */

const result = path.join(curDir, filename);
console.log(result);
