var arr=[5,7,4,3,8]
var pivot=arr[0]
var left=[]
var right=[]
for (let i = 0; i < arr.length; i++) {
   if (arr[i]<pivot) {
    left.push(arr[i])
   }
   else right.push(arr[i])
}
console.log([...left,...right]);