const express = require("express");
const router = express.Router;

get("/", (req, res) => {
  res.send("상품 전체 목록 보기");
});

get("/update/3", (req, res) => {
  res.send("3번 상품 수정하기");
});

get("/delete/3", (req, res) => {
  res.send("3번 상품 삭제하기");
});

module.exports = router;
