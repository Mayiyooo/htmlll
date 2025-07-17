Pencarian Array JavaScript
Metode Pencarian Array
Array indexOf()
Array lastIndexOf()
Array termasuk()
Array temukan()
Array temukanIndeks()
Array temukanTerakhir()
Array temukanIndeksTerakhir()
Lihat Juga:
Tutorial Array
Metode Dasar Array
Metode Sort Array
Metode Iterasi
Array Referensi Array
Array JavaScript indexOf()
Metode ini indexOf()mencari nilai elemen pada suatu array dan mengembalikan posisinya.

Catatan: Item pertama memiliki posisi 0, item kedua memiliki posisi 1, dan seterusnya.

Contoh
Cari array untuk item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
Sintaksis
array.indexOf(item, start)
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf()mengembalikan -1 jika item tidak ditemukan.

Jika item muncul lebih dari satu kali, maka akan mengembalikan posisi kemunculan pertama.

Array JavaScript lastIndexOf()
Array.lastIndexOf()sama dengan Array.indexOf(), tetapi mengembalikan posisi kemunculan terakhir elemen yang ditentukan.

Contoh
Cari array untuk item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
Sintaksis
array.lastIndexOf(item, start)
item	Required. The item to search for
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
Array JavaScript termasuk()
ECMAScript 2016 diperkenalkan Array.includes()ke array. Ini memungkinkan kita untuk memeriksa keberadaan suatu elemen dalam array (termasuk NaN, tidak seperti indexOf).

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
Sintaksis
array.includes(search-item)
Array.includes() memungkinkan pemeriksaan nilai NaN. Berbeda dengan Array.indexOf().

Dukungan Peramban
includes()adalah fitur ECMAScript 2016 .

ES 2016 didukung sepenuhnya di semua browser modern sejak Maret 2017:

Chrome 52	Edge 15	Firefox 52	Safari 10.1	Opera 39
Jul 2016	Apr 2017	Mar 2017	May 2017	Aug 2016
includes()tidak didukung di Internet Explorer.

IKLAN

Temukan() Array JavaScript
Metode ini find()mengembalikan nilai elemen array pertama yang lolos fungsi pengujian.

Contoh ini menemukan (mengembalikan nilai) elemen pertama yang lebih besar dari 18:

Contoh
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
Dukungan Peramban
find()adalah fitur ES6 (JavaScript 2015).

ES6 didukung sepenuhnya di semua browser modern sejak Juni 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
find()tidak didukung di Internet Explorer.

TemukanIndeks() pada Array JavaScript
Metode ini findIndex()mengembalikan indeks elemen array pertama yang lolos fungsi pengujian.

Contoh ini menemukan indeks elemen pertama yang lebih besar dari 18:

Contoh
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
Dukungan Peramban
findIndex()adalah fitur ES6 (JavaScript 2015).

ES6 didukung sepenuhnya di semua browser modern sejak Juni 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
findIndex()tidak didukung di Internet Explorer.

Metode JavaScript Array findLast()
ES2023 menambahkan metode findLast() yang akan dimulai dari akhir array dan mengembalikan nilai elemen pertama yang memenuhi suatu kondisi.

Contoh
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
Dukungan Peramban
findLast()adalah fitur ES2023.

JavaScript 2023 didukung di semua browser modern sejak Juli 2023:

Chrome 110	Edge 110	Firefox 115	Safari 16.4	Opera 96
Feb 2023	Feb 2023	Jul 2023	Mar 2023	May 2023
Metode JavaScript Array findLastIndex()
Metode findLastIndex() menemukan indeks elemen terakhir yang memenuhi suatu kondisi.

Contoh
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);