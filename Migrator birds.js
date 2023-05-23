var arr = [3, 3, 2, 2, 1, 1];

var birdmap = new Map();

arr.forEach((Element) => {
  if (birdmap.has(Element)) {
    birdmap.set(Element, birdmap.get(Element) + 1);
  } else birdmap.set(Element, 1);
});
console.log("birdmap: ", birdmap);
var highest = 0;
var keyForHeighest = 0;
var result;
birdmap.forEach((value, key) => {
  if (highest < value) {
    highest = value;
    keyForHeighest = key;
  } else if (highest === value && keyForHeighest>key) {
    keyForHeighest = key;
    result=keyForHeighest
  }
});
console.log("result: ", result);

console.log("keyForHeighest: ", keyForHeighest);
console.log("highest: ", highest);
