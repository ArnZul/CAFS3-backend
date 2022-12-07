alert("Java script has loaded...");
// Namu darbai
function plusPlusUsingFor(x, y) {
  for (let i = 0; i < y; i++) {
    x++;
  }
  return x;
}
// klases darbai // ciklai
function plusPlusUsingWhile(x, y) {
  let i = 0;
  while (i < y) {
    i++;
    x = x + 1;
  }
  return x;
}
function plusPlusUsingDoWhile(x, y) {
  let i = 0;
  do {
    i++;
    x += 1;
  } while (i < y);
  return x;
}
function plusPlusWithoutLoop(x, y) {
  x += 1 * y;
  return x;
}
function plusPlusRecursion(x, y) {
  if (y > 0) {
    x++;

    x = plusPlusRecursion(x, --y);
  }
  return x;
}
