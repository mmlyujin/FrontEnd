/*    ** fs모듈, path모듈
    1. 텍스트 파일 : fs.writeFile();
    2. 절대경로 : path.join();
    3. 디렉토리 생성 : fs.mkdir();
*/

const fs = require("fs");
const path = require("path");
/*
// directory 생성 -> 존재하면 건너 뜀.
if (!fs.existsSync("json")) {
  //json폴더가 없으면 만들어라.
  fs.mkdir(path.join(__dirname, "json"), (err) => {
    //file i/o => call back 함수 필요!
    if (err) {
      throw err;
    }
    console.log("디렉토리 생성");
  });
}
//파일생성
// c:\ - 폴더 - 파일 => 기본경로
let message = "2022-09-08 Login을 기록합니다....";
fs.writeFile(path.join(__dirname, "file.txt"), message, (err) => {
  if (err) {
    throw err;
  }
  console.log("file.txt 생성 + 쓰기 완료 ."); //생략
});
*/

/*readFile() : 글자를 정상적인 출력을 하기 위해서 toString(), utf8*/
/*
 fs.readFile("파일이름",콜백(err, 결과변수))
*/

//file i/o 화면에 출력할게 있으면 결과변수(이름은 임의로)
//utf8을 넣으면 파일 내용의 한글이 정확히 출력
/*
fs.readFile(
  path.join(__dirname, "json", "file.txt"),
  "utf8",
  (err, readDate) => {
    if (err) {
      throw err;
    }
    //console.log(readDate.toString());
    console.log(readDate);
  }
);

fs.unlink("./json/file.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("파일 삭제");
});
*/
