
"use strict";Menentukan bahwa kode JavaScript harus dieksekusi dalam "mode ketat".

Direktif "penggunaan ketat"
Direktif ini "use strict"baru dalam ECMAScript versi 5.

Itu bukan pernyataan, tetapi ekspresi literal, diabaikan oleh versi JavaScript sebelumnya.

Tujuannya "use strict"adalah untuk menunjukkan bahwa kode harus dieksekusi dalam "mode ketat".

Dengan mode ketat, Anda tidak dapat, misalnya, menggunakan variabel yang tidak dideklarasikan.

Semua browser modern mendukung "use strict" kecuali Internet Explorer 9 dan yang lebih lama:

Directive					
"use strict"	13.0	10.0	4.0	6.0	12.1
Angka dalam tabel menunjukkan versi browser pertama yang sepenuhnya mendukung arahan tersebut.

Anda dapat menggunakan mode ketat di semua program Anda. Ini membantu Anda menulis kode yang lebih bersih, misalnya mencegah penggunaan variabel yang tidak dideklarasikan.

"use strict"hanyalah sebuah string, jadi IE 9 tidak akan menampilkan kesalahan meskipun tidak memahaminya.

Mendeklarasikan Mode Ketat
Mode ketat dideklarasikan dengan menambahkan "use strict"; di awal skrip atau fungsi.

Dideklarasikan di awal skrip, ia memiliki cakupan global (semua kode dalam skrip akan dieksekusi dalam mode ketat):

Contoh
"use strict";
x = 3.14;       // This will cause an error because x is not declared
Contoh
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}
Dideklarasikan di dalam suatu fungsi, ia memiliki cakupan lokal (hanya kode di dalam fungsi yang berada dalam mode ketat):

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

"Gunakan yang ketat"; Sintaks
Sintaksnya, untuk mendeklarasikan mode ketat, dirancang agar kompatibel dengan versi JavaScript yang lebih lama.

Mengompilasi literal numerik (4 + 5;) atau literal string ("John Doe";) dalam program JavaScript tidak memiliki efek samping. Program hanya akan mengompilasi ke variabel yang tidak ada dan mati.

Jadi "use strict";hanya masalah bagi penyusun baru yang "mengerti" artinya.

Mengapa Mode Ketat?
Mode ketat memudahkan penulisan JavaScript yang "aman".

Mode ketat mengubah "sintaksis buruk" yang sebelumnya diterima menjadi kesalahan nyata.

Sebagai contoh, dalam JavaScript normal, salah ketik nama variabel akan menciptakan variabel global baru. Dalam mode ketat, hal ini akan menghasilkan kesalahan, sehingga mustahil untuk membuat variabel global secara tidak sengaja.

Dalam JavaScript normal, pengembang tidak akan menerima umpan balik kesalahan saat menetapkan nilai ke properti yang tidak dapat ditulis.

Dalam modus ketat, penugasan apa pun ke properti yang tidak bisa ditulis, properti khusus pengambil, properti yang tidak ada, variabel yang tidak ada, atau objek yang tidak ada, akan memunculkan kesalahan.

Tidak Diizinkan dalam Mode Ketat
Menggunakan variabel tanpa mendeklarasikannya tidak diperbolehkan:

"use strict";
x = 3.14;                // This will cause an error

Objek juga merupakan variabel.

Menggunakan suatu objek, tanpa mendeklarasikannya, tidak diperbolehkan:

"use strict";
x = {p1:10, p2:20};      // This will cause an error

Menghapus variabel (atau objek) tidak diperbolehkan.

"use strict";
let x = 3.14;
delete x;                // This will cause an error

Menghapus fungsi tidak diizinkan.

"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 

Menduplikasi nama parameter tidak diizinkan:

"use strict";
function x(p1, p1) {};   // This will cause an error

Literal numerik oktal tidak diizinkan:

"use strict";
let x = 010;             // This will cause an error

Karakter escape oktal tidak diperbolehkan:

"use strict";
let x = "\010";            // This will cause an error

Menulis ke properti baca-saja tidak diizinkan:

"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

Menulis ke properti get-only tidak diperbolehkan:

"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error

Menghapus properti yang tidak dapat dihapus tidak diperbolehkan:

"use strict";
delete Object.prototype; // This will cause an error

Kata tersebut evaltidak dapat digunakan sebagai variabel:

"use strict";
let eval = 3.14;         // This will cause an error

Kata tersebut argumentstidak dapat digunakan sebagai variabel:

"use strict";
let arguments = 3.14;    // This will cause an error

Pernyataan withtidak diperbolehkan:

"use strict";
with (Math){x = cos(2)}; // This will cause an error

Demi alasan keamanan, eval()tidak diperbolehkan membuat variabel dalam cakupan tempat variabel tersebut dipanggil.

Dalam mode ketat, suatu variabel tidak dapat digunakan sebelum dideklarasikan:

"use strict";
eval ("x = 2");
alert (x);      // This will cause an error

Dalam mode ketat, eval() tidak dapat mendeklarasikan variabel menggunakan kata kunci var:

"use strict";
eval ("var x = 2");
alert (x);    // This will cause an error

eval() tidak dapat mendeklarasikan variabel menggunakan kata kunci let:

eval ("let x = 2");
alert (x);        // This will cause an error

Kata thiskunci dalam fungsi berperilaku berbeda dalam mode ketat.

Kata thiskunci merujuk pada objek yang memanggil fungsi.

Jika objek tidak ditentukan, fungsi dalam mode ketat akan mengembalikan undefineddan fungsi dalam mode normal akan mengembalikan objek global (jendela):

"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

Bukti Masa Depan!
Kata kunci yang dicadangkan untuk versi JavaScript mendatang TIDAK DAPAT digunakan sebagai nama variabel dalam mode ketat.

Ini adalah:

mengimplementasikan
antarmuka
membiarkan
kemasan
pribadi
terlindung
publik
statis
menghasilkan
"use strict";
let public = 1500;      // This will cause an error