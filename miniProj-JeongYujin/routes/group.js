const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const router = express.Router();

//db와 연결
const db = mysql.createConnection({
  host: "localhost",
  user: "Grpware",
  password: "Grpware",
  database: "Grpware",
  dateStrings: "date",
});

db.connect((err) => {
  if (!err) {
    console.log("Mysql Success!");
  } else {
    console.log(err);
  }
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/assets/css"));

let title = "Bit Groupware > Main";

//메인
router.get("/main", (req, res) => {
  res.render("main", { title, sub: "" });
  res.send("main page");
});

//회원 관리
router.get("/regManage", (req, res) => {
  res.render("regManage", { title, sub: " > Register Management" });
  //db에서 정보가져올것임.
  //목록
  let sql = "select * from regManage order by idx desc;";
  db.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result); //sql의 결과
    res.render("regManage", { result }); //ejs파일이름()에 들어감.
  });
});

//회원가입
router.get("/register", (req, res) => {
  res.render("register", { title, sub: " > Register" });
});

//회원가입(유저 추가)
router.post("/register", (req, res) => {
  //저장
  const user = {
    id: req.body.id,
    passwd: req.body.passwd,
    name: req.body.name,
    email: req.body.email,
  };
  let sql = "insert into regManage values(NULL,?,?,?,?,now())";
  db.query(
    //db에 보낸다.
    sql,
    [user.id, user.passwd, user.name, user.email],
    (err, result) => {
      if (err) throw err;

      res.redirect("/regManage");
      console.log("db에 정보 보내짐");
    }
  );
});

//게시판 관리
router.get("/boardManage", (req, res) => {
  res.render("boardManage", { title, sub: " > Board Management" });
});

//게시글 작성
router.get("/boardWrite", (req, res) => {
  res.render("boardWrite", { title, sub: " > Board Write" });
});

module.exports = router;
