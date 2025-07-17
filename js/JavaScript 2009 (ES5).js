JavaScript 2009 (ES5)
ECMAScript 2009
Revisi besar pertama pada JavaScript .

ECMAScript 2009 juga dikenal sebagai ES5.

Bab ini menjelaskan fitur-fitur baru ES5.

Fitur ES5
"gunakan yang ketat"
Akses String[ nomor ]
String multiline
String.trim()
Array.isArray()
Array untukSetiap()
Peta array()
Filter larik()
Array mengurangi()
Array kurangiKanan()
Array setiap()
Array beberapa()
Indeks arrayOf()
Array lastIndexOf()
JSON.parse()
JSON.stringify()
Tanggal.sekarang()
Tanggal keISOString()
Tanggal keJSON()
Pengambil dan pengatur properti
Kata-kata yang dicadangkan sebagai nama properti
Objek.buat()
Objek.kunci()
Manajemen objek
Perlindungan objek
Objek defineProperty()
Fungsi bind()
Koma di belakang
Dukungan Peramban
JavaScript 2009 didukung di semua browser modern sejak Juli 2013 :

Chrome
23	IE/Edge
10	Firefox
21	Safari
6	Opera
15
Sep 2012	Sep 2012	Apr 2013	Jul 2012	Jul 2013
Direktif "penggunaan ketat"
"use strict"mendefinisikan bahwa kode JavaScript harus dieksekusi dalam "mode ketat".

Dengan mode ketat, Anda dapat, misalnya, tidak menggunakan variabel yang tidak dideklarasikan.

Anda dapat menggunakan mode ketat di semua program Anda. Ini membantu Anda menulis kode yang lebih bersih, misalnya mencegah penggunaan variabel yang tidak dideklarasikan.

"use strict"hanyalah ekspresi string. Peramban lama tidak akan menampilkan kesalahan jika tidak memahaminya.

Baca selengkapnya di JS Strict Mode .

Akses Properti pada String
Metode ini charAt()mengembalikan karakter pada indeks (posisi) tertentu dalam sebuah string:

Contoh
var str = "HELLO WORLD";
str.charAt(0);            // returns H
ES5 memperbolehkan akses properti pada string:

Contoh
var str = "HELLO WORLD";
str[0];                   // returns H
Akses properti pada string mungkin sedikit tidak dapat diprediksi.

Baca selengkapnya di Metode String JS .

String di Atas Beberapa Baris
ES5 memperbolehkan literal string pada beberapa baris jika di-escape dengan garis miring terbalik:
Contoh
"Hello \
Dolly!";
Metode \ mungkin tidak memiliki dukungan universal.
Peramban lama mungkin memperlakukan spasi di sekitar garis miring terbalik secara berbeda.
Beberapa peramban lama tidak mengizinkan spasi di belakang karakter \.

Cara yang lebih aman untuk memecah string literal adalah dengan menggunakan penambahan string:

Contoh
"Hello " +
"Dolly!";
Kata Cadangan sebagai Nama Properti
ES5 memperbolehkan kata-kata yang dicadangkan sebagai nama properti:

Contoh Objek
var obj = {name: "John", new: "yes"}
Pemangkasan string()
Metode ini trim()menghilangkan spasi dari kedua sisi string.

Contoh
var str = "       Hello World!        ";
alert(str.trim());
Baca selengkapnya di Metode String JS .

IKLAN

Array.isArray()
Metode ini isArray()memeriksa apakah suatu objek adalah array.

Contoh
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}
Baca selengkapnya di JS Arrays .

Array untukSetiap()
Metode ini forEach()memanggil fungsi satu kali untuk setiap elemen array.

Contoh
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Peta array()
Contoh ini mengalikan setiap nilai array dengan 2:

Contoh
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Filter larik()
Contoh ini membuat array baru dari elemen dengan nilai lebih besar dari 18:

Contoh
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Array mengurangi()
Contoh ini menemukan jumlah semua angka dalam suatu array:

Contoh
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Array kurangiKanan()
Contoh ini juga menemukan jumlah semua angka dalam suatu array:

Contoh
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Array setiap()
Contoh ini memeriksa apakah semua nilai di atas 18:

Contoh
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Array beberapa()
Contoh ini memeriksa apakah beberapa nilai lebih dari 18:

Contoh
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Indeks arrayOf()
Mencari nilai elemen pada array dan mengembalikan posisinya.

Contoh
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

Array lastIndexOf()
lastIndexOf()sama dengan indexOf(), tetapi mencari dari akhir array.

Contoh
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
Pelajari lebih lanjut dalam Metode Iterasi Array JS .

JSON.parse()
Penggunaan umum JSON adalah untuk menerima data dari server web.

Bayangkan Anda menerima rangkaian teks ini dari server web:

'{"name":"John", "age":30, "city":"New York"}'
Fungsi JavaScript JSON.parse()digunakan untuk mengubah teks menjadi objek JavaScript:

var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
Baca selengkapnya di Tutorial JSON kami .

JSON.stringify()
Penggunaan umum JSON adalah untuk mengirim data ke server web.

Saat mengirim data ke server web, data harus berupa string.

Bayangkan kita memiliki objek ini di JavaScript:

var obj = {name:"John", age:30, city:"New York"};
Gunakan fungsi JavaScript JSON.stringify()untuk mengubahnya menjadi string.

var myJSON = JSON.stringify(obj);
Hasilnya akan berupa string yang mengikuti notasi JSON.

myJSON sekarang menjadi string, dan siap dikirim ke server:

Contoh
var obj = {name:"John", age:30, city:"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
Baca selengkapnya di Tutorial JSON kami .

Tanggal.sekarang()
Date.now()mengembalikan jumlah milidetik sejak tanggal nol (1 Januari 1970 00:00:00 UTC).

Contoh
var timInMSs = Date.now();
Date.now()mengembalikan hal yang sama seperti getTime() yang dilakukan pada suatu Dateobjek.

Pelajari lebih lanjut di JS Dates .

Tanggal keISOString()
Metode ini toISOString()mengubah objek Tanggal menjadi string, menggunakan format standar ISO:

Contoh
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();
Tanggal keJSON()
toJSON()mengubah objek Tanggal menjadi string, diformat sebagai tanggal JSON.

Tanggal JSON memiliki format yang sama dengan standar ISO-8601: YYYY-MM-DDTHH:mm:ss.sssZ:

Contoh
d = new Date();
document.getElementById("demo").innerHTML = d.toJSON();
Pengambil dan Penetap Properti
ES5 memungkinkan Anda mendefinisikan metode objek dengan sintaksis yang terlihat seperti mendapatkan atau menetapkan properti.

Contoh ini membuat getter untuk properti yang disebut fullName:

Contoh
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
Contoh ini membuat setter dan getter untuk properti bahasa:

Contoh
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
Contoh ini menggunakan setter untuk mengamankan pembaruan huruf besar suatu bahasa:

Contoh
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  set lang(value) {
    this.language = value.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
Pelajari lebih lanjut tentang Gettes dan Setters di Aksesor Objek JS

Objek.defineProperty()
Object.defineProperty()adalah metode Objek baru di ES5.

Memungkinkan Anda menentukan properti objek dan/atau mengubah nilai dan/atau metadata properti.

Contoh
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : true,
  configurable : true
});

// Enumerate Properties
let txt = "";
for (let x in person) {
  txt += person[x] + "<br>";
}

// Display Properties
document.getElementById("demo").innerHTML = txt;
Contoh berikutnya adalah kode yang sama, kecuali menyembunyikan properti bahasa dari enumerasi:

Contoh
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : false,
  configurable : true
});

// Enumerate Properties
let txt = "";
for (let x in person) {
  txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
Contoh ini membuat setter dan getter untuk mengamankan pembaruan huruf besar suatu bahasa:

Contoh
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO"
};

// Change a Property:
Object.defineProperty(person, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});

// Change Language
person.language = "en";

// Display Language
document.getElementById("demo").innerHTML = person.language;
Objek.buat()
Metode ini Object.create()membuat objek dari objek yang sudah ada.

Contoh
// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";
Objek.kunci()
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
Manajemen Objek
ES5 menambahkan metode manajemen Objek baru ke JavaScript:

Mengelola Objek
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)
Pelajari selengkapnya di Manajemen Objek .

Perlindungan Objek
ES5 menambahkan metode perlindungan Objek ke JavaScript:

Melindungi Objek
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
Pelajari selengkapnya di Perlindungan Objek .

Fungsi Bind()
Dengan bind()metode, suatu objek dapat meminjam metode dari objek lain.

Contoh ini membuat 2 objek (orang dan anggota).

Objek anggota meminjam metode nama lengkap dari objek orang:

Contoh
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
Pelajari lebih lanjut dalam Fungsi bind() .

Koma di Akhir
ES5 memperbolehkan tanda koma di akhir definisi objek dan array:

Contoh Objek
person = {
  firstName: "John",
  lastName: " Doe",
  age: 46,
}
Contoh Array
points = [
  1,
  5,
  10,
  25,
  40,
  100,
];
PERINGATAN !!!

JSON tidak mengizinkan koma di akhir.

Objek JSON:
// Allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46}'
JSON.parse(person)

// Not allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
JSON.parse(person)
Susunan JSON:
// Allowed:
points = [40, 100, 1, 5, 25, 10]

// Not allowed:
points = [40, 100, 1, 5, 25, 10,]