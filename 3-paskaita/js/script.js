alert("Java script has loaded...");
// Namu darbai
function plusPlusUsingFor(x, y) {
  for (let i = 0; i < y; i++) {
    x++;
  }
  return x;
}
// klases darbai // ciklai
console.log(plusPlusWithoutLoop(10, 4));
function plusPlusWithoutLoop(x, y) {
  x = x + 1 * y;
  return x;
}
