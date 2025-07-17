
Fungsi Peminjaman
Dengan bind()metode, suatu objek dapat meminjam metode dari objek lain.

Contoh di bawah ini menciptakan 2 objek (orang dan anggota).

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
Melestarikan ini
Kadang-kadang metode ini bind()harus digunakan untuk mencegah kehilangan ini .

Dalam contoh berikut, objek person memiliki metode display. Dalam metode display, this merujuk ke objek person:

Contoh
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

person.display();
Ketika suatu fungsi digunakan sebagai panggilan balik, ini hilang.

Contoh ini akan mencoba menampilkan nama orang setelah 3 detik, tetapi malah akan menampilkan undefined :

Contoh
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
Metode ini bind()memecahkan masalah ini.

Dalam contoh berikut, bind()metode ini digunakan untuk mengikat person.display ke person.

Contoh ini akan menampilkan nama orang setelah 3 detik:

Contoh
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

let display = person.display.bind(person);
setTimeout(display, 3000);