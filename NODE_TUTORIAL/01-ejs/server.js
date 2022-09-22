const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");

//ejs 사용을 위한 middleware
//ejs 기본 폴더 위치는 views 이므로 views 폴더 생성 후 html 파일은 여기에
app.set("view engine", "ejs"); //ejs 사용하기 위한 설정(set)
//html form value 값을 server req.body로 불러올 때 필요한 middleware
app.use(express.urlencoded({ extended: false }));
//app.use(express.static("경로")); 폴더 보안 해제
app.use(express.static(__dirname + "/views/css"));

let title = "busan it academy";

app.get("/", (req, res) => {
  //render("파일이름만",{전달할 내용})
  res.render("index", { title, sub: " > Home" }); //key:value 이름이 같으면 한번만 사용
});

app.get("/addUser", (req, res) => {
  res.render("users", { title, sub: " > Add User" });
}); //form을 통한 사용자 저장하기

app.post("/addUser", (req, res) => {
  console.log(req.body.userid);
  console.log(req.body.passwd);
});

//내가 만든 url을 제외한 전부 -> "*"
//url 부분 제일 마지막
app.get("*", (req, res) => {
  res.render("404", { title, sub: " > 404 Page" });
});

app.listen(3000, () => console.log("Server Running..."));
