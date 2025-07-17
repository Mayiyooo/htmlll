Kata Kunci JavaScript ini
Contoh
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
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

ini dalam sebuah Metode
Bila digunakan dalam metode objek, thismerujuk ke objek tersebut .

Dalam contoh di bagian atas halaman ini, thismengacu pada objek orang .

Karena metode fullName adalah metode objek orang .

fullName : function() {
  return this.firstName + " " + this.lastName;
}
ini Sendiri
Bila digunakan sendiri, thismerujuk pada objek global .

Karena thisberjalan dalam lingkup global.

Di jendela browser, objek globalnya adalah [object Window]:

Contoh
let x = this;
 Dalam mode ketat , bila digunakan sendiri, thisjuga merujuk ke objek global :

Contoh
"use strict";
let x = this;
ini dalam Fungsi (Default)
Dalam suatu fungsi, objek global adalah pengikatan default untuk this.

Di jendela browser, objek globalnya adalah [object Window]:

Contoh
function myFunction() {
  return this;
}
IKLAN

ini dalam Fungsi (Ketat)
Mode ketat JavaScript tidak mengizinkan pengikatan default.

Jadi, ketika digunakan dalam suatu fungsi, dalam mode ketat, thisadalah undefined.

Contoh
"use strict";
function myFunction() {
  return this;
}
ini di Event Handlers
Dalam penanganan peristiwa HTML, thismengacu pada elemen HTML yang menerima peristiwa:

Contoh
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

Pengikatan Metode Objek
Dalam contoh ini, thisadalah objek orang :

Contoh
const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
Contoh
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
ie this.firstName adalah properti firstName dari this (objek orang).

Pengikatan Fungsi Eksplisit
Metode call()dan apply()adalah metode JavaScript yang telah ditentukan sebelumnya.

Keduanya dapat digunakan untuk memanggil metode objek dengan objek lain sebagai argumen.

Lihat Juga:
Panggilan Fungsi() Metode

Metode Fungsi apply()

Metode Fungsi bind()

Contoh di bawah ini memanggil person1.fullName dengan person2 sebagai argumen, ini merujuk ke person2, bahkan jika fullName adalah metode person1:

Contoh
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
person1.fullName.call(person2);

Fungsi Peminjaman
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
Preseden Ini
Untuk menentukan objek mana thisyang dirujuk, gunakan urutan prioritas berikut.

Hak lebih tinggi	Obyek
1	mengikat()
2	terapkan() dan panggil()
3	Metode objek
4	Cakupan global
Apakah thissuatu fungsi dipanggil menggunakan bind()?

Apakah thissuatu fungsi dipanggil menggunakan apply()?

Apakah thissuatu fungsi dipanggil menggunakan call()?

Apakah thisdalam fungsi objek (metode)?

Berada thisdalam fungsi dalam lingkup global.