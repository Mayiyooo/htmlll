Prototipe Objek JavaScript
Semua objek JavaScript mewarisi properti dan metode dari sebuah prototipe.

Pada bab sebelumnya kita mempelajari cara menggunakan konstruktor objek :

Contoh
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
Kami juga mempelajari bahwa Anda tidak dapat menambahkan properti baru ke konstruktor objek yang ada:

Contoh
Person.nationality = "English";
Untuk menambahkan properti baru ke konstruktor, Anda harus menambahkannya ke fungsi konstruktor:

Contoh
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
Pewarisan Prototipe
Semua objek JavaScript mewarisi properti dan metode dari prototipe:

Dateobjek mewarisi dariDate.prototype
Arrayobjek mewarisi dariArray.prototype
Personobjek mewarisi dariPerson.prototype
Ada Object.prototypedi bagian atas rantai pewarisan prototipe:

Dateobjek, Arrayobjek, dan Personobjek mewarisi dari Object.prototype.

Menambahkan Properti dan Metode ke Objek
Terkadang Anda ingin menambahkan properti (atau metode) baru ke semua objek yang ada pada tipe tertentu.

Terkadang Anda ingin menambahkan properti (atau metode) baru ke konstruktor objek.

Menggunakan Properti Prototipe
Properti JavaScript prototypememungkinkan Anda menambahkan properti baru ke konstruktor objek:

Contoh
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
Properti JavaScript prototypejuga memungkinkan Anda menambahkan metode baru ke konstruktor objek:

Contoh
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
