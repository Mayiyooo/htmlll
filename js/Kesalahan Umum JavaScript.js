Kesalahan Umum JavaScript
Bab ini menunjukkan beberapa kesalahan JavaScript yang umum.

Menggunakan Operator Penugasan Secara Tidak Sengaja
Program JavaScript dapat menghasilkan hasil yang tidak diharapkan jika seorang programmer secara tidak sengaja menggunakan operator penugasan ( =), bukannya operator perbandingan ( ==) dalam pernyataan if.

Pernyataan ini ifkembali false(seperti yang diharapkan) karena x tidak sama dengan 10:

let x = 0;
if (x == 10)
Pernyataan ini ifmengembalikan true(mungkin tidak seperti yang diharapkan), karena 10 adalah benar:

let x = 0;
if (x = 10)
Pernyataan ini ifmengembalikan false(mungkin tidak seperti yang diharapkan), karena 0 salah:

let x = 0;
if (x = 0)
Suatu penugasan selalu mengembalikan nilai penugasan.

Mengharapkan Perbandingan yang Longgar
Dalam perbandingan biasa, tipe data tidak menjadi masalah. ifPernyataan ini mengembalikan nilai true:

let x = 10;
let y = "10";
if (x == y)
Dalam perbandingan yang ketat, tipe data memang penting. ifPernyataan ini mengembalikan nilai false:

let x = 10;
let y = "10";
if (x === y)
Merupakan kesalahan umum untuk melupakan bahwa switchpernyataan menggunakan perbandingan yang ketat:

Ini case switchakan menampilkan peringatan:

let x = 10;
switch(x) {
  case 10: alert("Hello");
}
Ini case switchtidak akan menampilkan peringatan:

let x = 10;
switch(x) {
  case "10": alert("Hello");
}
Penambahan & Penggabungan yang Membingungkan
Penjumlahan adalah tentang menambahkan angka .

Penggabungan adalah tentang menambahkan string .

Dalam JavaScript, kedua operasi menggunakan +operator yang sama.

Oleh karena itu, menambahkan angka sebagai angka akan menghasilkan hasil yang berbeda dari menambahkan angka sebagai string:

let x = 10;
x = 10 + 5;       // Now x is 15

let y = 10;
y += "5";        // Now y is "105"
Saat menambahkan dua variabel, mungkin sulit untuk mengantisipasi hasilnya:

let x = 10;
let y = 5;
let z = x + y;     // Now z is 15

let x = 10;
let y = "5";
let z = x + y;     // Now z is "105"
Kesalahpahaman Mengapung
Semua angka dalam JavaScript disimpan sebagai angka titik mengambang (float) 64-bit.

Semua bahasa pemrograman, termasuk JavaScript, memiliki kesulitan dengan nilai floating point yang tepat:

let x = 0.1;
let y = 0.2;
let z = x + y            // the result in z will not be 0.3
Untuk menyelesaikan soal di atas, ada baiknya kita melakukan perkalian dan pembagian:

Contoh
let z = (x * 10 + y * 10) / 10;       // z will be 0.3
Memutus String JavaScript
JavaScript akan memungkinkan Anda untuk membagi pernyataan menjadi dua baris:

Contoh 1
let x =
"Hello World!";
Namun, memecah pernyataan di tengah string tidak akan berhasil:

Contoh 2
let x = "Hello
World!";
Anda harus menggunakan "garis miring terbalik" jika Anda harus menghentikan pernyataan dalam string:

Contoh 3
let x = "Hello \
World!";
Salah Menempatkan Titik Koma
Karena titik koma yang salah tempat, blok kode ini akan dieksekusi terlepas dari nilai x:

if (x == 19);
{
  // code block 
}
Memutus Pernyataan Pengembalian
Merupakan perilaku JavaScript default untuk menutup pernyataan secara otomatis di akhir baris.

Oleh karena itu, kedua contoh ini akan menghasilkan hasil yang sama:

Contoh 1
function myFunction(a) {
  let power = 10 
  return a * power
}
Contoh 2
function myFunction(a) {
  let power = 10;
  return a * power;
}
JavaScript juga memungkinkan Anda untuk membagi pernyataan menjadi dua baris.

Oleh karena itu, contoh 3 juga akan mengembalikan hasil yang sama:

Contoh 3
function myFunction(a) {
  let
  power = 10; 
  return a * power;
}
Namun, apa yang akan terjadi jika Anda membagi pernyataan return menjadi dua baris seperti ini:

Contoh 4
function myFunction(a) {
  let
  power = 10; 
  return
  a * power;
}
Fungsi akan mengembalikan undefined!

Mengapa? Karena JavaScript mengira Anda bermaksud:

Contoh 5
function myFunction(a) {
  let
  power = 10; 
  return;
  a * power;
}
Penjelasan
Jika suatu pernyataan tidak lengkap seperti:

let
JavaScript akan mencoba melengkapi pernyataan tersebut dengan membaca baris berikutnya:

power = 10;
Namun karena pernyataan ini lengkap:

return
JavaScript akan otomatis menutupnya seperti ini:

return;
Hal ini terjadi karena penutupan (pengakhiran) pernyataan dengan titik koma bersifat opsional dalam JavaScript.

JavaScript akan menutup pernyataan return di akhir baris, karena ini adalah pernyataan yang lengkap.

Jangan pernah merusak pernyataan pengembalian.

Mengakses Array dengan Indeks Bernama
Banyak bahasa pemrograman mendukung array dengan indeks bernama.

Array dengan indeks bernama disebut array asosiatif (atau hash).

JavaScript tidak mendukung array dengan indeks bernama.

Dalam JavaScript, array menggunakan indeks bernomor :  

Contoh
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;       // person.length will return 3
person[0];           // person[0] will return "John"
Dalam JavaScript, objek menggunakan indeks bernama .

Jika Anda menggunakan indeks bernama, saat mengakses suatu array, JavaScript akan mendefinisikan ulang array tersebut menjadi objek standar.

Setelah pendefinisian ulang otomatis, metode dan properti array akan menghasilkan hasil yang tidak terdefinisi atau salah:

Contoh:
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;      // person.length will return 0
person[0];          // person[0] will return undefined
Mengakhiri Definisi dengan Koma
Penggunaan koma di akhir definisi objek dan array adalah sah dalam ECMAScript 5.

Contoh Objek:
person = {firstName:"John", lastName:"Doe", age:46,}
Contoh Array:
points = [40, 100, 1, 5, 25, 10,];