JavaScript yang Dapat Diulang
Iterable adalah Objek Iterable
Suatu iterable dapat diulang dengan for..ofloop

Perulangan For Of
Pernyataan JavaScript for..ofmengulang elemen-elemen objek yang dapat diulang.

Sintaksis
for (variable of iterable) {
  // code block to be executed
}
Mengulangi
Iterasi berarti melakukan pengulangan pada serangkaian elemen.

Berikut adalah beberapa contoh mudah:

Mengulangi sebuah String
Mengulangi Array
Mengulangi Set
Mengulangi Peta
Mengulangi Sebuah String
Anda dapat menggunakan for..ofloop untuk mengulang elemen-elemen string:

Contoh
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}
Mengulangi Sebuah Array
Anda dapat menggunakan for..ofloop untuk mengulang elemen-elemen Array:

Contoh 1
const letters = ["a","b","c"];

for (const x of letters) {
  // code block to be executed
}
Contoh 2
const numbers = [2,4,6,8];

for (const x of numbers) {
  // code block to be executed
}
Mengulangi Suatu Set
Anda dapat menggunakan for..ofloop untuk mengulang elemen-elemen suatu Set:

Contoh
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}
Mengulangi Peta
Anda dapat menggunakan for..ofloop untuk mengulang elemen-elemen Peta:

Contoh
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}
IKLAN

Iterator JavaScript
Protokol iterator mendefinisikan cara menghasilkan serangkaian nilai dari suatu objek.

Suatu objek menjadi suatu iterator ketika ia mengimplementasikan suatu next()metode.

Metode ini next()harus mengembalikan objek dengan dua properti:

nilai (nilai berikutnya)
selesai (benar atau salah)
nilai	Nilai yang dikembalikan oleh iterator
(Dapat dihilangkan jika done bernilai true)
Selesai	benar jika iterator telah menyelesaikan
salah jika iterator telah menghasilkan nilai baru
Catatan
Secara teknis, iterable harus mengimplementasikan Symbol.iteratormetode tersebut.

Dalam JavaScript, berikut ini adalah yang dapat diulang:

Tali
Susunan
Array yang diketik
Set
Peta
Karena objek prototipe mereka memiliki Symbol.iteratormetode:

Buatan Rumah yang Dapat Diulang
Iterabel ini mengembalikan angka yang tidak pernah berakhir: 10,20,30,40,.... ketika the next()metode dipanggil:

Contoh
// Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Run the Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30
Catatan
Iterabel yang dibuat sendiri tidak mendukung for..ofpernyataan JavaScript.

JavaScript yang dapat diiterasi adalah objek yang memiliki Symbol.iterator .

Ini Symbol.iteratoradalah fungsi yang mengembalikan next()fungsi.

Suatu iterable dapat diulang kembali dengan kode:for (const x of iterable) { }

Contoh
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
Sekarang Anda dapat menggunakanfor..of

for (const num of myNumbers) {
  // Any Code Here
}
Metode Symbol.iterator dipanggil secara otomatis oleh for..of.

Namun kita juga bisa melakukannya secara "manual":

Contoh
let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
}
