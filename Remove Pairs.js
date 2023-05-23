var string="absbabssaadd"
var newString=""
let stringMap=new Map();
for (let i = 0; i < string.length; i++) {
   console.log(string[i]); 
   if (stringMap.has(string[i])) {
        stringMap.set(string[i], stringMap.get(string[i])+1)
   }
   else stringMap.set(string[i],1)
}
console.log(stringMap);
stringMap.forEach((value,key)=>{
   if (value%2===1) {
    newString+=key
}
})
console.log('newString: ', newString);