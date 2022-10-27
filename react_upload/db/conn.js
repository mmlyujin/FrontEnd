const mysql = require("mysql");
require("dotenv").config();

//exports하는 것과 이름 동일하게 함.
//dotenv -> db 정보를 분리시킴.
//파일 만들 때 .env 로 생성
const conn = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dateStrings: "date",
});

conn.connect((err) => {
  if (!err) {
    console.log("Mysql Success!");
  } else {
    console.log(err);
  }
});

module.exports = conn;
