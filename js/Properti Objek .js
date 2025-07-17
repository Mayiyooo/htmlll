Properti Objek JavaScript
Objek adalah kumpulan properti yang tidak berurutan
Properti adalah bagian terpenting dari objek JavaScript.

Properti dapat diubah, ditambahkan, dihapus, dan beberapa bersifat hanya baca.

Mengakses Properti JavaScript
Sintaks untuk mengakses properti suatu objek adalah:

// objectName.property
let age = person.age;
atau

//objectName["property"]
let age = person["age"];
atau

//objectName[expression]
let age = person[x];
Contoh
person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";
let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old.";
Menambahkan Properti Baru
Anda dapat menambahkan properti baru ke objek yang sudah ada hanya dengan memberinya nilai:

Contoh
person.nationality = "English";
Menghapus Properti
Kata deletekunci menghapus properti dari suatu objek:

Contoh
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
atau hapus person["age"];

Contoh
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
Catatan:
Kata deletekunci menghapus nilai properti dan properti itu sendiri.

Setelah dihapus, properti tidak dapat digunakan sebelum ditambahkan kembali.

IKLAN

Objek Bersarang
Nilai properti dalam suatu objek dapat berupa objek lain:

Contoh
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
Anda dapat mengakses objek bersarang menggunakan notasi titik atau notasi tanda kurung:

Contoh
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];