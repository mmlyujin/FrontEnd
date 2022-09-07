const fs = require("fs");
const path = require("path");
//폴더생성
/*fs.mkdir("20220907", (err) => {
  if (err) {
    throw err;
  }
  console.log("폴더가 생성되었습니다.");
});*/
/*
fs.mkdir(path.join(__dirname, "20220907"), (err) => {
  if (err) {
    throw err;
  }
  console.log("폴더가 생성되었습니다.");
});

//파일생성
let str = "Welcome Busan it Academy"; // 파일에 쓸 내용
fs.writeFile("./20220907.txt", str, (err) => {
  if (err) {
    throw err;
  }
  console.log("파일이 생성되었습니다.");
});

//내용추가
let appendstr = "Hello Node.js";
fs.appendFile("./20220907.txt", appendstr, (err) => {
  if (err) {
    throw err;
  }
  console.log("내용이 추가되었습니다.");
});
*/
//파일삭제
if (fs.existsSync("./20220907.txt")) {
  fs.unlink("./20220907.txt", (err) => {
    if (err) {
      throw err;
    }
    console.log("파일이 삭제되었습니다.");
  });
} else {
  console.log("삭제할 파일이 존재하지 않습니다.");
}
//폴더삭제
if (fs.existsSync("20220907")) {
  fs.rmdir("20220907", (err) => {
    if (err) {
      throw err; //console 로 err를 표시해라
    }
    console.log("폴더가 삭제되었습니다.");
  });
} else {
  console.log("삭제할 폴더가 존재하지 않습니다.");
}
