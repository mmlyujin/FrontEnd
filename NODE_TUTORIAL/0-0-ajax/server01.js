const express = require("express");
const app = express();

app.set("view engine", "ejs"); //html위한
app.use(express.json());

app.get("/", (req, res) => {
  //html파일 get
  res.render("ajax01");
});

app.post("/checkID", (req, res) => {
  //db(json)에 busanit 저장되어 있다고 가정
  const users = {
    userid: "busanit",
    passwd: "12345",
    username: "busan",
  };

  //console.log(req.body.userid);
  //html에 request한다. body에 있는 id 중에서 userid를 가져옴
  let msg;
  if (users.userid == req.body.userid) {
    msg = "No";
  }
  res.send(); //server -> ajax => 결과값을 전송
});

app.listen(3000, () => console.log("Server Running : 3000")); //서버 설정
