
Perulangan For In
Pernyataan JavaScript for inmengulang properti suatu Objek:

Sintaksis
for (key in object) {
  // code block to be executed
}
Contoh
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
Contoh Dijelaskan
Perulangan for in mengulangi objek orang
Setiap iterasi mengembalikan kunci (x)
Kunci digunakan untuk mengakses nilai kunci
Nilai kuncinya adalah person[x]
Untuk Dalam Atas Array
Pernyataan JavaScript for injuga dapat mengulang properti Array:

Sintaksis
for (variable in array) {
  code
}
Contoh
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
Jangan gunakan for in pada Array jika urutan indeks penting.

Urutan indeks bergantung pada implementasi, dan nilai array mungkin tidak diakses dalam urutan yang Anda harapkan.

Lebih baik menggunakan for loop, for of loop, atau Array.forEach() ketika urutannya penting.

IKLAN

Array.untukSetiap()
Metode ini forEach()memanggil suatu fungsi (fungsi panggilan balik) satu kali untuk setiap elemen array.

Contoh
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
Perhatikan bahwa fungsi ini membutuhkan 3 argumen:

Nilai barang
Indeks item
Susunan itu sendiri
Contoh di atas hanya menggunakan parameter nilai. Parameter ini dapat ditulis ulang menjadi:

Contoh
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}