// alert("Java script has loaded...");

//
// 1. Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Products. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category(bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:
class Products {
  constructor(name, price, salePrice, category) {
    this.name = name;
    this.price = price;
    this.salePrice = salePrice;
    this.category = category;
  }
}
let prod1 = new Products("Maikutė", 15.99, NaN, "T-Shirts");
let prod2 = new Products("Batai", 10.99, 10.99, "Shoes");
let prod3 = new Products("Megztinis", 45.99, NaN, "Sweaters");
let prod4 = new Products("Džinsai", 10, 7, "Pants");
let prod5 = new Products("Treninginės kelnės", 18.99, 12.99, "Pants");
// 1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");
console.log(`"${prod1.name}": ${prod1.price} Eur`);
console.log(`"${prod2.name}": ${prod2.price} Eur`);
console.log(`"${prod3.name}": ${prod3.salePrice} Eur`);
console.log(`"${prod4.name}": ${prod4.price} Eur"`);
console.log(`"${prod5.name}": ${prod5.salePrice} Eur`);
// 1.2. patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;
function checkSalePrice(product) {
  if (
    product.hasOwnProperty("salePrice") === true &&
    isNaN(product.salePrice) !== true
  ) {
    console.log(
      `"${product.name}" akcijinė kaina yra ${product.salePrice} Eur!`
    );
  } else {
    console.log(`"${product.name}" šiam produktui akcija netaikoma!`);
  }
  return product.salePrice;
}
// 2. Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
const currentProducts = [prod1, prod2, prod3, prod4, prod5];
// 3. Filtrus, kurie padės vartotojams filtruoti prekes pagal:
// 3.1. Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
//  kainą nuo/iki (funkcja priims tris argumentus: produktų masyvas, kaina nuo, kaina iki)
function FilterProductByPrice(array, priceFrom, priceTo) {
  if (isNaN(priceFrom) !== true && isNaN(priceTo) !== true) {
    //FilterProductByPrice(currentProducts,1,11)
    for (let i = 0; i < array.length; i++) {
      if (priceFrom <= array[i].price && array[i].price <= priceTo) {
        console.log(`${array[i].name} ${array[i].price} Eur`);
      }
    }
    //  arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos
  } else if (isNaN(priceFrom) !== true && isNaN(priceTo) === true) {
    //PVZ.: FilterProductByPrice(currentProducts,11)
    for (let i = 0; i < array.length; i++) {
      if (priceFrom <= array[i].price) {
        console.log(`${array[i].name} ${array[i].price} Eur`);
      }
    } //  arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;
  } else if (isNaN(priceFrom) === true && isNaN(priceTo) !== true) {
    //PVZ.: FilterProductByPrice(currentProducts,NaN, 43)
    for (let i = 0; i < array.length; i++) {
      if (array[i].price <= priceTo) {
        console.log(`${array[i].name} ${array[i].price} Eur`);
      }
    }
  }
}
// 3.2. Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
function filterByCategory(array, category) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].category == category) {
      console.log(`${array[i].name} - ${array[i].category}`);
    }
  }
  return category;
}
// 3.3. Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
function filterBySalePrice(array) {
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].hasOwnProperty("salePrice") === true &&
      isNaN(array[i].salePrice) !== true
    ) {
      console.log(`${array[i].name} - ${array[i].salePrice}`);
    }
  }
}
// 4. Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuuolada").
function checkSalePriceWithDiscount(product) {
  const percent = ((product.price - product.salePrice) / product.price) * 100;
  if (isNaN(product.salePrice) === true || percent === 0) {
    console.log(`"${product.name}" šiam produktui akcija netaikoma!`);
  } else {
    console.log(`"${product.name}" taikoma ${percent}% nuolaida!`);
  }
}
