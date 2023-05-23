var scores = [12, 24, 10, 24];
var min = 0;
var max = 0;
var scoresMap = new Map();
scoresMap.set("min", scores[0]);
scoresMap.set("max", scores[0]);

scores.forEach((element, index) => {
  if (scoresMap.get("min") > scores[index]) {
    scoresMap.set("min", scores[index]);
    min++;
  } else if (scoresMap.get("max") < scores[index]) {
    scoresMap.set("max", scores[index]);
    max++;
  }
});
console.log(min, max);
