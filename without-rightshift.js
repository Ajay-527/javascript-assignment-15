function mimics(firstnum, secnum) {
  return Math.floor(firstnum / Math.pow(2, secnum));
}
console.log(mimics(8, 6));
console.log(mimics(-24, 2));
console.log(mimics(80, 3));
