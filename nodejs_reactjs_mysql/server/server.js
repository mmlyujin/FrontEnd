const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cocorubi97!",
  database: "groupware",
  dateStrings: "date",
});

db.connect();

//middleware
app.use(express.urlencoded({ extended: false })); //form에서 넘어오는 정보를 위해 필요함.
app.use(express.json());
app.use(cors()); //통신문제 안 생기게 하기 위해서

//react js -> nodejs 사용할 때 : /api/
//post 는 전달받을 데이터가 있을 때 사용
app.post("/api/users/addUser", (req, res) => {
  //req.body.userid를 줄여서 쓰는 방법
  const { userid, passwd, username } = req.body;
  let sql = "insert into member values(null,?,?,?,now());";
  db.query(sql, [userid, passwd, username], (err) => {
    if (err) {
      throw err;
    } else {
      res.json({ msg: "success!" });
    }
  });
});

//전체 가져오기
app.get("/api/users", (req, res) => {
  let sql = "select * from member order by id desc;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.delete("/api/users/deleteUser/:id", (req, res) => {
  //console.log(req.params.id);
  let sql = "delete from member where id=?;";
  db.query(sql, [req.params.id], (err) => {
    if (err) {
      throw err;
    }
  });
});

app.listen(5000, () => console.log("Server Port 5000 Running..."));
