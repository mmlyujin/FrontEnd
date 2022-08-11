/* 1. 사용을 위한 import 끝------------------------------------------------------------------- */
const ejs = require("ejs");
const mysql = require("mysql");
const express = require("express");
const app = express();
/* 1. end --------------------------------------------------------------- */

/* 3. ------------------------------------------------------------------- */
const dbconnect = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "busanit",
  password: "1234",
  database: "busanit",
  dateStrings: "date",
});
// 1. alter user 'busanit'@'%'identified with mysql_native_password by'1234';
// 2. flush privileges;
//  => 이거해야 node .\server.js 했을때 돌아감.
dbconnect.connect((err) => {
  if (!err) {
    console.log("데이터베이스 연결에 성공했습니다.");
  } else {
    console.log(err); //err 문서를 보여줌.
  }
});
/* 3. end --------------------------------------------------------------- */

/* 4. ------------------------------------------------------------------- */
app.set("view engine", "ejs");
//html -> views 폴더에 있어야  함
//확장자 .ejs
/* 4. end --------------------------------------------------------------- */

/* 5. ------------------------------------------------------------------- */
/* 사용할 middleware 설정 : json 처리 - app.use();
    : Server와 Client 사이에서 데이터를 전송할 때 필요한 작업 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/* 5. end --------------------------------------------------------------- */

/* 6. ------------------------------------------------------------------- */
/*  주소관리 */
app.get("/", (req, res) => {
  //console.log("콘솔에서 보이는 글자");
  //res.send("브라우저에서 글자가 보임");
  res.render("index", { title: "Home" }); //res.render안에 파일 이름 적어주면 됨. -확장자x
});

app.get("/register", (req, res) => {
  //console.log("콘솔에서 보이는 글자");
  //res.send("브라우저에서 글자가 보임");
  res.render("register", { title: "Home > Register" }); //파일 이름 적어주면 됨. -확장자x
});

app.post("/register", (req, res) => {
  /* console.log(req.body.userid); 터미널에 html 에 적은 userid값이 찍힌다.
  console.log(req.body.passwd);
  console.log(req.body.username);*/
  //console.log(req.body); //값 전부 가져옴.
  const sql = "INSERT INTO tb_users VALUES(null,?,?,?,now())";
  //db접속 -> insert 실행하기 위한 코드
  dbconnect.query(
    sql,
    [req.body.userid, req.body.passwd, req.body.username],
    (err) => {
      //입출력 : 예외처리..
      if (!err) {
        console.log("회원가입이 완료되었습니다.");
        res.redirect("/list");
        //mysql 에서 select * from tb_users; 하면 register에 입력한 값 테이블에 들어간 것 확인.
      } else {
        console.log(err);
        console.log("관리자에 문의하세요.");
        res.redirect("/register");
      }
    }
  );

  //const { userid, passwd, username } = req.body;
});

app.get("/list", (req, res) => {
  //console.log("콘솔에서 보이는 글자");
  //res.send("브라우저에서 글자가 보임");
  //res.render("list", { title: "Home > List" }); //파일 이름 적어주면 됨. -확장자x
  const sql = "SELECT * FROM tb_users ORDER BY num DESC";
  dbconnect.query(sql, (err, results) => {
    console.log(results);
    res.render("list", { title: "Home > List", users: results });
  });
});

/* 6. end --------------------------------------------------------------- */

let PORT = 5000;

/* 2. ------------------------------------------------------------------- */
app.listen(5000, () => console.log("서버시작완료"));
/* 2. end --------------------------------------------------------------- */
