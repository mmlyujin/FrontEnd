const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //합계 구하기
/*
객체명.reduce((이전값,이후값)=>{
 return 이전값+이후값
},초기값);
*/

const result = numbers.reduce((prev, next) => {
  return prev + next;
}, 0);
console.log(result);

/*
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
*/

//사원급여의 합을 출력하시오.
const employees = [
  { username: "Kim", salary: 1000000 },
  { username: "Park", salary: 2000000 },
  { username: "Jeong", salary: 3000000 },
];

const result2 = employees.reduce((total, emSalary) => {
  return total + emSalary.salary;
}, 0); //초기값 빼먹지 않기 -_-
console.log(result2);
