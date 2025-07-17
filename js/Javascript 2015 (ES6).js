Javascript 2015 (ES6)
ECMAScript 2015
Revisi besar kedua pada JavaScript .

ECMAScript 2015 juga dikenal sebagai ES6.

Bab ini menjelaskan fitur-fitur ES6.

Fitur Baru di JavaScript 2015 (ES6)
Kata kunci let
Kata kunci const
Fungsi Panah
Operator {a,b} =
Operator [a,b] =
Operator ...
Untuk/dari
Objek Peta
Tetapkan Objek
Kelas
Janji
Simbol
Parameter Default
Parameter Istirahat Fungsi
String.termasuk()
String.dimulaiDengan()
String.berakhirDengan()
Entri array()
Array.dari()
Kunci array()
Temukan array()
TemukanIndeks() pada array
Math.trunc
Tanda matematika
Matematika.cbrt
Logaritma Matematika2
Logaritma Matematika10
Nomor.EPSILON
Nomor.MIN_SAFE_INTEGER
Nomor.MAX_SAFE_INTEGER
Nomor.adalahInteger()
Nomor.isSafeInteger()
RegExp /u
RegExp /y
Metode Global Baru
Modul JavaScript
Dukungan Browser untuk ES6 (2015)
JavaScript 2015 didukung di semua browser modern sejak Juni 2017 :

Chrome
51	Edge
15	Firefox
54	Safari
10	Opera
38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
ES6 tidak didukung di Internet Explorer.

JavaScript biarkan
Kata letkunci memungkinkan Anda mendeklarasikan variabel dengan cakupan blok.

Contoh
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
Baca selengkapnya letdi bab: JavaScript Let .

Konstanta JavaScript
Kata constkunci memungkinkan Anda mendeklarasikan konstanta (variabel JavaScript dengan nilai konstan).

Konstanta mirip dengan variabel let, kecuali nilainya tidak dapat diubah.

Contoh
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
Baca selengkapnya constdi bab: JavaScript Const .

Fungsi Panah
Fungsi panah memungkinkan sintaksis singkat untuk menulis ekspresi fungsi.

Anda tidak memerlukan functionkata kunci, returnkata kunci, dan tanda kurung kurawal .

Contoh
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
Fungsi panah tidak memiliki this. Fungsi ini kurang cocok untuk mendefinisikan metode objek .

Fungsi panah tidak diangkat. Fungsi ini harus didefinisikan sebelum digunakan.

Menggunakan const lebih aman daripada menggunakan var, karena ekspresi fungsi selalu berupa nilai konstan.

Anda hanya dapat menghilangkan returnkata kunci dan tanda kurung kurawal jika fungsinya merupakan pernyataan tunggal. Oleh karena itu, sebaiknya selalu menjaganya:

Contoh
const x = (x, y) => { return x * y };
Pelajari selengkapnya tentang Fungsi Panah dalam bab: Fungsi Panah JavaScript .

Destrukturisasi Objek
Penugasan destrukturisasi memudahkan penetapan nilai array dan properti objek ke variabel.

Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;
Catatan:
Saat mendekonstruksi suatu objek, Anda harus menggunakan nama yang sama untuk variabel sebagai kunci objek yang sesuai (nama).

Urutan kunci (nama) tidak menjadi masalah.

Destrukturisasi Array
Penugasan destrukturisasi memudahkan penetapan nilai array dan properti objek ke variabel.

Contoh
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;
Operator Penyebaran (...)
Operator ...menyebarkan suatu iterable (seperti array) ke dalam elemen-elemen individual.

Contoh
Operator ...dapat meneruskan argumen ke suatu fungsi:

const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
Contoh
Operator ...dapat digunakan untuk menggabungkan array:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
Contoh
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
IKLAN

Perulangan For/Of
Pernyataan JavaScript for/ofmengulang nilai-nilai objek yang dapat diulang.

for/ofmemungkinkan Anda melakukan pengulangan pada struktur data yang dapat diulang seperti Array, String, Maps, NodeList, dan banyak lagi.

Perulangan ini for/ofmemiliki sintaksis sebagai berikut:

for (variable of iterable) {
  // code block to be executed
}
variabel - Untuk setiap iterasi, nilai properti berikutnya ditetapkan ke variabel. Variabel dapat dideklarasikan dengan const, let, atau var.

dapat diulang - Objek yang memiliki properti yang dapat diulang.

Perulangan pada Array
Contoh
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
Melakukan Looping pada String
Contoh
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
}
Pelajari lebih lanjut dalam bab: Perulangan JavaScript For/In/Of .

Peta JavaScript
Mampu menggunakan Objek sebagai kunci adalah fitur Peta yang penting.

Contoh
const fruits = new Map([
["apples", 500],
["bananas", 300],
["oranges", 200]
]);
Pelajari selengkapnya tentang objek Peta, dan perbedaan antara Peta dan Array, dalam bab: Peta JavaScript .

Set JavaScript
Contoh
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
Pelajari selengkapnya tentang objek Set dalam bab: Set JavaScript .

Kelas JavaScript
Kelas JavaScript adalah templat untuk Objek JavaScript.

Gunakan kata kunci classuntuk membuat kelas.

Selalu tambahkan metode bernama constructor():

Sintaksis
class ClassName {
  constructor() { ... }
}
Contoh
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
Contoh di atas membuat kelas bernama "Mobil".

Kelas ini memiliki dua properti awal: "nama" dan "tahun".

Kelas JavaScript bukanlah sebuah objek.

Ini adalah templat untuk objek JavaScript.

Menggunakan Kelas
Ketika Anda memiliki kelas, Anda dapat menggunakan kelas tersebut untuk membuat objek:

Contoh
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

Pelajari lebih lanjut tentang kelas dalam bab: Kelas JavaScript .

Janji JavaScript
Promise adalah objek JavaScript yang menghubungkan "Memproduksi Kode" dan "Mengonsumsi Kode".

"Memproduksi Kode" dapat memakan waktu dan "Mengonsumsi Kode" harus menunggu hasilnya.

Sintaks Janji
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
Contoh Penggunaan Promise
const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});

Pelajari lebih lanjut tentang Promises dalam bab: Promises JavaScript .

Jenis Simbol
Simbol JavaScript adalah tipe data primitif seperti Angka, String, atau Boolean.

Ini merupakan pengenal "tersembunyi" unik yang tidak dapat diakses secara tidak sengaja oleh kode lain.

Misalnya, jika beberapa pembuat kode ingin menambahkan properti person.id ke objek person yang dimiliki kode pihak ketiga, mereka dapat mencampur nilai satu sama lain.

Menggunakan Symbol() untuk membuat pengenal unik, memecahkan masalah ini:

Contoh
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined
Catatan
Simbol selalu unik.

Jika Anda membuat dua simbol dengan deskripsi yang sama, keduanya akan memiliki nilai yang berbeda:

Symbol("id") == Symbol("id"); // false
Nilai Parameter Default
ES6 memperbolehkan parameter fungsi memiliki nilai default.

Contoh
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
Parameter Istirahat Fungsi
Parameter sisanya (...) memungkinkan suatu fungsi untuk memperlakukan argumen dalam jumlah tak terbatas sebagai suatu array:

Contoh
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
String.termasuk()
Metode ini includes()mengembalikan nilai truejika suatu string berisi nilai tertentu, jika tidak false:

Contoh
let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true
String.dimulaiDengan()
Metode ini startsWith()mengembalikan nilai true jika suatu string dimulai dengan nilai yang ditentukan, jika tidak false:

Contoh
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello")   // Returns true
String.berakhirDengan()
Metode ini endsWith()mengembalikan nilai true jika suatu string diakhiri dengan nilai yang ditentukan, jika tidak false:

Contoh
var text = "John Doe";
text.endsWith("Doe")    // Returns true
Entri array()
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

Array.dari()
Metode ini Array.from()mengembalikan objek Array dari objek apa pun dengan properti panjang atau objek apa pun yang dapat diulang.

Contoh
Membuat Array dari String:

Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
Kunci array()
Metode ini keys()mengembalikan objek Array Iterator dengan kunci array.

Contoh
Buat objek Array Iterator, yang berisi kunci array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}
Temukan array()
Metode ini find()mengembalikan nilai elemen array pertama yang lolos fungsi pengujian.

Contoh ini menemukan (mengembalikan nilai ) elemen pertama yang lebih besar dari 18:

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
TemukanIndeks() pada array
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
Metode Matematika Baru
ES6 menambahkan metode berikut ke objek Math:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()
Metode Math.trunc()
Math.trunc(x)mengembalikan bagian integer dari x:

Contoh
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4
Metode Math.sign()
Math.sign(x)kembali jika x negatif, null atau positif:

Contoh
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
Metode Math.cbrt()
Math.cbrt(x)mengembalikan akar pangkat tiga dari x:

Contoh
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5
Metode Math.log2()
Math.log2(x)mengembalikan logaritma basis 2 dari x:

Contoh
Math.log2(2);    // returns 1
Metode Math.log10()
Math.log10(x)mengembalikan logaritma basis 10 dari x:

Contoh
Math.log10(10);    // returns 1
Properti Nomor Baru
ES6 menambahkan properti berikut ke objek Number:

EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER
Contoh EPSILON
let x = Number.EPSILON;
Contoh MIN_SAFE_INTEGER
let x = Number.MIN_SAFE_INTEGER;
Contoh MAX_SAFE_INTEGER
let x = Number.MAX_SAFE_INTEGER;
Metode Number.isInteger()
Metode ini Number.isInteger()mengembalikan nilai truejika argumennya adalah bilangan bulat.

Contoh
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false
Metode Number.isSafeInteger()
Bilangan bulat yang aman adalah bilangan bulat yang dapat direpresentasikan secara tepat sebagai angka presisi ganda.

Metode ini Number.isSafeInteger()mengembalikan truejika argumennya adalah bilangan bulat yang aman.

Contoh
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false
Bilangan bulat aman adalah semua bilangan bulat dari -(2,53 - 1) hingga +(2,53 - 1).
Bilangan ini aman: 9007199254740991. Bilangan ini tidak aman: 9007199254740992.

Metode Global Baru
ES6 menambahkan 2 metode nomor global baru:

isFinite()
isNaN()
Metode isFinite()
Metode global isFinite()kembali falsejika argumennya adalah Infinityatau NaN.

Jika tidak, maka akan kembali true:

Contoh
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true
Metode isNaN()
Metode global isNaN()akan mengembalikan nilai truejika argumennya adalah NaN. Jika tidak, metode ini akan mengembalikan false:

Contoh
isNaN("Hello");       // returns true
Pengubah RegExp u
Contoh
let text = "Hello 😄";

let pattern = /\p{Emoji}/u;
let result = pattern.test(text);
let text = "Hello 😄";

let pattern = /\p{Emoji}/;
let result = pattern.test(text);
Keterangan
Bendera u (unicode) memungkinkan dukungan Unicode penuh dalam ekspresi reguler.

Secara default, JavaScript dan regex memperlakukan karakter Unicode 4-byte (seperti emoji atau simbol yang kurang umum) sebagai dua unit kode "pengganti" 2-byte yang terpisah.

Bendera u memperlakukan pola sebagai urutan titik kode Unicode, yang penting untuk menangani karakter dengan benar di luar Basic Multilingual Plane (BMP).

RegExp dan Pengubah
Contoh
let text = "abc def ghi";
let pattern = /\w+/y;

// Start match from position 4
pattern.lastIndex = 4;
let result = text.match(pattern);
let text = "abc def ghi";
let pattern = /\w+/;

// Start match from position 4
pattern.lastIndex = 4;
let result = text.match(pattern);
Keterangan
Bendera y (Sticky) melakukan pencarian "sticky" yang hanya cocok dari properti lastIndex objek RegExp.

Bendera y memastikan bahwa pencocokan berikutnya dimulai segera setelah pencocokan sebelumnya, tanpa melewatkan karakter.

Modul
Modul diimpor dengan dua cara berbeda:

Impor dari ekspor bernama
Impor ekspor bernama dari file person.js:

import { name, age } from "./person.js";

Impor dari ekspor default
Impor ekspor default dari file message.js:

import message from "./message.js";