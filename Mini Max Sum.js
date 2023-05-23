var arr = [1, 3, 5, 7, 9];
var totalSum = 0;
var max = Math.max(...arr);
var min = Math.min(...arr)
arr.map((val)=>totalSum+=val);
console.log(totalSum-max,totalSum-min);
