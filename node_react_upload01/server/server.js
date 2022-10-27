require("dotenv").config();
const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const moment = require("moment");

//db
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) throw err;

  console.log("DB Connected..");
});

//multer : 저장함수(저장위치, 파일) -> 실행 -> url 붙이기
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage,
});

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("uploads")); //폴더 접근 가능

//url
app.post("/register", upload.single("attach"), (req, res) => {
  const { username } = req.body;
  const { position } = req.body;
  const { filename } = req.file;

  //moment(날짜생성자).format(형식);
  const today = moment(new Date()).format("YYYY-MM-DD"); //save -> char

  let sql = "insert into person values(null,?,?,?,?);";
  db.query(sql, [username, position, filename, today], (err) => {
    if (err) {
      throw err;
    }
    res.send({ status: 201, message: "Insert Data." }); //json(상태코드,메세지)를 사용할 필요가 있을 때(register.js)
  });
});

//main->call
app.get("/getAllData", (req, res) => {
  let sql = "select * from person order by id desc;";
  db.query(sql, (err, users) => {
    if (err) {
      throw err;
    }
    res.send({ users, status: 201, message: "Get data Done." });
  });
});

//delete
app.delete("/delete/:id", (req, res) => {
  let sql = "delete from person where id=?;";
  db.query(sql, [req.params.id], (err) => {
    if (err) {
      throw err;
    }
    res.send({ status: 201, message: "User Delete Done" });
  });
});

//listen
app.listen(process.env.PORT, () => {
  const dir = "uploads";
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
      if (err) throw err;
    });
  }
  console.log("Server Running Port " + process.env.PORT);
});
