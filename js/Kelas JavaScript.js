Kelas JavaScript
ECMAScript 2015, juga dikenal sebagai ES6, memperkenalkan Kelas JavaScript.

Kelas JavaScript adalah templat untuk Objek JavaScript.

Sintaks Kelas JavaScript
Gunakan kata kunci classuntuk membuat kelas.

Selalu tambahkan metode bernama constructor():

Sintaksis
class ClassName {
  constructor() { ... }
}
Contoh
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
Contoh di atas membuat kelas bernama "Mobil".

Kelas ini memiliki dua properti awal: "nama" dan "tahun".

Kelas JavaScript bukanlah sebuah objek.

Ini adalah templat untuk objek JavaScript.

Menggunakan Kelas
Ketika Anda memiliki kelas, Anda dapat menggunakan kelas tersebut untuk membuat objek:

Contoh
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

Contoh di atas menggunakan kelas Mobil untuk membuat dua objek Mobil .

Metode konstruktor dipanggil secara otomatis saat objek baru dibuat.

Metode Konstruktor
Metode konstruktor adalah metode khusus:

Itu harus memiliki nama yang tepat "konstruktor"
Ini dijalankan secara otomatis ketika objek baru dibuat
Digunakan untuk menginisialisasi properti objek
Jika Anda tidak mendefinisikan metode konstruktor, JavaScript akan menambahkan metode konstruktor kosong.

IKLAN

Metode Kelas
Metode kelas dibuat dengan sintaksis yang sama dengan metode objek.

Gunakan kata kunci classuntuk membuat kelas.

Selalu tambahkan constructor()metode.

Lalu tambahkan sejumlah metode.

Sintaksis
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
Buat metode Kelas bernama "age", yang mengembalikan usia Mobil:

Contoh
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";

Anda dapat mengirim parameter ke metode Kelas:

Contoh
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";

Dukungan Peramban
Tabel berikut mendefinisikan versi browser pertama dengan dukungan penuh untuk Kelas dalam JavaScript:

Chrome 49	Edge 12	Firefox 45	Safari 9	Opera 36
Mar, 2016	Jul, 2015	Mar, 2016	Oct, 2015	Mar, 2016
"gunakan yang ketat"
Sintaks dalam kelas harus ditulis dalam "mode ketat".

Anda akan mendapatkan kesalahan jika tidak mengikuti aturan "mode ketat".

Contoh
Dalam "mode ketat" Anda akan mendapatkan kesalahan jika Anda menggunakan variabel tanpa mendeklarasikannya:

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    // date = new Date();  // This will not work
    const date = new Date(); // This will work
    return date.getFullYear() - this.year;
  }
}