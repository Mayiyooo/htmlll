Properti Objek JavaScript
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
Objek JavaScript.defineProperty()
Metode ini Object.defineProperty()dapat digunakan untuk:

Menambahkan properti baru ke suatu objek
Mengubah nilai properti
Mengubah metadata properti
Mengubah pengambil dan penyetel objek
Sintaksis:

Object.defineProperty(object, property, descriptor)
Menambahkan Properti Baru
Contoh ini menambahkan properti baru ke suatu objek:

Contoh
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
Object.defineProperty(person, "year", {value:"2008"});
Mengubah Nilai Properti
Contoh ini mengubah nilai properti:

Contoh
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a Property
Object.defineProperty(person, "language", {value : "NO"});
Atribut Properti
Semua properti memiliki nama. Selain itu, mereka juga memiliki nilai.

Nilai adalah salah satu atribut properti.

Atribut lainnya adalah: dapat dihitung, dapat dikonfigurasi, dan dapat ditulis.

Atribut ini menentukan bagaimana properti dapat diakses (apakah dapat dibaca?, apakah dapat ditulis?)

Dalam JavaScript, semua atribut dapat dibaca, tetapi hanya atribut nilai yang dapat diubah (dan hanya jika properti dapat ditulis).

(ECMAScript 5 memiliki metode untuk mendapatkan dan mengatur semua atribut properti)

Mengubah Meta Data
Meta data properti berikut dapat diubah:

writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured
writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured
Getter dan setter juga dapat diubah:

// Defining a getter
get: function() { return language }
// Defining a setter
set: function(value) { language = value }
Contoh ini menjadikan bahasa hanya-baca:

Object.defineProperty(person, "language", {writable:false});
Contoh ini membuat bahasa tidak dapat dihitung:

Object.defineProperty(person, "language", {enumerable:false});

JavaScript getOwnPropertyNames()
Metode ini Object.getOwnPropertyNames()dapat:

Daftar properti objek
Sintaksis
Object.getOwnPropertyNames(object)
Daftar semua Properti Objek
Contoh ini mendapatkan semua properti suatu objek:

Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Get all Properties
Object.getOwnPropertyNames(person);
Object.getOwnPropertyNames()juga akan mencantumkan properti yang tidak dapat dihitung:

Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Set the language Property not enumerable
Object.defineProperty(person, "language", {enumerable:false});

// Get all Properties
Object.getOwnPropertyNames(person);
Objek JavaScript.kunci()
Metode ini Object.keys()dapat:

Daftar properti objek yang dapat dihitung
Sintaksis
Object.keys(object)
Daftar Properti Objek yang Dapat Dihitung
Contoh ini menggunakan Object.keys()insted of Object.getOwnPropertyNames():

Contoh
// Create an Object
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change the "language" Property
Object.defineProperty(person, "language", {enumerable:false});

// Get all Enumerable Properties
Object.keys(person);
Catatan
Metode getOwnPropertyNames() mengembalikan semua properti.

Metode Object.keys() mengembalikan semua properti yang dapat dihitung.

Jika Anda mendefinisikan properti objek tanpa enumerable:false , kedua metode akan mengembalikan hasil yang sama.

Menambahkan Getter dan Setter
Metode ini Object.defineProperty()juga dapat digunakan untuk menambahkan Getter dan Setter:

Contoh
//Create an object
const person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get: function () {return this.firstName + " " + this.lastName;}
});
Contoh Tandingan
Contoh
// Define object
const obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
