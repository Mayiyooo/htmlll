Metode Peta JavaScript
Metode Map() yang baru
Anda dapat membuat peta dengan meneruskan array ke new Map()konstruktor:

Contoh
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
Peta.dapatkan()
Anda mendapatkan nilai kunci dalam peta dengan get()metode

Contoh
fruits.get("apples");
Peta.set()
Anda dapat menambahkan elemen ke peta dengan set()metode:

Contoh
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
Metode ini set()juga dapat digunakan untuk mengubah nilai peta yang ada:

Contoh
fruits.set("apples", 500);
Ukuran peta
Properti sizemengembalikan jumlah elemen dalam peta:

Contoh
fruits.size;
Peta.hapus()
Metode ini delete()menghapus elemen peta:

Contoh
fruits.delete("apples");
Peta.bersih()
Metode ini clear()menghapus semua elemen dari peta:

Contoh
fruits.clear();
Peta.memiliki()
Metode ini has()mengembalikan true jika kunci ada di peta:

Contoh
fruits.has("apples");
Coba Ini:
fruits.delete("apples");
fruits.has("apples");
IKLAN

Peta.untukSetiap()
Metode ini forEach()memanggil panggilan balik untuk setiap pasangan kunci/nilai dalam suatu peta:

Contoh
// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
Peta.entri()
Metode ini entries()mengembalikan objek iterator dengan [kunci, nilai] dalam peta:

Contoh
// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
Peta.kunci()
Metode ini keys()mengembalikan objek iterator dengan kunci dalam peta:

Contoh
// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}
Peta.nilai()
Metode ini values()mengembalikan objek iterator dengan nilai dalam peta:

Contoh
// List all values
let text = "";
for (const x of fruits.values()) {
  text += x;
}
Anda dapat menggunakan values()metode ini untuk menjumlahkan nilai dalam peta:

Contoh
// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}
Objek sebagai Kunci
Mampu menggunakan objek sebagai kunci adalah fitur Peta yang penting.

Contoh
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
Ingat: Kuncinya adalah objek (apel), bukan string ("apel"):

Contoh
fruits.get("apples");  // Returns undefined
Peta JavaScript.groupBy()
ES2024 menambahkan Map.groupBy()metode tersebut ke JavaScript.

Metode ini Map.groupBy()mengelompokkan elemen suatu objek menurut nilai string yang dikembalikan dari fungsi panggilan balik.

Metode ini Map.groupBy()tidak mengubah objek asli.

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
Dukungan Peramban
Map.groupby()adalah fitur ES2024.

JavaScript 2024 didukung di browser baru sejak Maret 2024:

Chrome 117	Edge 117	Firefox 119	Safari 17.4	Opera 103
Sep 2023	Sep 2023	Oct 2023	Okt 2024	May 2023
Peringatan
Fitur ES2024 relatif baru.

Peramban lama mungkin memerlukan kode alternatif (Polyfill)

Objek.groupBy() vs Peta.groupBy()
Perbedaan antara Object.groupBy() dan Map.groupBy() adalah:

Object.groupBy() mengelompokkan elemen menjadi objek JavaScript.

Map.groupBy() mengelompokkan elemen menjadi objek Peta.