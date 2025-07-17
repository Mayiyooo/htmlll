Panggilan Fungsi JavaScript()
Metode Penggunaan Kembali
Dengan call()metode ini, Anda dapat menulis metode yang dapat digunakan pada objek yang berbeda.

Semua Fungsi adalah Metode
Dalam JavaScript semua fungsi adalah metode objek.

Jika suatu fungsi bukan merupakan metode suatu objek JavaScript, maka fungsi tersebut merupakan fungsi dari objek global (lihat bab sebelumnya).

Contoh di bawah ini membuat objek dengan 3 properti, firstName, lastName, fullName.

Contoh
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

// This will return "John Doe":
person.fullName();  
Dalam contoh di atas, thismengacu pada objek orang .

this.firstName berarti properti firstName dari this .

Sama seperti:

this.firstName berarti properti firstName dari person .

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

IKLAN

Metode panggilan JavaScript()
Metode ini call()adalah metode JavaScript yang telah ditetapkan sebelumnya.

Dapat digunakan untuk memanggil suatu metode dengan suatu objek sebagai argumen (parameter).

Catatan
Dengan call(), suatu objek dapat menggunakan metode milik objek lain.

Contoh ini memanggil metode fullName dari person, menggunakannya pada person1 :

Contoh
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

Contoh ini memanggil metode fullName dari person, menggunakannya pada person2 :

Contoh
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "Mary Doe"
person.fullName.call(person2);

Metode call() dengan Argumen
Metode ini call()dapat menerima argumen:

Contoh
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

