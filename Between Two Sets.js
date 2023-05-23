var a=[2,4]
var b=[16,32,96]
var count=0
for (let i = 1; i <100; i++) {
   if(isFactor(i,a)&& isMultile(i,b)){
    count++
   }
}
function isFactor(index,array){
   return array.every((Element)=> index%Element===0 )
}
function isMultile(index,array){
    return array.every((Element)=> Element%index===0 )
}


console.log('count: ', count);