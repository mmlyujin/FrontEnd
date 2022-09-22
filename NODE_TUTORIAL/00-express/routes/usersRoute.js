const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("사용자 전체보기"); // localhost:3000/users
});

router.get("/getOne/5", (req, res) => {
  res.send("5번 사용자 상세 보기");
});

router.get("/insert", (req, res) => {
  res.send("사용자 등록하기");
});

router.get("/update/5", (req, res) => {
  res.send("5번 사용자 수정하기");
});

router.get("/delete/5", (req, res) => {
  res.send("5번 사용자 삭제하기");
});

router.get("/search/yujin", (req, res) => {
  res.send("검색단어 yujin 검색하기");
});

//분리시킨 파일을 다른 곳에서 사용할 수 있게 module.exports
module.exports = router;
