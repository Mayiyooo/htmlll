Definisi Objek JavaScript
Metode untuk Mendefinisikan Objek JavaScript
Menggunakan Objek Literal
Menggunakan newKata Kunci
Menggunakan Konstruktor Objek
MenggunakanObject.assign()
MenggunakanObject.create()
MenggunakanObject.fromEntries()
Objek Literal JavaScript
Literal objek adalah daftar nama properti:nilai di dalam kurung kurawal {} .

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Catatan:
Literal objek juga disebut inisialisasi objek .

Membuat Objek JavaScript
Contoh
Buat objek JavaScript kosong menggunakan {}, dan tambahkan 4 properti:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Buat objek JavaScript kosong menggunakan new Object(), dan tambahkan 4 properti:

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Catatan:
Contoh di atas melakukan hal yang persis sama.

Namun, tidak perlu menggunakan new Object().

Untuk keterbacaan, kesederhanaan dan kecepatan eksekusi, gunakan metode literal objek .

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
Metode Objek JavaScript
Metode Objek JavaScript dapat dikelompokkan menjadi:

Metode Umum
Metode Manajemen Properti
Metode Perlindungan Objek
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
Metode Objek Umum JavaScript

Metode Manajemen Properti
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
Metode Manajemen Properti JavaScript

Metode Perlindungan Objek
// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)