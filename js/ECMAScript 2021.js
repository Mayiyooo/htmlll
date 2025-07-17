ECMAScript 2021
Fitur Baru di JavaScript 2021
Promise.any()
String gantiSemua()
Pemisah Numerik (_)

ECMAScript 2021 didukung di semua browser modern sejak April 2021 :

Chrome 85	Edge 85	Firefox 79	Safari 14.1	Opera 71
Aug 2020	Aug 2020	Jul 2020	Apr 2021	Sep 2020
Janji JavaScript.any()
Contoh
// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Run when any promise fulfill
Promise.any([myPromise1, myPromise2]).then((x) => {
  myDisplay(x);
});
Promise.any()didukung di semua browser modern sejak September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Jul 2020	Sep 2020	Sep 2020
JavaScript String GantiSemua()
ES2021 memperkenalkan metode string replaceAll():

Contoh
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
Metode ini replaceAll()memungkinkan Anda menentukan ekspresi reguler, bukan string, yang akan diganti.

Jika parameternya adalah ekspresi reguler, bendera global (g) harus ditetapkan, jika tidak, TypeError akan dilemparkan.

Contoh
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
replace.All()didukung di semua browser modern sejak April 2021:

Chrome 85	Edge 85	Firefox 77	Safari 13.1	Opera 71
Aug 2020	Aug 2020	Jun 2020	Mar 2020	Sep 2020
Catatan
ES2020 memperkenalkan metode string matchAll().


Pemisah Numerik JavaScript (_)
ES2021 memperkenalkan pemisah numerik (_) untuk membuat angka lebih mudah dibaca:

Contoh
const num = 1_000_000_000;
Pemisah numerik hanya untuk penggunaan visual.

Contoh
const num1 = 1_000_000_000;
const num2 = 1000000000;
(num1 === num2);
Pemisah numerik dapat ditempatkan di mana saja dalam angka:

Contoh
const num1 = 1_2_3_4_5;