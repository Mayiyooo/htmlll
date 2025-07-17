ECMAScript 2022
Fitur Baru di JavaScript 2022
Array di()
String di()
RegExp /d
Objek.hasOwn()
kesalahan.penyebab
menunggu impor
Deklarasi bidang kelas
Metode dan bidang pribadi
Array JavaScript di()
ES2022 memperkenalkan metode array at():

Contoh
Dapatkan elemen ketiga dari buah:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
Dapatkan elemen ketiga dari buah:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];
Metode ini at()mengembalikan elemen yang diindeks dari suatu array.

Metode ini at()mengembalikan hal yang sama seperti [].

Metode ini at()didukung di semua browser modern sejak Maret 2022:

Chrome 92	Edge 92	Firefox 90	Safari 15.4	Opera 78
Apr 2021	Jul 2021	Jul 2021	Mar 2022	Aug 2021
Catatan
Banyak bahasa yang memungkinkan negative bracket indexingseperti [-1] untuk mengakses elemen dari akhir suatu objek/array/string.

Hal ini tidak dimungkinkan dalam JavaScript, karena [] digunakan untuk mengakses array dan objek. obj[-1] merujuk ke nilai kunci -1, bukan ke properti terakhir objek.

Metode ini at()diperkenalkan dalam ES2022 untuk memecahkan masalah ini.

String JavaScript di()
ES2022 memperkenalkan metode string at():

Contoh
Dapatkan huruf ketiga dari nama:

const name = "W3Schools";
let letter = name.at(2);
Dapatkan huruf ketiga dari nama:

const name = "W3Schools";
let letter = name[2];
Metode ini at()mengembalikan elemen terindeks dari sebuah string.

Metode ini at()mengembalikan hal yang sama seperti [].

Metode ini at()didukung di semua browser modern sejak Maret 2022:

Chrome 92	Edge 92	Firefox 90	Safari 15.4	Opera 78
Apr 2021	Jul 2021	Jul 2021	Mar 2022	Aug 2021
Pengubah RegExp d
ES2022 menambahkan pengubah /d untuk menyatakan awal dan akhir pencocokan.

Contoh
let text = "aaaabb";
let result = text.match(/(aa)(bb)/d);
Pengubah RegExp digunakan untuk menentukan penelusuran yang tidak peka huruf besar-kecil, dan penelusuran global lainnya:

Modifier	Description	Try it
i	Perform case-insensitive matching	
g	Perform a global match (find all)	
m	Perform multiline matching	
d	Perform substring matches (New in ES2022)	
Objek memiliki milik sendiri
ES2022 menyediakan cara yang aman untuk memeriksa apakah suatu properti merupakan properti milik suatu objek.

Object.hasOwn()mirip dengan Object.prototype.hasOwnPropertytetapi mendukung semua jenis objek.

Contoh
Object.hasOwn(myObject, age)
Penyebab Kesalahan
ES2022 memungkinkan Anda menentukan alasan di balik kesalahan dengan error.cause.

Contoh
try { connectData(); } catch (err) { throw new Error("Connecting failed.", { cause: err }); }
IKLAN

JavaScript menunggu impor
Modul JavasSript sekarang dapat menunggu sumber daya yang memerlukan impor sebelum dijalankan:

import {myData} from './myData.js';

const data = await myData();
Deklarasi Bidang Kelas JavaScript
class Hello {
  counter = 0; // Class field
}
const myClass = new Hello();

let x = myClass.counter;
Deklarasi Bidang Kelas didukung di semua browser modern sejak April 2021:

Chrome 72	Edge 79	Firefox 69	Safari 14.1	Opera 60
Jan 2019	Jan 2020	Sep 2019	Apr 2021	Jan 2020
Metode dan Bidang Pribadi JavaScript
class Hello {
  #counter = 0;  // Private field
  #myMethod() {} // Private method
}
const myClass = new Hello();

let x = myClass.#counter; // Error
myClass.#myMethod();      // Error