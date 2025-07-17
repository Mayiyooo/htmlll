Panduan Gaya JavaScript
Selalu gunakan konvensi pengkodean yang sama untuk semua proyek JavaScript Anda.

Konvensi Pengkodean JavaScript
Konvensi pengkodean adalah panduan gaya pemrograman . Konvensi ini biasanya mencakup:

Aturan penamaan dan deklarasi untuk variabel dan fungsi.
Aturan penggunaan spasi, indentasi, dan komentar.
Praktik dan prinsip pemrograman.
Konvensi pengkodean menjamin kualitas :

Meningkatkan keterbacaan kode
Memudahkan pemeliharaan kode
Konvensi pengkodean dapat berupa aturan terdokumentasi yang harus diikuti oleh tim, atau sekadar praktik pengkodean individual Anda.

Halaman ini menjelaskan konvensi kode JavaScript umum yang digunakan oleh W3Schools.
Anda juga harus membaca bab berikutnya, "Praktik Terbaik", dan mempelajari cara menghindari jebakan pengkodean.

Nama Variabel
Di W3schools kami menggunakan camelCase untuk nama pengenal (variabel dan fungsi).

Semua nama dimulai dengan huruf .

Di bagian bawah halaman ini, Anda akan menemukan diskusi yang lebih luas tentang aturan penamaan.

firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
Ruang di Sekitar Operator
Selalu beri spasi di sekitar operator ( = + - * / ), dan setelah koma:

Contoh:
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];
IKLAN

Indentasi Kode
Selalu gunakan 2 spasi untuk indentasi blok kode:

Fungsi:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
Jangan gunakan tab (tabulator) untuk indentasi. Editor yang berbeda menginterpretasikan tab secara berbeda.

Aturan Pernyataan
Aturan umum untuk pernyataan sederhana:

Selalu akhiri pernyataan sederhana dengan titik koma.
Contoh:
const cars = ["Volvo", "Saab", "Fiat"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
Aturan umum untuk pernyataan kompleks (majemuk):

Letakkan tanda kurung buka di akhir baris pertama.
Gunakan satu spasi sebelum tanda kurung buka.
Letakkan tanda kurung tutup pada baris baru, tanpa spasi di depan.
Jangan akhiri pernyataan kompleks dengan titik koma.
Fungsi:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
Putaran:
for (let i = 0; i < 5; i++) {
  x += i;
}
Kondisional:
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
Aturan Objek
Aturan umum untuk definisi objek:

Tempatkan tanda kurung buka pada baris yang sama dengan nama objek.
Gunakan titik dua ditambah satu spasi di antara setiap properti dan nilainya.
Gunakan tanda kutip di sekitar nilai string, bukan di sekitar nilai numerik.
Jangan menambahkan koma setelah pasangan properti-nilai terakhir.
Letakkan tanda kurung tutup pada baris baru, tanpa spasi di depan.
Selalu akhiri definisi objek dengan titik koma.
Contoh
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
Objek pendek dapat ditulis secara ringkas, dalam satu baris, dengan hanya menggunakan spasi di antara properti, seperti ini:

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Panjang Garis < 80
Demi keterbacaan, hindari baris yang lebih panjang dari 80 karakter.

Jika pernyataan JavaScript tidak muat dalam satu baris, tempat terbaik untuk memisahkannya adalah setelah operator atau koma.

Contoh
document.getElementById("demo").innerHTML =
"Hello Dolly.";
Konvensi Penamaan
Selalu gunakan konvensi penamaan yang sama untuk semua kode Anda. Misalnya:

Nama variabel dan fungsi ditulis sebagai camelCase
Variabel global ditulis dalam HURUF KAPITAL (Kami tidak melakukannya, tetapi cukup umum)
Konstanta (seperti PI) ditulis dalam HURUF KAPITAL
Haruskah Anda menggunakan hyp-hens , camelCase , atau under_scores dalam nama variabel?

Ini adalah pertanyaan yang sering dibahas para programmer. Jawabannya tergantung siapa yang Anda tanya:

Tanda hubung dalam HTML dan CSS:

Atribut HTML5 dapat dimulai dengan data- (data-quantity, data-price).

CSS menggunakan tanda hubung dalam nama properti (ukuran font).

Tanda hubung dapat disalahartikan sebagai upaya pengurangan. Tanda hubung tidak diperbolehkan dalam nama JavaScript.

Garis bawah:

Banyak programmer lebih suka menggunakan garis bawah (tanggal_lahir), terutama dalam basis data SQL.

Garis bawah sering digunakan dalam dokumentasi PHP.

Kasus Pascal:

PascalCase sering dipilih oleh programmer C.

camelCase:

camelCase digunakan oleh JavaScript itu sendiri, oleh jQuery, dan pustaka JavaScript lainnya.

Jangan memulai nama dengan tanda $. Ini akan menyebabkan konflik dengan banyak nama pustaka JavaScript.

Memuat JavaScript dalam HTML
Gunakan sintaksis sederhana untuk memuat skrip eksternal (atribut type tidak diperlukan):

<script src="myscript.js"></script>
Mengakses Elemen HTML
Konsekuensi dari penggunaan gaya HTML yang "tidak rapi", dapat mengakibatkan kesalahan JavaScript.

Kedua pernyataan JavaScript ini akan menghasilkan hasil yang berbeda:

const obj = getElementById("Demo")

const obj = getElementById("demo")