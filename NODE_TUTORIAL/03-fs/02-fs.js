const fs = require("fs");

if (fs.existsSync("data")) {
  //폴더 존재여부 existsSync
  console.log("폴더가 이미 존재합니다.");
} else {
  fs.mkdir("data", (err) => {
    if (err) {
      throw err; //console 로 err를 표시해라
    }
    console.log("data 폴더가 생성되었습니다.");
  });
}

/*
디렉토리 삭제 fs.rmdir();
 -존재할 때 삭제 or 삭제할 디렉토리가 없습니다.  출력
*/

//빈 디렉토리를 삭제할 때
/*
if (fs.existsSync("data")) {
  fs.rmdir("data", (err) => {
    if (err) {
      throw err;
    }
    console.log("data 디렉토리가 삭제되었습니다.");
  });
} else {
  console.log("삭제할 디렉토리가 존재하지 않습니다.");
}
*/

//디렉토리 안에 파일이 존재하면 강제로 폴더를 삭제
/*
if (fs.existsSync("data")) {
  fs.rmdir("data", { recursive: true, force: true }, (err) => {
    if (err) {
      throw err;
    }
    console.log("data 디렉토리가 삭제되었습니다.");
  });
} else {
  console.log("삭제할 디렉토리가 존재하지 않습니다.");
}
*/
