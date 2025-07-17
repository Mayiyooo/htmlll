Metode Objek JavaScript
Metode Umum
// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)
Objek JavaScript.assign()
Metode ini Object.assign()menyalin properti dari satu atau lebih objek sumber ke objek target.

Contoh
// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);
Objek JavaScript.entri()
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
Object.entries()didukung di semua browser modern sejak Maret 2017:

Objek JavaScript.dariEntri()
Metode ini fromEntries()membuat objek dari daftar pasangan kunci/nilai.

Contoh
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
IKLAN

Objek JavaScript.nilai()
Object.values()mirip dengan Object.entries(), tetapi mengembalikan array dimensi tunggal dari nilai objek:

Contoh
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person);
Object.values()didukung di semua browser modern sejak Maret 2017:

Objek JavaScript.groupBy()
ES2024 menambahkan Object.groupBy()metode tersebut ke JavaScript.

Metode ini Object.groupBy()mengelompokkan elemen suatu objek menurut nilai string yang dikembalikan dari fungsi panggilan balik.

Metode ini Object.groupBy()tidak mengubah objek asli.

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
Dukungan Peramban
Object.groupby()adalah fitur ES2024.

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

Objek JavaScript.kunci()
Metode ini Object.keys()mengembalikan array dengan kunci suatu objek.

Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(person);
JavaScript untuk...dalam Perulangan
Pernyataan JavaScript for...inmengulang properti suatu objek.

Sintaksis
for (let variable in object) {
  // code to be executed
}
Blok kode di dalam for...inloop akan dieksekusi sekali untuk setiap properti.

Melakukan pengulangan melalui properti suatu objek:

Contoh
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}