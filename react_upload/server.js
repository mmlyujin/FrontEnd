const express = require("express");
const multer = require("multer");
const fs = require("fs");
const db = require("./db/conn");
const moment = require("moment");
const app = express();
require("./db/conn"); //db가져옴

//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); //form
app.use(express.json());
app.use(express.static("uploads")); //폴더 권한 설정

//multer : multer.diskStorage(저장위치, 파일이름) -> 실행코드 -> url
const storage = multer.diskStorage({
  //req(요청하면) -> file => cb함수에서 처리
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

//url
app.get("/", (req, res) => {
  res.render("uploadList");
});

app.get("/add", (req, res) => {
  res.render("uploadAdd");
});

app.post("/add", upload.single("attach"), (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    image: req.file.filename,
  };

  //? ->변수
  //moment 날짜 포맷 바꿔서 char타입으로 저장
  //moment(현재날짜).format(날짜포맷);
  const today = moment(new Date()).format("YYYY.MM.DD");

  let sql = "insert into users values(null,?,?,?,?,?)";
  db.query(
    sql,
    [user.username, user.email, user.phone, user.filename, today],
    (err) => {
      if (err) throw err;

      res.render("uploadList", { status: 201, message: "Insert Completed..." });
    }
  );
});

//port
app.listen(5002, () => {
  let folder = "uploads";

  if (!fs.existsSync(folder)) {
    fs.mkdir(folder, (err) => {
      if (err) throw err;

      console.log("Create Folder Completed....");
    });
  }

  console.log("Server Running Port 5002...");
});
