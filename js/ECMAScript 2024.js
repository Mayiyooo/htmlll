ECMAScript 2024
Fitur Baru di JavaScript 2024
Objek.groupBy()
Peta.groupBy()
String isWellFormed()
String keWellFormed()
Promise.denganResolvers()
Atomics.waitAsync
Peringatan
Fitur-fitur ini relatif baru.

Peramban lama mungkin memerlukan kode alternatif (Polyfill)

Objek JavaScript.groupBy()
Contoh
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
Keterangan
Metode ini Object.groupBy()mengelompokkan elemen suatu objek menurut nilai string yang dikembalikan dari fungsi panggilan balik.

Metode ini Object.groupBy()tidak mengubah objek asli.

Catatan:
Elemen dalam objek asli dan objek yang dikembalikan adalah sama.

Perubahan akan terlihat pada objek asli dan objek yang dikembalikan.

Peta JavaScript.groupBy()
Contoh
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruits, myCallback);
Keterangan
Metode ini Map.groupBy()mengelompokkan elemen suatu objek menurut nilai string yang dikembalikan dari fungsi panggilan balik.

Metode ini Map.groupBy()tidak mengubah objek asli.

Catatan:
Elemen dalam objek asli dan objek yang dikembalikan adalah sama.

Perubahan akan terlihat pada objek asli dan objek yang dikembalikan.

Objek.groupBy() vs Peta.groupBy()
Perbedaan antara Object.groupBy() dan Map.groupBy() adalah:

Object.groupBy() mengelompokkan elemen menjadi objek JavaScript.

Map.groupBy() mengelompokkan elemen menjadi objek Peta.

IKLAN

String JavaScript isWellFormed()
Metode ini isWellFormed()mengembalikan hasil true jika string terbentuk dengan baik.

Jika tidak, ia akan kembali false.

Suatu untaian tidak terbentuk dengan baik jika hanya mengandung pengganti tunggal .

Contoh
let text = "Hello world!";
let result = text.isWellFormed();
let text = "Hello World \uD800";
let result = text.isWellFormed();
Pengganti Tunggal
Pengganti tunggal adalah titik kode pengganti Unicode yang bukan bagian dari pasangan pengganti sah yang digunakan untuk merepresentasikan karakter dalam penyandian UTF-16.

String JavaScript keWellFormed()
Metode String toWellFormed() mengembalikan string baru di mana semua "pengganti tunggal" diganti dengan karakter pengganti Unicode (U+FFFD).

Contoh
let text = "Hello World \uD800";
let result = text.toWellFormed();