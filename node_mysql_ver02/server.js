const ejs = require("ejs");
const mysql = require("mysql");
const express = require("express");
const app = express();
/*-------------1 end------------*/

const dbconnect = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "busanit",
  password: "1234",
  database: "busanit",
  dateStrings: "date",
});

dbconnect.connect((err) => {
  if (!err) {
    console.log("데이터베이스 연결에 성공했습니다.");
  } else {
    console.log(err); //err 문서를 보여줌.
  }
});

app.set("view engine", "ejs");
//html 이 views폴더에 있어야 함. 확장자는 .ejs

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 주소관리 */
app.get("/login", (req, res) => {
  //console.log("콘솔에서 보이는 글자");
  //res.send("브라우저에서 글자가 보임");
  res.render("login", { title: "Login" }); //res.render안에 파일 이름 적어주면 됨. -확장자x
});

app.get("/memberList", (req, res) => {
  //console.log("콘솔에서 보이는 글자");
  //res.send("브라우저에서 글자가 보임");
  res.render("memberList", { title: "memberList" }); //res.render안에 파일 이름 적어주면 됨. -확장자x
});

app.get("/popUp", (req, res) => {
  //console.log("콘솔에서 보이는 글자");
  //res.send("브라우저에서 글자가 보임");
  res.render("popUp", { title: "popUp" }); //res.render안에 파일 이름 적어주면 됨. -확장자x
});

app.get("/register", (req, res) => {
  //console.log("콘솔에서 보이는 글자");
  //res.send("브라우저에서 글자가 보임");
  res.render("register", { title: "Register" }); //res.render안에 파일 이름 적어주면 됨. -확장자x
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO tb_users01 VALUES(?,?,?,?,?)";
  dbconnect.query(
    sql[
      (req.body.userid,
      req.body.email,
      req.body.gender,
      req.body.checkbox,
      req.body.region)
    ],
    (err) => {
      if (!err) {
        console.log("회원가입 완료");
        res.redirect("/memberList");
      } else {
        console.log(err);
        console.log("관리자에 문의하세요.");
        res.redirect("/register");
      }
    }
  );
});

app.get("/memberList", (req, res) => {
  const sql = "SELECT * FROM tb_users01";
  dbconnect.query(sql, (err, results) => {
    console.log(results);
    res.render("memberList", { title: "Home > List", users: results });
  });
});

let PORT = 4000;

app.listen(4000, () => console.log("서버시작완료"));
