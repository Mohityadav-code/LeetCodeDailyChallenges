function kangaroo(x1, v1, x2, v2) {
  let t = 0;
  while (!((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1))) {
    //condition here is if any of kangaroo has reached at the point where other kangaroo can never reach there
    if (x1 + v1 * t === x2 + v2 * t) {
      // here cheking if they are at same point
      return "YES";
    }
    t++;
  }
  return "NO";
}
console.log(" kangaroo(0,2,5,3): ", kangaroo(0, 2, 5, 3));
console.log(" kangaroo(0,3,4,2): ", kangaroo(2, 1, 1, 2));

function kangaroo(x1, v1, x2, v2) {
  // edge cases
  if (v1 <= v2 && x1 < x2) {
    return "NO";
  }
  if (v2 <= v1 && x2 < x1) {
    return "NO";
  }
  if (v1 == v2) {
    if (x1 == x2) {
      return "YES";
    } else {
      return "NO";
    }
  }
  // checking if they will ever meet 
  const distance = Math.abs(x1 - x2);
  const relativeSpeed = Math.abs(v1 - v2);
  if (distance % relativeSpeed === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
