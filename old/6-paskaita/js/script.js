alert("Java script has loaded...");

//
// 1. Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Products. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category(bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:
// 1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");
// 1.2. patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;
// 2. Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
// 3. Filtrus, kurie padės vartotojams filtruoti prekes pagal:
// 3.1. Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
//  kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
//  arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos
//  arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;
// 3.2. Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
// 3.3. Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
// 4. Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuuolada").
