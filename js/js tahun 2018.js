ECMAScript 2018
Fitur Baru di JavaScript 2018
Bab ini memperkenalkan fitur-fitur baru di ECMAScript 2018:

Iterasi Asinkron
Janji Akhirnya
Elemen Istirahat Array
Properti Istirahat Objek
Fitur RegExp Baru
RegExp /dtk
Memori Bersama JavaScript
JavaScript 2018 didukung di semua browser modern sejak Juni 2020 :

Chrome 64	Edge 79	Firefox 78	Safari 12	Opera 51
Jan 2018	Jan 2020	Jun 2020	Sep 2018	Feb 2018
Iterasi Asinkron JavaScript
ECMAScript 2018 menambahkan iterator dan iterable asinkron.

Dengan iterabel asinkron, kita dapat menggunakan await kata kunci dalam for/ofperulangan.

Contoh
for await () {}
Iterasi asinkron JavaScript didukung di semua browser modern sejak Januari 2020:

Chrome 63	Edge 79	Firefox 57	Safari 11	Opera 50
Dec 2017	Jan 2020	Nov 2017	Sep 2017	Jan 2018
Janji JavaScript.akhirnya
ECMAScript 2018 menyelesaikan implementasi penuh objek Promise dengan Promise.finally:

Contoh
let myPromise = new Promise();

myPromise.then();
myPromise.catch();
myPromise.finally();
Promise.finallydidukung di semua browser modern sejak November 2018:

Chrome 63	Edge 18	Firefox 58	Safari 11.1	Opera 50
Dec 2017	Nov 2018	Jan 2018	Mar 2018	Jan 2018

Elemen Istirahat Array JavaScript
ECMAScript 2018 menambahkan operator sisa (...).

Operator sisanya (...) memungkinkan kita untuk menghancurkan suatu array dan mengumpulkan sisa-sisanya:


Contoh 1
let a, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, ...rest] = arr1;
Contoh 2
let a, b, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, b, ...rest] = arr1;
Properti Istirahat Objek JavaScript
ECMAScript 2018 menambahkan operator sisa (...).

Hal ini memungkinkan kita untuk menghancurkan suatu objek dan mengumpulkan sisa-sisanya ke objek baru:

Contoh
// Create an Object:
const car = {type:"Fiat", model:"500", color:"white"};

// Destructure the Object
let {type, model, color} = car;
document.getElementById("demo").innerHTML = "The car type is: " + type;
Properti objek rest didukung di semua browser modern sejak Januari 2020:

Chrome 60	Edge 79	Firefox 55	Safari 11.1	Opera 47
Jul 2017	Jan 2020	Aug 2017	Mar 2018	Aug 2017
Fitur RegExp JavaScript Baru
ECMAScript 2018 menambahkan 4 fitur RegExp baru:

Escape Properti Unicode (\p{...})
Pernyataan Lihat ke Belakang (?<= ) dan (?<! )
Grup Penangkapan Bernama
s (dotAll) Bendera
Fitur RegExp baru didukung di semua browser modern sejak Juni 2020