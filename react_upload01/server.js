const express = require("express");
const multer = require("multer");
const fs = require("fs"); //folder create
const db = require("./db/conn");
const moment = require("moment");

const app = express();

//db

//middleware
app.set("view engine", "ejs"); //views folder exists
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("uploads")); //폴더 권한 설정

//multer : multer.diskstorage(저장위치, 파일이름) -> 실행 -> url
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

//uploadList
app.get("/", (req, res) => {
  let sql = "select * from users order by id desc;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    res.render("uploadList", { status: 201, result });
  });
});

app.get("/add", (req, res) => {
  res.render("uploadAdd");
});

//add
app.post("/add", upload.single("attach"), (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    image: req.file.filename,
  };

  const today = moment(new Date()).format("YYYY.MM.DD");

  let sql = "INSERT INTO users VALUES(NULL, ?, ?, ?, ?, ?);";
  db.query(
    sql,
    [user.username, user.email, user.phone, user.image, today],
    (err) => {
      if (err) throw err;

      res.redirect("/");
    }
  );
});

//delete
app.get("/delete/:id", (req, res) => {
  //req.params.id
  //console.log(req.params.id);
  //db : 이미지 파일 이름 검색
  db.query(
    "select image from users where id=?;",
    [req.params.id],
    (err, photo) => {
      if (err) {
        throw err;
      } else {
        //console.log(photo[0].image); rowDataPacke ->[0]
        db.query("delete from users where id=?;", [], (err) => {
          if (err) {
            throw err;
          } else {
          }
        });
        fs.unlink("./uploads" + photo[0].image, (err) => {
          if (err) {
            throw err;
          } else {
          }
        });
      }
    }
  );
  //unlink
});

//port
app.listen(5002, () => {
  let folder = "uploads";
  if (!fs.existsSync(folder)) {
    fs.mkdir(folder, (err) => {
      if (err) {
        throw err;
      }
      console.log("Create Folder Completed...");
    });
  }
  console.log("Server Running PORT 5002");
});
