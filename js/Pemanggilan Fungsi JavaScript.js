Pemanggilan Fungsi JavaScript
Kode di dalam JavaScript functionakan dieksekusi saat "sesuatu" memanggilnya.

Memanggil Fungsi JavaScript
Kode di dalam suatu fungsi tidak dieksekusi saat fungsi tersebut didefinisikan .

Kode di dalam suatu fungsi dieksekusi saat fungsi tersebut dipanggil .

Adalah umum untuk menggunakan istilah " memanggil fungsi " dan bukannya " memanggil fungsi ".

Juga umum untuk mengatakan "memanggil suatu fungsi", "memulai suatu fungsi", atau "mengeksekusi suatu fungsi".

Dalam tutorial ini, kita akan menggunakan invoke , karena fungsi JavaScript dapat dipanggil tanpa dipanggil.

Memanggil Fungsi sebagai Fungsi
Contoh
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);           // Will return 20
Fungsi di atas tidak termasuk dalam objek apa pun. Namun, dalam JavaScript selalu ada objek global default.

Dalam HTML, objek global default adalah halaman HTML itu sendiri, jadi fungsi di atas "milik" halaman HTML.

Di peramban, objek halaman adalah jendela peramban. Fungsi di atas secara otomatis menjadi fungsi jendela.

Catatan
Ini adalah cara umum untuk memanggil fungsi JavaScript, tetapi bukan praktik yang baik.
Variabel, metode, atau fungsi global dapat dengan mudah menimbulkan konflik nama dan bug pada objek global.

myFunction() dan window.myFunction() adalah fungsi yang sama:

Contoh
function myFunction(a, b) {
  return a * b;
}
window.myFunction(10, 2);    // Will also return 20
Apa ini ?
Dalam JavaScript, thiskata kunci merujuk pada suatu objek .

Kata thiskunci mengacu pada objek yang berbeda tergantung pada bagaimana ia digunakan:

Dalam metode objek, thismengacu pada objek .
Sendirian, thismengacu pada objek global .
Dalam suatu fungsi, thismengacu pada objek global .
Dalam suatu fungsi, dalam mode ketat, thisadalah undefined.
Dalam suatu peristiwa, thismengacu pada elemen yang menerima peristiwa tersebut.
Metode seperti call(), apply(), dan bind()dapat merujuk thiske objek apa pun .
Catatan
thisbukan variabel. Ini adalah kata kunci. Anda tidak dapat mengubah nilai this.

Lihat Juga:
Tutorial JavaScript ini

Objek Global
Ketika suatu fungsi dipanggil tanpa objek pemilik, nilai this menjadi objek global.

Dalam peramban web, objek global adalah jendela peramban.

Contoh ini mengembalikan objek jendela sebagai nilai this:

Contoh
let x = myFunction();            // x will be the window object

function myFunction() {
  return this;
}
Memanggil suatu fungsi sebagai fungsi global akan menyebabkan nilai this menjadi objek global.
Menggunakan objek window sebagai variabel dapat dengan mudah membuat program Anda crash.

Memanggil Fungsi sebagai Metode
Dalam JavaScript Anda dapat mendefinisikan fungsi sebagai metode objek.

Contoh berikut membuat sebuah objek ( myObject ), dengan dua properti ( firstName dan lastName ), dan sebuah metode ( fullName ):

Contoh
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Will return "John Doe"
Metode fullName adalah sebuah fungsi. Fungsi tersebut merupakan milik objek. myObject adalah pemilik fungsi tersebut.

Objek yang disebut this, adalah objek yang "memiliki" kode JavaScript. Dalam hal ini, nilai dari this adalah myObject .

Uji! Ubah metode fullName untuk mengembalikan nilai this:

Contoh
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
}

// This will return [object Object] (the owner object)
myObject.fullName();
