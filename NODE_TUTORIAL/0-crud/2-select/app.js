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
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/assets/css")));

//url
app.get("/userList", (req, res) => {
  let sql = "SELECT * FROM register ORDER BY reg_id DESC";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    //console.log(result);
    res.render("userList", { result });
  });
});

//유저 삭제
app.get("/delUser/:id", (req, res) => {
  //html form -> req.body.name 값
  //db pk -> req.params.id
  let sql = "delete from register where reg_id=?;";
  db.query(sql, [req.params.id], (err) => {
    if (err) {
      throw err;
    }
    console.log(req.params.id + "번 회원이 삭제되었습니다.");
    res.redirect("/userList");
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
