var arr=[1,2,3,20,20,1]
// we need to find sum of elements
var sum=0;
arr.forEach((elements)=>{
    sum=sum+elements
})
console.log(sum);

// now we will do same with arr.map()
sum=0
arr.map((elements)=>{
    sum=sum+elements
});
console.log(sum);