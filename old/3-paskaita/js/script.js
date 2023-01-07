// alert("Java script has loaded...");
// // Namu darbai
// function plusPlusUsingFor(x, y) {
//   for (let i = 0; i < y; i++) {
//     x++;
//   }
//   return x;
// }
// // klases darbai // ciklai
// function plusPlusUsingWhile(x, y) {
//   let i = 0;
//   while (i < y) {
//     i++;
//     x = x + 1;
//   }
//   return x;
// }
// function plusPlusUsingDoWhile(x, y) {
//   let i = 0;
//   do {
//     i++;
//     x += 1;
//   } while (i < y);
//   return x;
// }
// function plusPlusWithoutLoop(x, y) {
//   x += 1 * y;
//   return x;
// }
// function plusPlusRecursion(x, y) {
//   if (y > 0) {
//     x++;

//     x = plusPlusRecursion(x, --y);
//   }
//   return x;
// }
// masyvai

// // Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
// let a = [1, 2, 3, 4];
// // Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
// console.log(a[0] + "," + a[1] + "," + a[2]);
// // 	Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
// let b = [1, 2, 3, 4];
// console.log(b[0] + b[1]);
// console.log(b[2] + b[3]);
// // Sukurkite masyvą su elementais 2, 5, 3, 9.
// let arr = [2, 5, 3, 9];
// // 	Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
// let firstTimesSecond = arr[0] * arr[1];
// let thirdTimesFourth = arr[2] * arr[3];
// console.log(firstTimesSecond);
// console.log(thirdTimesFourth);
// // 	Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
// console.log(firstTimesSecond + thirdTimesFourth);
// // Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
// let arr2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr2[1][0]);
// // Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
// let first = [1, 2, 3];
// let second = [4, 5, 6];
// console.log(first.concat(second));
// // Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
// let firstReversed = first.reverse();
// console.log(firstReversed);
// // Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
// first.push(-1, -2, -3, 4, 5, 6);
// first.sort();
// console.log(first);
// // Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
// let arr3 = ["html", "css", "js"];
// console.log(arr3[0] + "," + arr3[1]);
// // Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
// let arr4 = [3, 4, 1, 2, 7];
// console.log(arr4.sort());
// // Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
// let arr5 = [1, 2, 3, 4, 5];
// console.log(arr5.slice(0, -2));

// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus naudojant for ciklą
let colors = {
  green: "žalia",
  red: "raudona",
  blue: "mėlyna",
};

function printOutColors() {
  for (let i = 0; i < Object.keys(colors).length; i++) {
    let keys = Object.keys(colors)[i];
    let values = Object.values(colors)[i];
    console.log(keys + " " + values);
  }
}
// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300. Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
let people = {
  Mantas: "200",
  Paulius: "300",
  Mindaugas: "300",
};
function printOutPeople() {
  for (let i = 0; i < Object.keys(people).length; i++) {
    let keys = Object.keys(people)[i];
    let values = Object.values(people)[i];
    console.log(keys + " - " + values + " EU");
  }
}
// Sukurkite objektą su savaitės dienomis. Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios (1 -> pirmadienis ir t.t.). Parodykite dabartinę savaitės dieną.
function getWeekDay() {
  let week = {
    1: "Pirmadienis",
    2: "Antradienis",
    3: "Trečiadienis",
    4: "Ketvirtadienis",
    5: "Penktadienis",
    6: "Šeštadienis",
    7: "Sekmadienis",
  };
  let i = new Date().getDay() - 1; // Pridėtas "-1" kadangi per mano browserį išmesdavo viena diena į priekį, pvz dabar yra trečiadienis, mesdavo ketvirtadienį.
  console.log(Object.values(week)[i]);
}
