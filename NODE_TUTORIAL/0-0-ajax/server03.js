const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "login",
  password: "1234",
  database: "login",
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

app.get("/", (req, res) => {
  //db에서 정보가져올것임.
  //목록
  let sql = "select * from members order by id desc;";
  db.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result); //sql의 결과
    res.render("list", { result }); //ejs파일이름()에 들어감.
  });
});

app.get("/addUser", (req, res) => {
  res.render("addUser");
});

app.post("/addUser", (req, res) => {
  //저장
  const user = {
    userid: req.body.userid,
    passwd: req.body.passwd,
    username: req.body.username,
    post: req.body.post,
    addr: req.body.addr,
    hp: req.body.hp,
  };
  let sql = "insert into members values(NULL,?,?,?,?,?,?,'일반',now())";
  db.query(
    //db에 보낸다.
    sql,
    [user.userid, user.passwd, user.username, user.post, user.addr, user.hp],
    (err, result) => {
      if (err) throw err;

      res.redirect("/");
      console.log("db에 정보 보내짐");
    }
  );
});

app.post("/gradeUpdate", (req, res) => {
  let sql = "update members set grade=? where id =?;";
  db.query(sql, [req.body.gradeValue, req.body.idValue], (err) => {
    if (err) throw err;

    //res.send({ status: "success", grade: req.body.gradeValue });
    const result = {
      status: "success",
      grade: req.body.gradeValue,
    };
    res.send(result);
  });
});

app.listen(3000, () => console.log("Server Running : 3000"));
