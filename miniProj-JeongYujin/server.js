const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
//const group = require("./routes/group");
//app (url 공통이름)
//app.use("/Groupware", group);

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
app.use(express.urlencoded({ extended: false })); //input body 읽기용
app.use(express.static(__dirname + "/assets/css"));

let title = "Bit Groupware > Main";

//메인
app.get("/main", (req, res) => {
  res.render("main", { title, sub: "" });
  res.send("main page");
});

//회원 관리
app.get("/regManage", (req, res) => {
  //db에서 정보가져올것임.
  //목록
  let sql =
    "select regManage_id,regManage_passwd,regManage_name,regManage_email,regManage_regDate,regManage_idx from regManage ORDER BY regManage_idx DESC;";
  db.query(sql, (err, result) => {
    if (err) throw err;

    //console.log(result); //sql의 결과
    //render은 한번만 해야한다. 보낼 값에 한꺼번에 넣으면 됨.
    res.render("regManage", { result, title, sub: " > Register Management" }); //ejs파일이름()에 들어감.
  });
});

//회원가입 창
app.get("/register", (req, res) => {
  res.render("register", { title, sub: " > Register" });
});

//------------- 유저 추가 ---------------
//post는 보이지 않는 주소를 요청받아 처리
app.post("/register", (req, res) => {
  const user = {
    userid: req.body.id,
    userpasswd: req.body.passwd,
    username: req.body.name,
    useremail: req.body.email,
  };
  let sql = "insert into regManage values(?,?,?,?,now(),null,null,null)";
  db.query(
    sql,
    [user.userid, user.userpasswd, user.username, user.useremail],
    (err, result) => {
      if (err) throw err;

      res.redirect("/regManage");
      //console.log(result);
    }
  );
});

//아이디 체크용(ajax)
app.post("/checkID", (req, res) => {
  //db(json)에 busanit 저장되어 있다고 가정
  const users = {
    id: "busanit",
    passwd: "12345",
    name: "busan",
  };

  //console.log(req.body.userid);
  //html에 request한다. body에 있는 id 중에서 userid를 가져옴
  let msg;
  if (users.id == req.body.id) {
    msg = "No";
  }
  res.send(msg); //server -> ajax => 결과값을 전송
});

//유저 수정하기
app.post("/upUser", (req, res) => {
  let sql = "update regManage set";
  sql +=
    " regManage_id=?, regManage_passwd=?, regManage_name=?, regManage_email=?";
  sql += "where regManage_idx=?;";

  const user = {
    userid: req.body.id,
    userpasswd: req.body.passwd,
    username: req.body.name,
    useremail: req.body.email,
  };

  db.query(
    sql,
    [user.userid, user.userpasswd, user.username, user.useremail],
    (err) => {
      if (err) throw err;

      res.redirect("/regManage");
    }
  );
});

app.post("/delUser", () => {});

//게시판 관리
app.get("/boardManage", (req, res) => {
  res.render("boardManage", { title, sub: " > Board Management" });

  const user = {
    useridx: req.body.idx, //수정하기
    board_title: req.body.board_title,
    username: req.body.name,
    write_date: req.body.date, //수정하기,
  };
  let sql = "select  from regManage;";
  db.query(sql, (err, result) => {
    res.send(result);
  });
});

//게시글 작성
app.get("/boardWrite", (req, res) => {
  res.render("boardWrite", { title, sub: " > Board Write" });
});

app.listen(3000, () => console.log("server running : 3000"));
