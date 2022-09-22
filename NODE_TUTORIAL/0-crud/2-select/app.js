const express = require("express");
const path = require("path");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

//mysql connection => mysql.connection();
const db = mysql.createConnection({
  host: "localhost",
  user: "login",
  password: "1234",
  database: "login",
  dateStrings: "date",
});

//db.connect();
db.connect((err) => {
  if (!err) {
    console.log("Mysql Success!");
  } else {
    console.log(err);
  }
});

//middleware
app.set("view engine", "ejs"); //html 띄우기 위한 set??
app.use(express.static(path.join(__dirname, "/assets/css")));
app.use(express.urlencoded({ extended: false })); //서버를 자료를 보낼때

//url
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/userList", (req, res) => {
  let sql = "SELECT reg_id, username FROM register ORDER BY reg_id DESC";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    //console.log(result);
    res.render("userList", { result });
  });
});

let title = "Member Management System";

app.get("/addUser", (req, res) => {
  res.render("insert", { title, subTitle: "> Insert" });
});

//mysql 연결해서 table에 insert
app.post("/addUser", (req, res) => {
  let sql = "INSERT INTO register VALUES(NULL,?,?,now());";
  db.query(sql, [req.body.username, req.body.passwd], (err) => {
    if (err) {
      throw err;
    }

    res.redirect("/userList");
  }); //sql문을 실행 (sql, [?값을 입력], 콜백)
});

//유저 삭제
app.get("/delUser/:id", (req, res) => {
  //express를 이용해서 get을 할거임.
  // /delUser/:id 여기서 id가 parameter
  //html form -> req.body.name 값
  //db pk -> req.params.id
  let sql = "delete from register where reg_id=?;";
  db.query(sql, [req.params.id], (err) => {
    //
    if (err) {
      throw err;
    }
    console.log(req.params.id + "번 회원이 삭제되었습니다.");
    res.redirect("/userList");
  });
});

app.get("/upUser/:id", (req, res) => {
  let sql = "select * from register where reg_id=?;";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    //console.log(result.reg_id); //배열이 없으면 undefined 출력
    //console.log(result[0].reg_id); //reg_id 출력
    res.render("upUser", { result });
  });
});

app.post("/upUser", (req, res) => {
  let sql = "update register set";
  sql += " username=?, passwd=?, regdate=now() ";
  sql += " where reg_id=?; ";

  const user = {
    id: req.body.reg_id,
    uname: req.body.username,
    pwd: req.body.passwd,
  };

  db.query(sql, [user.id, user.uname, user.pwd], (err) => {
    if (err) {
      throw err;
    }
    console.log(req.body.reg_id + "번 회원이 수정되었습니다.");
    res.redirect("/userList");
  });
});

app.get("/userView/:id", (req, res) => {
  let viewSQL = "select * from register where reg_id=?;";
  db.query(viewSQL, [req.params.id], (err, result) => {
    //select 니깐 result 출력코드 필요
    if (err) {
      throw err;
    }
    //console.log(result); //userList에서 username 누르면 콘솔창에 값 출력
    res.render("userView", { result });
    //userview에 result 값 넘긴다.
    //userView.ejs 에 가서 값을 넣고 싶은 곳에 <%= result[0].reg_id %>
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
