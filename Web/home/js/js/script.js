// // console.log("hello world");

// // let year = "2022";
// // let month = "07";
// // let day = "15";

// // let today = year + "." + month + "." + day;
// // console.log(today);

// // let date = `${year}-${month}-${day}`; /* \t는 띄어쓰기 */
// // console.log(date);

// // // console.log(date.length);
// // // for (let i = 0; i < date.length; i++) {
// // //   console.log(date[i]);
// // // }

// let str = "busan it academy";
// console.log(
//   str.toUpperCase()
// ); /*대문자로 변경, toUpperCase() -> 메소드라서 ()필요함 */

// let myEmail = "yujinko@konaver.com";
// let result = myEmail.indexOf("@");

// if (result < 0) {
//   console.log("사용할 수 없습니다.");
// } else {
//   console.log("사용할 수 있습니다.");
// }

// let yourEmail = "yujinko?konaver.com";
// let result1 = yourEmail.replace("?", "@");
// console.log(result1); /*?를 @로 변환*/

// const pi = 3.14;
// let radius = 10;
// console.log(pi * radius * radius);

// //거듭제곱 ->**2
// console.log(pi * radius ** 2);

// //  /.%
// console.log(10 / 3); //몫 3
// console.log(10 % 3); //나누기 1

// //증감연산자
// let likes = 10;
// likes = likes + 1;
// console.log(likes);

// likes -= 1; /*likes = likes + 1 과 같다.*/
// console.log(likes);

// console.log(++likes); //더하고 출력한다.
// console.log(likes++);
// console.log(likes); /* (변수++); -> 출력하고 나서 더해준다. */

// //error code//
// //NaN: 글자로 나눌 때//
// //defined : 값이x
// console.log(10 / "한글");

// //html 화면에 출력 -> 변수를 사용할 때는 백틱(``)
// let title = "Busan It";
// let content = "Busan Metropolitan...";
// let html = `
//     <h2>${title}</h2>
//     <p>${content}</p>
// `;
// console.log(html);

// let array = ["one", "two", "three", 100, false]; //배열출력
// // for (let i = 0; i < array.length; ++i) {
// //   console.log(array[i]);
// // }
// //배열이름.forEach((별명)(내맘대루) => {출력} )
// //array.forEach((arr) => console.log(arr));
// array.forEach((arr) => {
//   console.log(arr);
// });

// console.log(array.join(",")); //배열에 (,)넣어서 다같이 출력

// // let arrResult = array.concat(["four", "five"]);
// // console.log(arrResult);

// let pushResult = array.push("four", "fve", "고양이");
// console.log(array); //배열에 항목 추가

// let popResult = array.pop();
// console.log(array); //마지막 항목 제거

// let board = "2번 게시물입니다.";
// let res = board.includes("1");
// console.log(res);

// let arrays = ["java", "python", "react", "vue", "angular"];
// console.log(arrays.includes("vue"));

//비교연산자 ===
// let num1, num2;
// num1 = 10; //number
// num2 = "10"; //string
// console.log(typeof num1);
// console.log(typeof num2);

// if (num1 === num2) {
//   //=== 타입구분
//   console.log("같음");
// }

// console.log(Boolean(432)); //true ->0을 제외한 모두 ,false ->0

let names = ["kim", "lee", "park", "choi", "jung"];
console.log(`가입된 총 회원은 ${names.length}명 입니다.`);
names.forEach((name) => {
  console.log(name);
});

let passwd = "abcd@12sdfdfdf";
if (passwd.length > 12 && passwd.includes("@")) {
  console.log("Very Strong!");
} else if (passwd.length >= 8) {
  console.log("Normal~");
} else {
  console.log("It is too short. Again...");
}
