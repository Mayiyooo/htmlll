Objek Tampilan JavaScript
Bagaimana Cara Menampilkan Objek JavaScript?
Menampilkan objek JavaScript akan menghasilkan [object Object] .

Contoh
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person;
Beberapa solusi untuk menampilkan objek JavaScript adalah:

Menampilkan Properti Objek berdasarkan nama
Menampilkan Properti Objek dalam Loop
Menampilkan Objek menggunakan Object.values()
Menampilkan Objek menggunakan JSON.stringify()
Menampilkan Properti Objek
Properti suatu objek dapat ditampilkan sebagai string:

Contoh
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Properties
document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;
Menampilkan Properti dalam Loop
Properti suatu objek dapat dikumpulkan dalam satu loop:

Contoh
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

// Display the Text
document.getElementById("demo").innerHTML = text;
Catatan:
Anda harus menggunakan person[x] dalam loop.

person.x tidak akan berfungsi (Karena x adalah variabel loop).


Menggunakan Object.values()
Object.values()membuat array dari nilai properti:

// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// Display the Array
document.getElementById("demo").innerHTML = myArray;
Menggunakan Object.entries()
Object.entries()membuatnya mudah untuk menggunakan objek dalam loop:

Contoh
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
Menggunakan JSON.stringify()
Objek JavaScript dapat diubah menjadi string dengan metode JSON JSON.stringify().

JSON.stringify()disertakan dalam JavaScript dan didukung di semua browser utama.

Catatan:
Hasilnya akan berupa string yang ditulis dalam notasi JSON:

{"nama":"John","umur":50,"kota":"New York"}

Contoh
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let myString = JSON.stringify(person);

// Display String
document.getElementById("demo").innerHTML = myString;