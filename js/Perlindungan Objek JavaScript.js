Perlindungan Objek JavaScript
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
Menggunakan const
Cara paling umum untuk melindungi suatu objek agar tidak diubah adalah dengan menggunakan constkata kunci.

Dengan constAnda tidak dapat menetapkan ulang objek, tetapi Anda masih dapat mengubah nilai properti, menghapus properti, atau membuat properti baru.

Objek JavaScript.preventExtensions()
Metode ini Object.preventExtensions()mencegah penambahan properti ke suatu objek.

Contoh
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will throw an error
person.nationality = "English";
Karena array adalah objek, array juga dapat dicegah dari ekstensi:

Contoh
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits);

// This will throw an error:
fruits.push("Kiwi");
Objek JavaScript.isExtensible()
Anda dapat menggunakannya Object.isExtensible()untuk memeriksa apakah suatu objek dapat diperluas.

Mengembalikan Object.isExtensible()nilai true jika suatu objek dapat diperluas.

Contoh
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will return false
let answer = Object.isExtensible(person);
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Prevent Extensions
Object.preventExtensions(fruits);

// This will return false
let answer = Object.isExtensible(fruits);
Objek JavaScript.seal()
Metode ini Object.seal()mencegah penambahan atau penghapusan properti baru.

Metode ini Object.seal()membuat properti yang ada tidak dapat dikonfigurasi.

Metode ini Object.isSealed()dapat digunakan untuk memeriksa apakah suatu objek tersegel.

Catatan
Metode ini Object.seal()akan gagal secara diam-diam dalam mode non-ketat dan memunculkan TypeError dalam mode ketat.

Contoh
"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Seal Object
Object.seal(person)

// This will throw an error
delete person.age;
Karena array adalah objek, maka array juga dapat disegel:

Contoh
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits);

// This will throw an error:
fruits.push("Kiwi");
Objek JavaScript.isSealed()
Metode ini Object.isSealed()dapat digunakan untuk memeriksa apakah suatu objek tersegel.

Mengembalikan Object.isSealed()nilai true jika suatu objek disegel.

Contoh
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Seal Object
Object.seal(person);

// This will return true
let answer = Object.isSealed(person);
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Seal Array
Object.seal(fruits);

// This will return true
let answer = Object.isSealed(fruits);
Objek JavaScript.freeze()
Metode ini Object.freeze()mencegah perubahan apa pun pada suatu objek.

Objek yang dibekukan hanya dapat dibaca saja.

Tidak diperbolehkan melakukan modifikasi, penambahan atau penghapusan properti.

Catatan
Metode ini Object.freeze()akan gagal secara diam-diam dalam mode non-ketat dan memunculkan TypeError dalam mode ketat.

Contoh
"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person)

// This will throw an error
person.age = 51;
Karena array adalah objek, array juga dapat dibekukan:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);

// This will trow an error:
fruits.push("Kiwi");
Objek JavaScript.isFrozen()
Metode ini Object.isFrozen()dapat digunakan untuk memeriksa apakah suatu objek membeku.

Mengembalikan Object.isFrozen()nilai true jika suatu objek dibekukan.

Contoh
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Freeze Object
Object.freeze(person);

// This will return true
let answer = Object.isFrozen(person);
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);

// This will return true:
let answer = Object.isFrozen(fruits);