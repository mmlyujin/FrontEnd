/*
1.fs.readFile("읽어올 파일","utf8"(글자 안 깨지게 하기 위해서),콜백(err , 결과변수))
2. txt, json
*/

const fs = require("fs");
const path = require("path");
/*
if (fs.existsSync("./files/file.txt")) {
  fs.readFile(
    path.join(__dirname, "files", "file.txt"), //()안의 내용을 연결해주는게 .join
    "utf8",
    (err, result) => {
      //file.txt 안의 내용이 result에 담긴다.
      if (err) throw err;

      console.log(result);
    }
  );
} else {
  console.log("파일이 존재하지 않습니다.");
}
*/
/*
if (fs.existsSync("./json/jsObj.json")) {
  fs.readFile(
    path.join(__dirname, "json", "jsObj.json"),
    "utf8",
    (err, result) => {
      if (err) throw err;

      const jsObj = JSON.parse(result);
      console.log(jsObj); //JSON.parse()로 변환해서 출력
    }
  );
} else {
  console.log("File Not Found");
}
*/

// const addUsers = [
//   { id: 4, username: "U.S.A" },
//   { id: 5, username: "Spain" },
// ];

const addUsers = { id: 4, username: "Spain" };

if (fs.existsSync("./json/jsObj.json")) {
  fs.readFile(
    path.join(__dirname, "json", "jsObj.json"),
    "utf8",
    (err, result) => {
      if (err) throw err;

      const jsObj = JSON.parse(result);
      //console.log(jsObj); //JSON.parse()로 변환해서 출력

      //json 파일에 추가 : [...기존자료 + ...새로운자료] = 기존자료 -> spread operator
      //fs.appendFile() 이어쓰기 메소드 -> txt 파일에만 사용
      //const addResult = [...jsObj, ...addUsers];
      const addResult = [...jsObj, { ...addUsers }]; //하나만 붙일 때

      /*json 예외처리 */

      //객체 개수가 3개 보다 같거나 작을때만 이어붙이고 아니면 이어붙이기 않기
      //Object.keys(객체명) : 파일에 배열 개수 확인
      //jsObj : json 파일에 쓴 내용
      const count = Object.keys(jsObj); //index number
      if (count.length <= 3) {
        //stringify()
        //writeFile()로 다시 덮어 쓰기
        fs.writeFile(
          "./json/jsObj.json",
          JSON.stringify(addResult, null, 2),
          (err) => {
            if (err) throw err;
          }
        );
      } else {
        console.log("Data Added Fail");
      }

      /*json예외처리*/
    }
  );
}
