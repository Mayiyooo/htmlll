Iterasi Array JavaScript
Metode Iterasi Array
Metode iterasi array beroperasi pada setiap item array.

Array untuk Setiap
Array peta()
Array peta datar()
Array filter()
Array kurangi()
Array kurangi Kanan()
Array setiap()
Array beberapa()
Array dari()
Array kunci()
Array entri()
Array dengan()
Array Sebaran (...)
Array Istirahat (...)
Lihat Juga
Tutorial Array
Metode Dasar Array
Metode Pencarian
Array Metode Pengurutan
Array Referensi Array
Array JavaScript untuk Setiap()
Metode ini forEach()memanggil suatu fungsi (fungsi panggilan balik) satu kali untuk setiap elemen array.

Contoh
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
Contoh di atas hanya menggunakan parameter nilai. Contoh tersebut dapat ditulis ulang menjadi:

Contoh
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
Peta Array JavaScript()
Metode ini map()membuat array baru dengan menjalankan fungsi pada setiap elemen array.

Metode ini map()tidak mengeksekusi fungsi untuk elemen array tanpa nilai.

Metode ini map()tidak mengubah array asli.

Contoh ini mengalikan setiap nilai array dengan 2:

Contoh
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
Ketika fungsi panggilan balik hanya menggunakan parameter nilai, parameter indeks dan array dapat dihilangkan:

Contoh
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
Array JavaScript flatMap()
ES2019 menambahkan metode Array flatMap()ke JavaScript.

Metode ini flatMap()pertama-tama memetakan semua elemen suatu array, lalu membuat array baru dengan meratakan array tersebut.

Contoh
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
Dukungan Peramban
JavaScript Array flatMap()didukung di semua browser modern sejak Januari 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018

Filter Array JavaScript()
Metode ini filter()membuat array baru dengan elemen array yang lulus pengujian.

Contoh ini membuat array baru dari elemen dengan nilai lebih besar dari 18:

Contoh
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
Dalam contoh di atas, fungsi panggilan balik tidak menggunakan parameter indeks dan array, sehingga keduanya dapat dihilangkan:

Contoh
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
JavaScript Array reduce()
Metode ini reduce()menjalankan fungsi pada setiap elemen array untuk menghasilkan satu nilai.

Metode ini reduce()bekerja dari kiri ke kanan dalam array. Lihat juga reduceRight().

Catatan
Metode ini reduce()tidak mengurangi susunan asli.

Contoh ini menemukan jumlah semua angka dalam suatu array:

Contoh
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Perhatikan bahwa fungsi ini membutuhkan 4 argumen:

Total (nilai awal / nilai yang dikembalikan sebelumnya)
Nilai barang
Indeks item
Susunan itu sendiri
Karena contoh di atas tidak menggunakan parameter indeks dan array, maka dapat ditulis ulang menjadi:

Contoh
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
Metode ini reduce()dapat menerima nilai awal:

Contoh
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
Array JavaScript kurangiKanan()
Metode ini reduceRight()menjalankan fungsi pada setiap elemen array untuk menghasilkan satu nilai.

Karya reduceRight()-karya dari kanan ke kiri dalam array. Lihat juga reduce().

Catatan
Metode ini reduceRight()tidak mengurangi susunan asli.

Contoh ini menemukan jumlah semua angka dalam suatu array:

Contoh
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Perhatikan bahwa fungsi ini membutuhkan 4 argumen:

Total (nilai awal / nilai yang dikembalikan sebelumnya)
Nilai barang
Indeks item
Susunan itu sendiri
Contoh di atas tidak menggunakan parameter indeks dan array. Contoh ini dapat ditulis ulang menjadi:

Contoh
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
Array JavaScript setiap()
Metode ini every()memeriksa apakah semua nilai array lulus uji.

Contoh ini memeriksa apakah semua nilai array lebih besar dari 18:

Contoh
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
Ketika fungsi panggilan balik hanya menggunakan parameter pertama (nilai), parameter lainnya dapat dihilangkan:

Contoh
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
Array JavaScript beberapa()
Metode ini some()memeriksa apakah beberapa nilai array lulus uji.

Contoh ini memeriksa apakah beberapa nilai array lebih besar dari 18:

Contoh
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
JavaScript Array.from()
Metode ini Array.from()mengembalikan objek Array dari:

Objek apa pun yang dapat diulang

Objek apa pun yang memiliki properti panjang

Contoh
Membuat Array dari String:

let text = "ABCDEFG";
Array.from(text);
Array.from()memiliki parameter opsional yang memungkinkan Anda menjalankan fungsi pada setiap elemen array baru:

Contoh
Membuat Array dari Array:

const myNumbers = [1,2,3,4];
const myArr = Array.from(myNumbers, (x) => x * 2);
Dukungan Peramban
from()adalah fitur ES6 (JavaScript 2015).

ES6 didukung sepenuhnya di semua browser modern sejak Juni 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
from()tidak didukung di Internet Explorer.

Kunci Array JavaScript()
Metode ini Array.keys()mengembalikan objek Array Iterator dengan kunci array.

Contoh
Buat objek Array Iterator, yang berisi kunci array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
Dukungan Peramban
keys()adalah fitur ES6 (JavaScript 2015).

ES6 didukung sepenuhnya di semua browser modern sejak Juni 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
keys()tidak didukung di Internet Explorer.

Entri Array JavaScript()
Contoh
Buat Iterator Array, lalu ulangi pasangan kunci/nilai:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
Metode ini entries()mengembalikan objek Array Iterator dengan pasangan kunci/nilai:

[0, "Pisang"]
[1, "Jeruk"]
[2, "Apel"]
[3, "Mangga"]

Metode ini entries()tidak mengubah array asli.

Dukungan Peramban
entries()adalah fitur ES6 (JavaScript 2015).

ES6 didukung sepenuhnya di semua browser modern sejak Juni 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
entries()tidak didukung di Internet Explorer.

Array JavaScript dengan Metode()
ES2023 menambahkan metode Array with() sebagai cara aman untuk memperbarui elemen dalam array tanpa mengubah array asli.

Contoh
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
Penyebaran Array JavaScript (...)
Operator ...memperluas array menjadi elemen-elemen individual.

Ini dapat digunakan untuk menggabungkan array:

Contoh 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
Dalam contoh di atas, ...arr1 memperluas arr1 menjadi elemen tunggal, ...arr2 memperluas arr2 menjadi elemen tunggal, dan arr3 dibangun menggunakan ...arr1 dan ...arr2.

Contoh 2
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];
Operator penyebaran (...) dapat digunakan untuk menyalin suatu array:

Contoh 3
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
Operator penyebaran (...) dapat digunakan untuk meneruskan argumen ke suatu fungsi:

Contoh 4
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
Dukungan Peramban
... (spread)adalah fitur ES6 (JavaScript 2015).

ES6 didukung sepenuhnya di semua browser modern sejak Juni 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
... (spread)tidak didukung di Internet Explorer.

JavaScript Array Rest (...)
Operator sisanya (...) memungkinkan kita untuk menghancurkan suatu array dan mengumpulkan sisa-sisanya:

Contoh 1
let a, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, ...rest] = arr1;
Contoh 2
let a, b, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, b, ...rest] = arr1;