// condition if marks are 83 then 85  round of to nearest multiple of 5
// if result is less then 40 then do not round of
//  if nearest multiple of 5 and marks difference is less than 3 then also do not round off

var n = 4;
var grades = [73, 67, 38, 33];
for (let i = 0; i < grades.length; i++) {
  // here we will use Math.ceil method to get nearest multiple of 5
  var multipleOf5 = Math.ceil(grades[i] / 5) * 5;
  var difference = multipleOf5 - grades[i];
  if (multipleOf5 >= 40 && difference < 3) {
    grades[i] = multipleOf5;
  }
}
console.log(grades);
