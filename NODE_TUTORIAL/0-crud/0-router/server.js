const express = require("express");
const path = require("path");
//const router = require("./routes/board");
const board = require("./routes/board");

const app = express();
const PORT = 3000;

//사용 -express.use() middleware
//app.use(공통이름,require 변수);
app.use("/board", board);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
