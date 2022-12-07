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
