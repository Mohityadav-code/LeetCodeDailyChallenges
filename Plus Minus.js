var arr=[0,1,1,-1,-1]
var positive=0
var negative=0
var zero=0
arr.forEach((e)=>{
    if (e<0) {
        negative++
    }
    if (e>0 )  { positive++}
    if (e===0) {
        zero++
    }
})
console.log((positive/arr.length).toFixed(6))
console.log((negative/arr.length).toFixed(6))
console.log((zero/arr.length).toFixed(6))