function triangle(numOfTriangle) {
  let totaldots = 0;
  for (let i = 1; i <= numOfTriangle; i++) {
    totaldots = totaldots + (i * (i + 1)) / 2;
  }
  return totaldots;
}
console.log("Number of dots in 1 triangle is = " + triangle(1));
console.log("Number of dots in 2 triangle is = " + triangle(2));
console.log("Number of dots in 3 triangle is = " + triangle(3));
console.log("Number of dots in 4 triangle is = " + triangle(4));
console.log("Number of dots in 5 triangle is = " + triangle(5));
console.log("Number of dots in 6 triangle is = " + triangle(6));
