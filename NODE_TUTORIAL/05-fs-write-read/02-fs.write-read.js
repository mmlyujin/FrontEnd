/*
    1. json 파일
    2. 절대경로
    3. 디렉토리 생성
    4. jsObject -> JsonObject -> fs.writeFile();
*/
const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

/*JS -> JSON(key값을 문자화 -> 그래서 "" 생김) */

const url = path.join(__dirname, "db");
//console.log(result);
if (!fs.existsSync(url)) {
  fs.mkdir(url, (err) => {
    if (err) {
      throw err;
    }
  });
}

const users = [
  {
    id: 1,
    userid: "busanit",
    passwd: "1234",
    gender: "F",
    regdate: "2022-09-01",
  },
  {
    id: 2,
    userid: "seoulit",
    passwd: "12345",
    gender: "F",
    regdate: "2022-09-02",
  },
  {
    id: 3,
    userid: "daeguit",
    passwd: "123",
    gender: "F",
    regdate: "2022-09-12",
  },
];
const result = JSON.stringify(users, null, 2); //null ,2 해주면 보기 편함

fs.writeFile(path.join(__dirname, "db", "users.json"), result, (err) => {
  if (err) throw err;
});
//---------------파일에 추가해서 넣기----------------------------
const user = {
  id: 4,
  userid: "danbicute",
  passwd: "123345",
  gender: "F",
  regdate: "2022-09-11",
};

fs.readFile(path.join(__dirname, "db", "users.json"), "utf8", (err, data) => {
  if (err) {
    throw err;
  } else {
    //기존자료 읽어오기
    const jsObj = JSON.parse(data); //프로그래밍 처리를 할 때 parse()
    //기존 + 새 자료 = 기존 자료 메모라
    jsObj.push({ ...user });
    fs.writeFile("./db/users.json", JSON.stringify(jsObj, null, 2), (err) => {
      if (err) throw err;

      console.log("사용자가 추가 됨!");
    });
  }
});
/*
  js 로 쓰기할 때는 -> json변환을 작업 (JSON.stringify)
  json을 화면에 출력할 떄는 -> js역변환 
  */
//console.log(JSON.parse(data)); //parse : 역변환

//기존+ 새자료 : spread operator (전개연산자) =연결하고 출력 or 쓰기
//users + user => users
//obj.push({...예전자료,...새로운자료});
