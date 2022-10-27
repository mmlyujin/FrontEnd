const express = require("express");
const multer = require("multer");
const fs = require("fs"); //folder create

const app = express();

//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); //form
app.use(express.json());
app.use(express.static("uploads")); //폴더 권한 설정

//multer
//1. multer 함수 : 저장위치(destination), 파일이름(filename)
// multer.diskStorage(저장위치,파일명);
//원본 파일이름 : file.originalname
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    //저장 위치
    //callback(null,"저장할 폴더의 위치명");
    callback(null, "./uploads");
  },

  filename: function (req, file, callback) {
    //callback(null, 날짜_file.originalname); 중복되는 파일 안 생기게끔
    callback(null, Date.now() + "_" + file.originalname);
  },
});

//2. multer 실행 코드 : multer();
const upload = multer({
  storage: storage,
});

// multer({
//   storage: storage,
//   limits: "용량", //업로드 용량 제한 처리
// });

//-------------- url ------------------------
app.get("/", (req, res) => {
  res.render("upload"); //view -> upload.ejs
});

app.get("/multi", (req, res) => {
  res.render("uploads"); //view -> upload.ejs
});

//app.post("/uploadFile", 업로드 or JWT(token처리), (req, res) => {});
//app.post("/uploadFile", upload.single(html name 값), (req, res) => {
//ejs에서 form post 된 내용.
//file 하나
app.post("/uploadFile", upload.single("attach"), (req, res) => {
  //text, password ->req.body
  //file -> req.file(객체)
  //console.log(req.file.size);
  res.render("info01", { file: req.file }); // 저장된 정보를 info01로 넘김.
});

//file 여러개
app.post("/uploadsFile", upload.array("attach"), (req, res) => {
  console.log(req.files);
});

//port
//서버가 실행되는 순간 파일 생성되게
//fs.existSync(파일이름) -> 파일 유무 체크
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
