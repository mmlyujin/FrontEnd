const express = require("express");
const path = require("path");
const mysql = require("mysql");
const alert = require("alert");

const app = express();
const PORT = 3000;

//mysql connection => mysql.connection();
const db = mysql.createConnection({
  host: "localhost",
  user: "login",
  password: "1234",
  database: "login",
});

//db.connect();
db.connect((err) => {
  if (!err) {
    console.log("Mysql Success!");
  } else {
    console.log(err);
  }
});

//ejs 는 middleware 방식으로 가져옴..?
//  view 파일을 읽어오기
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); //post 연결

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

    res.redirect("/list");
  }); //sql문을 실행 (sql, [?값을 입력], 콜백)
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
