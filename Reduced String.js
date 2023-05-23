var string = "absbabssaadd"; // we have to remove adjacent same characters and if then it again showing some same adjacent characters then also remove them
var arr = [];
for (let i = 0; i < string.length; i++) {
  if (arr[arr.length - 1] === string[i]) {
    arr.pop()
  }
  else arr.push(string[i])
}
console.log(arr);
