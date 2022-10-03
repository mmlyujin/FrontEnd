const express = require("express");
//const path = require("path");
const app = express();
//const mysql = require("mysql");
const group = require("./routes/group");

app.use("/Groupware", group);

app.listen(3000, () => console.log("Server Running : 3000"));
