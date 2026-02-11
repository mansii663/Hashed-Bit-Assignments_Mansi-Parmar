let string = "INDIA";
let arr = string.split("");

arr.splice(3, 2);
arr.splice(3, 0, "O", "N", "E", "S", "I", "A");

console.log(arr.join(""));