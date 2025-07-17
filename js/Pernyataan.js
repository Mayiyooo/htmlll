
Pernyataan
Contoh
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
Program JavaScript
Program komputer adalah daftar "instruksi" yang akan "dieksekusi" oleh komputer.

Dalam bahasa pemrograman, instruksi pemrograman ini disebut pernyataan .

Program JavaScript adalah daftar pernyataan pemrograman .

Dalam HTML, program JavaScript dieksekusi oleh peramban web.

Pernyataan JavaScript
Pernyataan JavaScript terdiri dari:

Nilai, Operator, Ekspresi, Kata Kunci, dan Komentar.

Pernyataan ini memberi tahu browser untuk menulis "Halo Dolly." di dalam elemen HTML dengan id="demo":

Contoh
document.getElementById("demo").innerHTML = "Hello Dolly.";
Sebagian besar program JavaScript mengandung banyak pernyataan JavaScript.

Pernyataan tersebut dieksekusi, satu per satu, sesuai urutan penulisannya.

Program JavaScript (dan pernyataan JavaScript) sering disebut kode JavaScript.

Titik koma ;
Titik koma memisahkan pernyataan JavaScript.

Tambahkan titik koma di akhir setiap pernyataan yang dapat dieksekusi:

Contoh
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
Bila dipisahkan dengan titik koma, beberapa pernyataan dalam satu baris diperbolehkan:

a = 5; b = 6; c = a + b;
Di web, Anda mungkin melihat contoh tanpa titik koma.
Mengakhiri pernyataan dengan titik koma tidak diwajibkan, tetapi sangat disarankan.

IKLAN

Ruang Putih JavaScript
JavaScript mengabaikan banyak spasi. Anda dapat menambahkan spasi pada skrip Anda agar lebih mudah dibaca.

Baris-baris berikut ini ekuivalennya:

let person = "Hege";
let person="Hege";
Praktik yang baik adalah memberi spasi di sekitar operator ( = + - * / ):

let x = y + z;
Panjang Baris dan Jeda Baris JavaScript
Untuk keterbacaan terbaik, programmer sering kali ingin menghindari baris kode yang lebih panjang dari 80 karakter.

Jika pernyataan JavaScript tidak muat dalam satu baris, tempat terbaik untuk memisahkannya adalah setelah operator:

Contoh
document.getElementById("demo").innerHTML =
"Hello Dolly!";
Blok Kode JavaScript
Pernyataan JavaScript dapat dikelompokkan bersama dalam blok kode, di dalam tanda kurung kurawal {...}.

Tujuan blok kode adalah untuk mendefinisikan pernyataan yang akan dieksekusi bersama.

Satu tempat Anda akan menemukan pernyataan dikelompokkan bersama dalam blok, adalah dalam fungsi JavaScript:

Contoh
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
Dalam tutorial ini, kami menggunakan 2 spasi indentasi untuk blok kode.
Anda akan mempelajari lebih lanjut tentang fungsi nanti di tutorial ini.

Kata Kunci JavaScript
Pernyataan JavaScript sering kali diawali dengan kata kunci untuk mengidentifikasi tindakan JavaScript yang akan dilakukan.

Referensi Kata Cadangan kami mencantumkan semua kata kunci JavaScript.

Berikut adalah daftar beberapa kata kunci yang akan Anda pelajari dalam tutorial ini:

Kata kunci	Keterangan
var	Mendeklarasikan sebuah variabel
let	Mendeklarasikan variabel blok
const	Mendeklarasikan konstanta blok
if	Menandai blok pernyataan yang akan dieksekusi pada suatu kondisi
switch	Menandai blok pernyataan yang akan dieksekusi dalam kasus yang berbeda
for	Menandai blok pernyataan yang akan dieksekusi dalam satu loop
function	Mendeklarasikan suatu fungsi
return	Keluar dari suatu fungsi
try	Menerapkan penanganan kesalahan pada blok pernyataan
Kata kunci JavaScript adalah kata yang dicadangkan. Kata yang dicadangkan tidak dapat digunakan sebagai nama variabel.