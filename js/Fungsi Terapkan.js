
Metode Penggunaan Kembali
Dengan apply()metode ini, Anda dapat menulis metode yang dapat digunakan pada objek yang berbeda.

Metode JavaScript apply()
Metodenya apply()mirip dengan call()metode (bab sebelumnya).

Dalam contoh ini metode fullName person diterapkan pada person1 :

Contoh
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);

Perbedaan Antara call() dan apply()
Perbedaannya adalah:

Metode ini call()menerima argumen secara terpisah .

Metode ini apply()menerima argumen sebagai array .

Metode apply() sangat berguna jika Anda ingin menggunakan array, bukan daftar argumen.

Metode apply() dengan Argumen
Metode ini apply()menerima argumen dalam sebuah array:

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

person.fullName.apply(person1, ["Oslo", "Norway"]);

Dibandingkan dengan call()metode:

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

IKLAN

Simulasikan Metode Max pada Array
Anda dapat menemukan angka terbesar (dalam daftar angka) menggunakan Math.max()metode:

Contoh
Math.max(1,2,3);  // Will return 3

Karena array JavaScript tidak memiliki metode max(), Anda dapat menerapkan Math.max()metode tersebut sebagai gantinya.

Contoh
Math.max.apply(null, [1,2,3]); // Will also return 3

Argumen pertama (null) tidak penting. Argumen ini tidak digunakan dalam contoh ini.

Contoh-contoh ini akan memberikan hasil yang sama:

Contoh
Math.max.apply(Math, [1,2,3]); // Will also return 3

Contoh
Math.max.apply(" ", [1,2,3]); // Will also return 3

Contoh
Math.max.apply(0, [1,2,3]); // Will also return 3