ECMAScript 2016
Fitur Baru di JavaScript 2016
Bab ini memperkenalkan fitur-fitur baru di ECMAScript 2016:

Eksponensial JavaScript (**)
Penugasan Eksponensial JavaScript (**=)
Array JavaScript termasuk()
Dukungan Peramban
JavaScript 2016 didukung di semua browser modern sejak Maret 2017 :

Chrome 52	Edge 15	Firefox 52	Safari 10.1	Opera 39
Jul 2016	Apr 2017	Mar 2017	May 2017	Aug 2016
ES 2016 tidak didukung di Internet Explorer.

Operator Eksponensial
Operator eksponensial ( **) menaikkan operan pertama ke pangkat operan kedua.

Contoh
let x = 5;
let z = x ** 2;
x ** ymenghasilkan hasil yang sama seperti Math.pow(x, y):

Contoh
let x = 5;
let z = Math.pow(x,2);
Tugas Eksponen
Operator penugasan eksponensial ( **=) menaikkan nilai variabel ke pangkat operan sebelah kanan.
Contoh
let x = 5;
x **= 2;
IKLAN

Array JavaScript termasuk()
ECMAScript 2016 diperkenalkan Array.includeske array.

Hal ini memungkinkan kita untuk memeriksa apakah suatu elemen hadir dalam suatu array:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango");