Konstanta JavaScript
Kata kunci ini constdiperkenalkan di ES6 (2015)

Variabel yang didefinisikan dengan consttidak dapat dideklarasikan ulang

Variabel yang didefinisikan dengan consttidak dapat Ditetapkan Ulang

Variabel yang didefinisikan dengan constmemiliki Cakupan Blok

Tidak Dapat Ditugaskan Kembali
Variabel yang didefinisikan dengan constkata kunci tidak dapat ditetapkan ulang:

Contoh
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
Harus Ditugaskan
Variabel JavaScript constharus diberi nilai saat dideklarasikan:

Benar
const PI = 3.14159265359;
Salah
const PI;
PI = 3.14159265359;
Kapan menggunakan JavaScript const?
Selalu deklarasikan variabel constketika Anda tahu bahwa nilainya tidak boleh diubah.

Gunakan constsaat Anda mendeklarasikan:

Array baru
Objek baru
Fungsi baru
RegExp baru
Objek dan Array Konstan
Kata kuncinya constagak menyesatkan.

Ini tidak mendefinisikan nilai konstan. Ini mendefinisikan referensi konstan ke suatu nilai.

Oleh karena itu Anda TIDAK BISA:

Tetapkan kembali nilai konstan
Menetapkan ulang array konstan
Tetapkan kembali objek konstan
Namun Anda BISA:

Mengubah elemen array konstan
Mengubah properti objek konstan
Array Konstan
Anda dapat mengubah elemen array konstan:

Contoh
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
Namun Anda TIDAK DAPAT menetapkan ulang array:

Contoh
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
Objek Konstan
Anda dapat mengubah properti objek konstan:

Contoh
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
Namun Anda TIDAK DAPAT menetapkan ulang objek:

Contoh
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"}    // ERROR
Perbedaan antara var, let dan const
Cakupan	Nyatakan kembali	Menugaskan kembali	Diangkat	Mengikat ini
var	TIDAK	Ya	Ya	Ya	Ya
membiarkan	Ya	TIDAK	Ya	TIDAK	TIDAK
konstan	Ya	TIDAK	TIDAK	TIDAK	TIDAK
Apa yang Baik?
letdan const memiliki cakupan blok .

letdan const tidak dapat dideklarasikan ulang .

letdan const harus dideklarasikan sebelum digunakan.

letdan const tidak mengikat ke this.

letdan const tidak diangkat .

Apa yang Tidak Baik?
vartidak harus dideklarasikan.

vardiangkat.

varmengikat ke ini.

Dukungan Peramban
Kata kunci letdan consttidak didukung di Internet Explorer 11 atau sebelumnya.

Tabel berikut mendefinisikan versi browser pertama dengan dukungan penuh:

Chrome 49	Edge 12	Firefox 36	Safari 11	Opera 36
Mar, 2016	Jul, 2015	Jan, 2015	Sep, 2017	Mar, 2016
IKLAN

Cakupan Blok
Mendeklarasikan variabel dengan constsama halnya dengan let Mendeklarasikan Variabel dengan Block Scope .

X yang dideklarasikan dalam blok, dalam contoh ini, tidak sama dengan x yang dideklarasikan di luar blok:

Contoh
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10
Anda dapat mempelajari lebih lanjut tentang cakupan blok dalam bab Cakupan JavaScript .

Mendeklarasikan ulang
Mendeklarasikan ulang variabel JavaScript vardiperbolehkan di mana saja dalam suatu program:

Contoh
var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
Mendeklarasikan ulang variabel varatau yang sudah ada let ke const, dalam cakupan yang sama, tidak diperbolehkan:

Contoh
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
Penugasan kembali constvariabel yang ada, dalam cakupan yang sama, tidak diperbolehkan:

Contoh
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
Mendeklarasikan ulang variabel dengan const, dalam cakupan lain, atau dalam blok lain, diperbolehkan:

Contoh
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
Pengangkatan
Variabel yang didefinisikan dengan diangkatvar ke atas dan dapat diinisialisasi kapan saja.

Artinya: Anda dapat menggunakan variabel sebelum dideklarasikan:

Contoh
Ini tidak apa-apa:

carName = "Volvo";
var carName;
Jika Anda ingin mempelajari lebih lanjut tentang pengangkatan, pelajari bab Pengangkatan JavaScript .

Variabel yang didefinisikan dengan constjuga diangkat ke atas, tetapi tidak diinisialisasi.

Artinya: Menggunakan constvariabel sebelum dideklarasikan akan menghasilkan ReferenceError:

Contoh
alert (carName);
const carName = "Volvo";