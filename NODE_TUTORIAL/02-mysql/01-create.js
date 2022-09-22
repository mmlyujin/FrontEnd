const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express(); //express()
/*mysql db connect : mysql.createConnection */
const db = mysql.createConnection({
  host: "localhost",
  user: "login",
  password: "1234",
  database: "login",
});

db.connect((err) => {
  if (!err) {
    console.log("Database Connection Success");
  } else {
    console.log(err);
  }
});

/*mysql db connect */
app.set("view engine", "ejs"); //ejs middleware
app.set("views", path.join(__dirname, "views"));

app.get("/list", (req, res) => {
  //버튼 보여주기 위한 url
});

app.get("/createTB", (req, res) => {
  //클릭했을 때 실행하는 url
  let sql = "create table login(userid varchar(30),passwd varchar(20));";
  //실행시키는 방법 : db,query(변수명,콜백)
  db.query(sql, (err) => {
    if (err) throw err;

    console.log("테이블 생성 완료");
    res.redirect("/"); //localhost:3000
  });
});

app.get("/dropTB", (req, res) => {
  //console.log("drop url success");
  let sql = "Drop Table login";
  db.query(sql, (err) => {
    if (err) throw err;

    console.log("테이블 삭제 완료");
    res.redirect("/"); //localhost:3000);
  });
});

app.get("/selectAll", (req, res) => {
  let sql = "SELECT * FROM login ORDER BY userid DESC";
  db.query(sql, (err, result) => {
    res.render("list", { result });
  });
});

app.listen(3000, () => console.log("Server Running"));
