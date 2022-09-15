//str.replace(정규식, "바꿀단어");
const str = "This is NodeJS"; //NodeJS => ReactJS
const regExp = /nodejs/gi; //정규식
const result = str.replace(regExp, "ReactJS"); //replace
console.log(result);

const str01 = "2022-09-15"; //20220915,2022/09/15 로 교체
const regExp02 = /-/g; // '-' 를 먼저 찾는다.
const regExp03 = /-/g; //g는 global (문장전체)
const result02 = str01.replace(regExp02, ""); //없앨때는 그냥 ""
const result03 = str01.replace(regExp03, "/");
console.log(result02);
console.log(result03);

//숫자를 찾아서 This is Javascript
const str02 = "This9is8Javascript";
const regEx04 = /[0-9]/g;
const result04 = str02.replace(regEx04, " "); //숫자 찾아서 공백으로 처리
console.log(result04);

//다중 변경 : / 검색어1|검색어2|검색어3 /gi
//바꾼 후 대문자로 변경 : toUpperCase();
const str03 = "red house and green house and blue house";
const regEx05 = /red|green|blue/gi;
const result05 = str03.replace(regEx05, "Colors");
console.log(result05.toUpperCase());
