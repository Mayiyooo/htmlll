ECMAScript 2019
Fitur Baru di JavaScript 2019
String.trimStart()
String.trimEnd()
Objek.dariEntri
Pengikat tangkapan opsional
Array.datar()
Array.flatMap()
Array.Sort() yang Direvisi
JSON.stringify() yang direvisi
Simbol pemisah yang diizinkan dalam string literal
Fungsi yang Direvisi.toString()
String JavaScript trimStart()
ES2019 menambahkan metode String trimStart()ke JavaScript.

Metode ini trimStart()bekerja seperti trim(), tetapi hanya menghapus spasi dari awal string.

Contoh
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
JavaScript String trimStart()didukung di semua browser modern sejak Januari 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
String JavaScript trimEnd()
ES2019 menambahkan metode String trimEnd()ke JavaScript.

Metode ini trimEnd()bekerja seperti trim(), tetapi hanya menghapus spasi dari akhir string.

Contoh
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
JavaScript String trimEnd()didukung di semua browser modern sejak Januari 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
Objek JavaScript dariEntri()
ES2019 menambahkan metode Objek fromEntries()ke JavaScript.

Metode ini fromEntries()membuat objek dari pasangan kunci/nilai yang dapat diulang.

Contoh
const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
Objek JavaScript fromEntries()didukung di semua browser modern sejak Januari 2020:

Chrome 73	Edge 79	Firefox 63	Safari 12.1	Opera 60
Mar 2019	Jan 2020	Oct 2018	Mar 2019	Apr 2019
IKLAN

Pengikatan tangkapan opsional
Mulai ES2019 Anda dapat menghilangkan parameter catch jika Anda tidak membutuhkannya:.

Contoh
Sebelum tahun 2019:

try {
// code
} catch (err) {
// code
}
Setelah 2019:

try {
// code
} catch {
// code
}
Pengikatan tangkapan opsional didukung di semua browser modern sejak Januari 2020:

Chrome 66	Edge 79	Firefox 58	Safari 11.1	Opera 53
Apr 2018	Jan 2020	Jan 2018	Mar 2018	May 2018
Array JavaScript datar()
ES2019 menambahkan metode Array flat()ke JavaScript.

Metode ini flat()membuat array baru dengan meratakan array bersarang.

Contoh
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
JavaScript Array flat()didukung di semua browser modern sejak Januari 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
Array JavaScript flatMap()
ES2019 menambahkan metode Array flatMap()ke JavaScript.

Metode ini flatMap()pertama-tama memetakan semua elemen suatu array, lalu membuat array baru dengan meratakan array tersebut.

Contoh
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
Sort() Array Stabil
ES2019 merevisi metode Array sort().

Sebelum tahun 2019, spesifikasi tersebut memperbolehkan algoritma pengurutan yang tidak stabil seperti QuickSort.

Setelah ES2019, browser harus menggunakan algoritma pengurutan yang stabil:

Saat mengurutkan elemen berdasarkan suatu nilai, elemen-elemen tersebut harus mempertahankan posisi relatifnya terhadap elemen lain dengan nilai yang sama.

Contoh
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
Dalam contoh di atas, saat mengurutkan berdasarkan harga, hasilnya tidak boleh memiliki nama di posisi relatif yang berbeda, seperti ini:

X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110
JSON.stringify() yang direvisi
ES2019 merevisi metode JSON stringify().

Sebelum tahun 2019, JSON tidak dapat mengubah karakter yang dikodekan dengan \ menjadi string.

Contoh
let text = JSON.stringify("\u26D4");
Sebelum ES2019, penggunaan JSON.stringify()JSON pada titik kode UTF-8 (U+D800 hingga U+DFFF) mengembalikan karakter Unicode yang rusak seperti ���.

Setelah revisi ini, string dengan titik kode UTF-8 dikonversi dengan aman dengan JSON.stringify(), dan kembali ke aslinya menggunakan JSON.parse().

Simbol Pemisah
Pemisah baris dan simbol pemisah paragraf (\u2028 dan \u2029) sekarang diizinkan dalam literal string.

Sebelum tahun 2019, hal ini diperlakukan sebagai terminator baris dan mengakibatkan pengecualian kesalahan:

Contoh
// This is valid in ES2019:
let text = "\u2028";
Catatan
Sekarang, JavaScript dan JSON memiliki aturan yang sama.

Sebelum ES2019:

text = JSON.parse('"\u2028"') akan diurai menjadi ''.

teks = '"\u2028"' akan memberikan kesalahan sintaksis .

Fungsi toString() yang Direvisi
ES2019 merevisi metode Fungsi toString().

Metode ini toString()mengembalikan string yang mewakili kode sumber suatu fungsi.

Mulai tahun 2019, toString() harus mengembalikan kode sumber fungsi termasuk komentar, spasi, dan detail sintaksis.

Sebelum tahun 2019, berbagai peramban menampilkan varian fungsi yang berbeda-beda (seperti tanpa komentar dan spasi). Sejak tahun 2019, fungsi tersebut seharusnya ditampilkan persis seperti yang tertulis.

Contoh
function myFunction(p1, p2) {
  return p1 * p2;
}