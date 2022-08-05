const express = require("express");
const mysql = require("mysql");
const mongoose = requre("mongoose");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

/*1.
사용해야 할 프로그램을 설치 후 require : npmjs.com에서 설치 후 하단에 나옴
*/
/*2
사용할 데이터베이스 정보를 입력
 */

/*
  3. 
  사용할 middleware 설정 : json 처리 - app.use();
  : Server와 Client 사이에서 데이터를 전송할 때 필요한 작업
*/

/*
  4.
  어떤 html 방식을 사용할 건지 : ejs설정 : app.set();
*/

/*
  5. 
주소관리 : REST API
 - get : 화면을 가지고 올 때 ex) get :/register
 - post : 입력한 내용을 저장할 때 ex) post :/register
 - put : 수정할 때 ex) put/register/1 ->1번 내용을 업데이트
 - delete : 삭제 ex) delete /register/1 ->1번 삭제
 */

/*
  6.
   서버에서 사용할 포트 번호를 설정 : 3000,4000,5000
*/

/*-------------------------------*/
/*디렉토리
    -views(public) 폴더 : html 파일을 저장 -> index.ejs, login.ejs
    -views(public)/js
    -views(public)/css
 */
