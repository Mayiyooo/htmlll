JavaScript Acak
Matematika.acak()
Math.random()mengembalikan angka acak antara 0 (inklusif) dan 1 (eksklusif):

Contoh
// Returns a random number:
Math.random();
Math.random()selalu mengembalikan angka yang lebih rendah dari 1.

Bilangan Bulat Acak JavaScript
Math.random()digunakan dengan Math.floor()dapat digunakan untuk mengembalikan bilangan bulat acak.

Tidak ada yang namanya bilangan bulat dalam JavaScript.

Kita berbicara tentang angka tanpa desimal di sini.

Contoh
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
Contoh
// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);
Contoh
// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);
Contoh
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
Contoh
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;
Contoh
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;
IKLAN

Fungsi Acak yang Tepat
Seperti yang dapat Anda lihat dari contoh di atas, mungkin merupakan ide bagus untuk membuat fungsi acak yang tepat untuk digunakan untuk semua tujuan bilangan bulat acak.

Fungsi JavaScript ini selalu mengembalikan angka acak antara min (termasuk) dan maks (dikecualikan):

Contoh
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
Fungsi JavaScript ini selalu mengembalikan angka acak antara min dan maks (keduanya disertakan):

Contoh
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}