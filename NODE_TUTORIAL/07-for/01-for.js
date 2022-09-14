/*
    1. for - of : java 향상된 for
    2. forEach  : 빈도

*/
//for(let 별명 of 객체명){console.log(별명);}

const colors = ["white", "blue", "pink"];
for (let element of colors) {
  console.log(element);
}

console.log("");
/*객체명.forEach((별명) => {
    console.log(별명);
}); */
colors.forEach((elements) => {
  console.log(elements);
});

console.log("----------------------------------------------------------");
const str = "KOREA";
for (let s of str) {
  console.log(s);
}

console.log("----------------------------------------------------------");
const jsObj = [
  { id: "1", username: "coco" },
  { id: "2", username: "ruby" },
  { id: "3", username: "danbi" },
];
/*
for (let obj of jsObj) {
  console.log(obj);
}
*/
jsObj.forEach((o) => {
  console.log(o);
});
