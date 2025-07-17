Aksesor Objek JavaScript
Aksesor JavaScript (Getter dan Setter)
ECMAScript 5 (ES5 2009) memperkenalkan Getter dan Setter.

Getter dan setter memungkinkan Anda menentukan Aksesor Objek (Properti yang Dihitung).

JavaScript Getter (Kata Kunci get)
Contoh ini menggunakan langproperti terhadap get nilai languageproperti.

Contoh
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
JavaScript Setter (Kata Kunci yang ditetapkan)
Contoh ini menggunakan langproperti terhadap set nilai languageproperti.

Contoh
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
IKLAN

Fungsi JavaScript atau Getter?
Apa perbedaan antara kedua contoh ini?

Contoh 1
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a method:
document.getElementById("demo").innerHTML = person.fullName();
Contoh 2
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
Contoh 1 mengakses fullName sebagai fungsi: person.fullName().

Contoh 2 mengakses fullName sebagai properti: person.fullName.

Contoh kedua menyediakan sintaksis yang lebih sederhana.

Kualitas Data
JavaScript dapat menjamin kualitas data yang lebih baik saat menggunakan getter dan setter.

Menggunakan langproperti, dalam contoh ini, mengembalikan nilai languageproperti dalam huruf besar:

Contoh
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
Dengan menggunakan langproperti, dalam contoh ini, menyimpan nilai huruf besar dalam languageproperti:

Contoh
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
Mengapa Menggunakan Getter dan Setter?
Ini memberikan sintaksis yang lebih sederhana
Ini memungkinkan sintaksis yang sama untuk properti dan metode
Ini dapat menjamin kualitas data yang lebih baik
Berguna untuk melakukan hal-hal di balik layar
Objek.defineProperty()
Metode ini Object.defineProperty()juga dapat digunakan untuk menambahkan Getter dan Setter:

Contoh Tandingan
// Define object
const obj = {counter : 0};

// Define setters and getters
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
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;