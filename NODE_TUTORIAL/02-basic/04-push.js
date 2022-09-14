/*객체(배열) = object(json) - 자료를 묶음 처리(대량의 데이터 처리)
인덱스 : 변수명은 하나로 사용하면 자료를 구분할 수 있어야 함.
반복문 같이 사용 forEach, forin, forof 
데이터 전송할 때는 -> json.stringify()
데이터를 받았을 때(수신했을 때)-> jsObject, json.parse() 사용 
json=ajax(비동가화 처리 방식) : jquery용 ajax 
XML(데이터베이스 관리) = 고급형 HTML

1. push : 배열이나 객체 마지막에 요소 추가

2. pop : 배열이나 객체 마지막 요소를 제거

3. shift :배열이나 객체의 맨 앞에 요소 제거

4. unshift : 배열이나 객체의 맨 앞에 요소 추가 

5. splice : 배열이나 객체의 임의 내용을 제거

6. sort : 정렬

*/

/*1. pop:  자바스크립트 타입에 크게 신경쓰지 않아도 됨. */
const jsObj1 = [1, 2, 3, "NodeJS", false]; //숫자,문자열,boolean
console.log("객체의 개수 : " + jsObj1.length + "개 입니다.");
console.log(`객체의 개수 : ${jsObj1.length}개 입니당.`);
console.log("");
//마지막 요소 제거
jsObj1.pop(); //메서드 () 뺴먹지 말기
console.log("객체의 마지막 요소 제거 : " + jsObj1);

//2. push() + spread operator(...  : 전개연산자 - 기존자료와 최신자료를 연결)
//객체명.push ({...old, ...new})
jsObj1.push("ReactJS");
console.log("마지막 요소 추가 :" + jsObj1);

jsObj1.push("HTML", "CSS", true); //연결해서 추가 가능
console.log("마지막 요소 추가 :" + jsObj1);
console.log("");
console.log("-----------------------------------------------------------");
console.log("");

/*3.------------------------------------------- */

jsObj1.shift();
console.log("객체의 첫번째 요소 제거 :" + jsObj1);

jsObj1.unshift(false);
console.log("객체의 첫번째 요소 추가 :" + jsObj1);

console.log("");
console.log("-----------------------------------------------------------");

/*객체.splice(배열번호,개수) : 임의의 내용 제거 */
/*객체명.sort()  : 정렬  */
const jsObj2 = [5, 1, 3, 4, 2];
jsObj2.splice(2, 2); //배열번호 2번부터 시작하는 거 두 개 제거
console.log(jsObj2); //3,4 제거한 결과 출력
console.log(jsObj2.sort()); // 순서대로 수 정렬

console.log("");
console.log("-----------------------------------------------------------");
