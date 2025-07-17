Konstanta Array JavaScript
ECMAScript 2015 (ES6)
Pada tahun 2015, JavaScript memperkenalkan kata kunci baru yang penting: const.

Telah menjadi praktik umum untuk mendeklarasikan array menggunakan const:

Contoh
const cars = ["Saab", "Volvo", "BMW"];
Tidak Dapat Ditugaskan Kembali
Suatu array yang dideklarasikan dengan consttidak dapat ditetapkan ulang:

Contoh
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
Array Bukan Konstanta
Kata kuncinya constagak menyesatkan.

Ini TIDAK mendefinisikan array konstan. Ini mendefinisikan referensi konstan ke array.

Karena itu, kita masih dapat mengubah elemen array konstan.

Elemen Dapat Ditugaskan Kembali
Anda dapat mengubah elemen array konstan:

Contoh
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
Dukungan Peramban
Kata kunci ini consttidak didukung di Internet Explorer 10 atau versi sebelumnya.

Tabel berikut mendefinisikan versi browser pertama yang mendukung penuh constkata kunci tersebut:

Chrome 49	IE 11 / Edge	Firefox 36	Safari 10	Opera 36
Mar, 2016	Oct, 2013	Feb, 2015	Sep, 2016	Mar, 2016
Ditugaskan saat Dideklarasikan
Variabel JavaScript constharus diberi nilai saat dideklarasikan:

Artinya: Suatu array yang dideklarasikan dengan constharus diinisialisasi saat dideklarasikan.

Menggunakan consttanpa menginisialisasi array adalah kesalahan sintaksis:

Contoh
Ini tidak akan berhasil:

const cars;
cars = ["Saab", "Volvo", "BMW"];
Array yang dideklarasikan dengan vardapat diinisialisasi kapan saja.

Anda bahkan dapat menggunakan array sebelum dideklarasikan:

Contoh
Ini tidak apa-apa:

cars = ["Saab", "Volvo", "BMW"];
var cars;
Lingkup Blok Konstan
Suatu array yang dideklarasikan dengan constmemiliki Cakupan Blok .

Suatu array yang dideklarasikan dalam suatu blok tidak sama dengan array yang dideklarasikan di luar blok:

Contoh
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
Suatu array yang dideklarasikan dengan vartidak memiliki cakupan blok:

Contoh
var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
Anda dapat mempelajari lebih lanjut tentang Cakupan Blok dalam bab: Cakupan JavaScript .

IKLAN

Mendeklarasikan Ulang Array
Mendeklarasikan ulang array yang dideklarasikan dengan vardiperbolehkan di mana saja dalam suatu program:

Contoh
var cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Toyota", "BMW"];  // Allowed
cars = ["Volvo", "Saab"];      // Allowed
Mendeklarasikan ulang atau menetapkan kembali array ke const, dalam cakupan yang sama, atau dalam blok yang sama, tidak diperbolehkan:

Contoh
var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
  var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}
Mendeklarasikan ulang atau menetapkan kembali constarray yang ada, dalam cakupan yang sama, atau dalam blok yang sama, tidak diperbolehkan:

Contoh
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}
Mendeklarasikan ulang sebuah array dengan const, dalam cakupan lain, atau dalam blok lain, diperbolehkan:

Contoh
const cars = ["Volvo", "BMW"];   // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}