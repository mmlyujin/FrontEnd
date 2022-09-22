const express = require("express");
const app = express();
const usersRoute = require("./routes/usersRoute");
const itemsRoute = require("./routes/itemsRoute");

//shopping :  users, items => url
//users : 전체보기, 상세보기, 입력, 수정, 삭제

//app.use(공통경로,require 변수명);
//요청을 하면(추가적인 작업을 해주는 s/w)서버에서 응답 : middleware
app.use("/users", usersRoute); //middleware(app.use(), app.set())

//items/상품전체보기, 수정, 삭제
app.use("/users", itemsRoute);

//items : 전체보기, 상세보기, 입력, 수정, 삭제, 검색

app.listen(3000);
