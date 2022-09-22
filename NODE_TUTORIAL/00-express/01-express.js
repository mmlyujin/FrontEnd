const express = require("express");
const app = express();
const PORT = 3000;

app.get("/getUser/5", (req, res) => {
  const user = { id: "5", userid: "busanit", passwd: "12345" };
  res.json(user); //브라우저 출력
}); //http://localhost:3000/getUser/5

app.get("/getHome", (req, res) => {
  //파일을 불러오는것 -> sendFile
  res.sendFile(__dirname + "/views/index.html");
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
