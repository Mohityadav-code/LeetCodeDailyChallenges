var n = 7;
var ar = [1, 2, 1, 2, 1, 3, 2];
var pair = [];
function ch(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      if (arr[i] == arr[j]) {
        pair++;
        arr.splice(j, 1);
        arr.splice(i, 1);
        return ch(arr, n-2);
      }
    }
  }
}
// ch(arr, n)
// console.log(pair);
// let countMap = new Map();
// var arr=[1,2,1,2,1,3,2]
// arr.forEach((value)=>{
//     // check if the value is already in the map
//     if(countMap.has(value)){
//         countMap.set(value,countMap.get(value)+1);
//     }
//     else {
//         countMap.set(value,1)
//     }
// })
// console.log(countMap);
// var pair=0
// countMap.forEach((elements)=>{
//     console.log(Math.floor(elements/2));
//     pair+=Math.floor(elements/2)
// })
// console.log(pair);


    var pair=0
    let countMap=new Map();
    ar.forEach((Element)=>{
        if(countMap.has(Element)){
            countMap.set(Element,countMap.get(Element)+1)
        }
        else{
            countMap.set(Element,1)
        }
    })
    countMap.forEach((Element)=>{
       var temp=(Math.floor(Element/2));
        pair+=temp
    })
    console.log(pair);