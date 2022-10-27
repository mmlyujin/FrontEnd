const mysql = require("mysql2");
require("dotenv").config();

const conn = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});
//multipleStatements: true, ->db쿼리안에 또 쿼리를 쓰게 가능
conn.connect((err) => {
  if (err) throw err;

  console.log("Mysql DB Connected..");
});

module.exports = conn;
