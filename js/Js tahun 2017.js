
Fitur Baru di JavaScript 2017
Bab ini memperkenalkan fitur-fitur baru di ECMAScript 2017:

Pengisi String JavaScript
Entri Objek JavaScript()
Nilai Objek JavaScript()
JavaScript async dan await
Koma Tambahan dalam Fungsi
Objek JavaScript.getOwnPropertyDescriptors
JavaScript 2017 didukung di semua browser modern sejak September 2017 :

Chrome 58	Edge 15	Firefox 52	Safari 11	Opera 45
Apr 2017	Apr 2017	Mar 2017	Sep 2017	May 2017
Pengisi String JavaScript
ECMAScript 2017 menambahkan dua metode string ke JavaScript: padStart() dan padEnd()untuk mendukung padding di awal dan akhir string.

Contoh
let text = "5";
text = text.padStart(4,0);
let text = "5";
text = text.padEnd(4,0);
Entri Objek JavaScript
ECMAScript 2017 menambahkan Object.entries()metode ke objek.

Object.entries()mengembalikan array pasangan kunci/nilai dalam suatu objek:

Contoh
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.entries(person);
Object.entries()membuatnya mudah untuk menggunakan objek dalam loop:

Contoh
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
Object.entries()juga memudahkan untuk mengonversi objek menjadi peta:

Contoh
const fruits = {Bananas:300, Oranges:200, Apples:500};

const myMap = new Map(Object.entries(fruits));
Nilai Objek JavaScript
Object.values()mirip dengan Object.entries(), tetapi mengembalikan array dimensi tunggal dari nilai objek:

Contoh
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person);
