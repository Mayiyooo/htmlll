Konstruktor Objek JavaScript
Fungsi Konstruktor Objek
Terkadang kita perlu membuat banyak objek dengan tipe yang sama .

Untuk membuat suatu tipe objek, kita menggunakan fungsi konstruktor objek .

Dianggap sebagai praktik yang baik untuk memberi nama fungsi konstruktor dengan huruf pertama huruf kapital.

Tipe Objek Orang
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Catatan:
Dalam fungsi konstruktor, thistidak memiliki nilai.

Nilai thisakan menjadi objek baru saat objek baru dibuat.

Lihat Juga:
Tutorial JavaScript ini

Sekarang kita dapat menggunakan new Person() untuk membuat banyak objek Person baru:

Contoh
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
Nilai Default Properti
Nilai yang diberikan ke properti akan menjadi nilai default untuk semua objek yang dibuat oleh konstruktor:

Contoh
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
Menambahkan Properti ke Objek
Menambahkan properti ke objek yang dibuat itu mudah:

Contoh
myFather.nationality = "English";
Catatan:
Properti baru akan ditambahkan ke myFather . Tidak ke Objek Person lainnya .

Menambahkan Properti ke Konstruktor
Anda TIDAK DAPAT menambahkan properti baru ke konstruktor objek:

Contoh
Person.nationality = "English";
Untuk menambahkan properti baru, Anda harus menambahkannya ke prototipe fungsi konstruktor:

Contoh
Person.prototype.nationality = "English";

Metode Fungsi Konstruktor
Fungsi konstruktor juga dapat memiliki metode :

Contoh
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
Menambahkan Metode ke Objek
Menambahkan metode ke objek yang dibuat itu mudah:

Contoh
myMother.changeName = function (name) {
  this.lastName = name;
}
Catatan:
Metode baru akan ditambahkan ke myMother . Bukan ke Objek Person lainnya .

Menambahkan Metode ke Konstruktor
Anda tidak dapat menambahkan metode baru ke fungsi konstruktor objek.

Kode ini akan menghasilkan TypeError:

Contoh
Person.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
 TypeError: myMother.changeName is not a function

Penambahan metode baru harus dilakukan pada prototipe fungsi konstruktor:

Contoh
Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
Catatan:
Fungsi changeName() menetapkan nilai name ke properti orang tersebut lastName, menggantinya thisdengan myMother.

Konstruktor JavaScript bawaan
JavaScript memiliki konstruktor bawaan untuk semua objek asli:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
Catatan:
Objek Math()tidak ada dalam daftar. Mathadalah objek global. newKata kunci tidak dapat digunakan pada Math.

Tahukah Anda?
Gunakan literal objek {}sebagai ganti new Object().

Gunakan literal array []sebagai ganti new Array().

Gunakan pola literal /()/sebagai ganti new RegExp().

Gunakan ekspresi fungsi () {}sebagai ganti new Function().

Contoh
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function