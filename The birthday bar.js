var s = [2, 2, 1, 3, 1];
var d = 4;
var m = 2;
var count = 0;
// here we have to calculate how many ways we can get d=4 with only m=2 digits
for (let i = 0; i <=s.length-m; i++) {
    let sum=0
   for (let j = i; j <i+m; j++) {
    sum+=s[j]
    if (sum==d) {
        count++
        console.log(s[i]);
        
    }
   }
}
console.log(count);