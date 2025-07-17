Destrukturisasi JavaScript
Sintaks Penugasan Destrukturisasi
Sintaks penugasan destrukturisasi membongkar properti objek menjadi variabel:

let {firstName, lastName} = person;
Ia juga dapat membongkar array dan iterable lainnya:

let [firstName, lastName] = person;
Destrukturisasi Objek
Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;
Urutan properti tidak menjadi masalah:

Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName, firstName} = person;
Catatan:
Destrukturisasi tidaklah destruktif.

Destrukturisasi tidak mengubah objek asli.

Nilai Default Objek
Untuk properti yang berpotensi hilang, kita dapat menetapkan nilai default:

Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, country = "US"} = person;
Alias Properti Objek
Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName : name} = person;
Destrukturisasi String
Salah satu penggunaan destrukturisasi adalah membongkar karakter string.

Contoh
// Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
Catatan:
Destrukturisasi dapat digunakan dengan iterabel apa pun.

IKLAN

Destrukturisasi Array
Kita dapat mengambil variabel array ke dalam variabel kita sendiri:

Contoh
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
Melewati Nilai Array
Kita dapat melewati nilai array menggunakan dua koma atau lebih:

Contoh
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1,,,fruit2] = fruits;
Nilai Posisi Array
Kita dapat mengambil nilai dari lokasi indeks tertentu suatu array:

Contoh
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let {[0]:fruit1 ,[1]:fruit2} = fruits;
Properti Istirahat
Anda dapat mengakhiri sintaksis destrukturisasi dengan properti rest.

Sintaks ini akan menyimpan semua nilai yang tersisa ke dalam array baru:

Contoh
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers
Destrukturisasi Peta
Contoh
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Destructuring
let text = "";
for (const [key, value] of fruits) {
  text += key + " is " + value;
}
Menukar Variabel JavaScript
Anda dapat menukar nilai dua variabel menggunakan penugasan destrukturisasi:

Contoh
let firstName = "John";
let lastName = "Doe";

// Destructuring
[firstName, lastName] = [lastName, firstName];