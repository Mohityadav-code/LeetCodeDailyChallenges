var a=[1,2,3]
var b=[3,2,1]
//  we need to find how many points who got 
var pointsMap=new Map();
pointsMap.set("a",0)
pointsMap.set("b",0)
for (let i = 0; i < a.length; i++) {
    if (a[i]>b[i]) {
        pointsMap.set("a",pointsMap.get("a")+1)
    }
    if (a[i]<b[i]) {
        pointsMap.set("b",pointsMap.get("b")+1)
    }
}
console.log(pointsMap);

var alicePoint=0
var bobPoint=0
for (let i = 0; i < a.length; i++) {
    if (a[i] >b[i]) {
        alicePoint++;        
    }
    if (a[i]<b[i]) {
        bobPoint++; 
    }
}
console.log(alicePoint,bobPoint);