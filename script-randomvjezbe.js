function jelDjeljivo(maks) {
  var listica = [];
  for (let i = 0; i <= maks; i++) {
    if (i % 2 === 0) {
      listica.push(i);
    }
  }
  return listica;
}
console.log("Brojevi na listici djeljivi s 2 su " + jelDjeljivo(43));
