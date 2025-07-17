
Kata kunci ini letdiperkenalkan di ES6 (2015)

Variabel yang dideklarasikan dengan letmemiliki Cakupan Blok

Variabel yang dideklarasikan dengan letharus dideklarasikan sebelum digunakan

Variabel yang dideklarasikan dengan lettidak dapat dideklarasikan ulang dalam lingkup yang sama

Cakupan Blok
Sebelum ES6 (2015), JavaScript tidak memiliki Cakupan Blok .

JavaScript memiliki Cakupan Global dan Cakupan Fungsi .

ES6 memperkenalkan dua kata kunci JavaScript baru: letdan const.

Kedua kata kunci ini menyediakan Cakupan Blok dalam JavaScript:

Contoh
Variabel yang dideklarasikan di dalam blok {} tidak dapat diakses dari luar blok:

{
  let x = 2;
}
// x can NOT be used here
Cakupan Global
Variabel yang dideklarasikan dengan varselalu mempunyai Cakupan Global .

Variabel yang dideklarasikan dengan varkata kunci TIDAK DAPAT memiliki cakupan blok:

Contoh
Variabel yang dideklarasikan di vardalam blok {} dapat diakses dari luar blok:

{
  var x = 2;
}
// x CAN be used here
Tidak Dapat Dideklarasikan Ulang
Variabel yang didefinisikan dengan let tidak dapat dideklarasikan ulang.

Anda tidak dapat secara tidak sengaja mendeklarasikan ulang variabel yang dideklarasikan dengan let.

Dengan letAnda tidak dapat melakukan ini:

let x = "John Doe";

let x = 0;
Variabel yang didefinisikan dengan var dapat dideklarasikan ulang.

Dengan varAnda dapat melakukan ini:

var x = "John Doe";

var x = 0;
Mendeklarasikan Ulang Variabel
Mendeklarasikan ulang suatu variabel menggunakan varkata kunci dapat menimbulkan masalah.

Mendeklarasikan ulang variabel di dalam blok juga akan mendeklarasikan ulang variabel di luar blok:

Contoh
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
Mendeklarasikan ulang suatu variabel menggunakan letkata kunci dapat memecahkan masalah ini.

Mendeklarasikan ulang variabel di dalam blok tidak akan mendeklarasikan ulang variabel di luar blok:

Contoh
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
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

Mendeklarasikan ulang
Mendeklarasikan ulang variabel JavaScript dengan vardiperbolehkan di mana saja dalam suatu program:

Contoh
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
Dengan let, mendeklarasikan ulang variabel dalam blok yang sama TIDAK diizinkan:

Contoh
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
Mendeklarasikan ulang variabel dengan let, di blok lain, DIPERBOLEHKAN:

Contoh
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}
Biarkan Pengangkatan
Variabel yang didefinisikan dengan diangkatvar ke atas dan dapat diinisialisasi kapan saja.

Artinya: Anda dapat menggunakan variabel sebelum dideklarasikan:

Contoh
Ini tidak apa-apa:

carName = "Volvo";
var carName;
Jika Anda ingin mempelajari lebih lanjut tentang pengangkatan, pelajari bab Pengangkatan JavaScript .

Variabel yang didefinisikan dengan letjuga diangkat ke bagian atas blok, tetapi tidak diinisialisasi.

Artinya: Menggunakan letvariabel sebelum dideklarasikan akan menghasilkan ReferenceError:

Contoh
carName = "Saab";
let carName = "Volvo";