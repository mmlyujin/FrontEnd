const express = require("express");
const multer = require("multer");
const fs = require("fs"); //folder create

const app = express();

//middleware
app.set("view engine", "ejs"); //views folder exists
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('uploads')); //폴더 권한 설정

//multer
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  },

  filename: function(req, file, callback) {
    //callback(null, 날짜_file.originalname);
    callback(null, Date.now() + '_' + file.originalname);
  }
});

//2. multer 실행 코드 : multer();
const upload = multer({
  storage: storage
});

//url
app.get("/", (req, res) => {
  res.render('upload'); //view > upload.ejs
});

app.get("/multi", (req, res) => { //localhost:5002/multi
  res.render('uploads');
});

app.post("/uploadFile", upload.single("attach"), (req, res) => {
  //console.log(req.file);
  res.render("info01", {file : req.file});
});

app.post("/uploadsFile", upload.array("attach"), (req, res) => {
  console.log(req.files)
});

//port
app.listen(5002, () => {
  let folder = "uploads";
  if( !fs.existsSync(folder) ) {
    fs.mkdir(folder, (err) => {
      if(err) {
        throw err;
      }
      console.log("Create Folder Completed...");
    });
  }
  console.log("Server Running PORT 5002");
});