Praktik Terbaik JavaScript
Hindari variabel global, hindari new, hindari ==, hindarieval()

Hindari Variabel Global
Minimalkan penggunaan variabel global.

Ini mencakup semua tipe data, objek, dan fungsi.

Variabel dan fungsi global dapat ditimpa oleh skrip lain.

Gunakan variabel lokal sebagai gantinya, dan pelajari cara menggunakan penutupan .

Selalu Deklarasikan Variabel Lokal
Semua variabel yang digunakan dalam suatu fungsi harus dideklarasikan sebagai variabel lokal .

Variabel lokal harus dideklarasikan dengan kata kunci var, let, atau , constjika tidak, variabel tersebut akan menjadi variabel global.

Mode ketat tidak mengizinkan variabel yang tidak dideklarasikan.

Deklarasi di Atas
Ini adalah praktik pengkodean yang baik untuk meletakkan semua deklarasi di bagian atas setiap skrip atau fungsi.

Ini akan:

Berikan kode yang lebih bersih
Menyediakan satu tempat untuk mencari variabel lokal
Memudahkan untuk menghindari variabel global yang tidak diinginkan (tersirat)
Mengurangi kemungkinan deklarasi ulang yang tidak diinginkan
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;
Hal ini juga berlaku untuk variabel loop:

for (let i = 0; i < 5; i++) {
IKLAN

Inisialisasi Variabel
Ini adalah praktik pengkodean yang baik untuk menginisialisasi variabel saat Anda mendeklarasikannya.

Ini akan:

Berikan kode yang lebih bersih
Menyediakan satu tempat untuk menginisialisasi variabel
Hindari nilai yang tidak terdefinisi
// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0,
const myArray = [];
const myObject = {};
Inisialisasi variabel memberikan gambaran tentang penggunaan yang dituju (dan tipe data yang dituju).

Mendeklarasikan Objek dengan const
Mendeklarasikan objek dengan const akan mencegah perubahan tipe yang tidak disengaja:

Contoh
let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string

const car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Not possible
Mendeklarasikan Array dengan const
Mendeklarasikan array dengan const akan mencegah perubahan tipe yang tidak disengaja:

Contoh
let cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Changes array to number

const cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Not possible
Jangan Gunakan new Object()
Gunakan ""sebagai penggantinew String()
Gunakan 0sebagai penggantinew Number()
Gunakan falsesebagai penggantinew Boolean()
Gunakan {}sebagai penggantinew Object()
Gunakan []sebagai penggantinew Array()
Gunakan /()/sebagai penggantinew RegExp()
Gunakan function (){}sebagai penggantinew Function()
Contoh
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object
Waspadai Konversi Tipe Otomatis
JavaScript diketik secara longgar.

Suatu variabel dapat berisi semua tipe data.

Suatu variabel dapat mengubah tipe datanya:

Contoh
let x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number
Hati-hati, angka dapat secara tidak sengaja diubah menjadi string atau NaN(Bukan Angka).

Saat melakukan operasi matematika, JavaScript dapat mengubah angka menjadi string:

Contoh
let x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
let x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
let x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
let x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
let x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
let x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
let x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number
Mengurangi string dari string, tidak menghasilkan kesalahan tetapi mengembalikan NaN(Bukan Angka):

Contoh
"Hello" - "Dolly"    // returns NaN
Gunakan === Perbandingan
Operator ==perbandingan selalu mengonversi (ke tipe yang cocok) sebelum perbandingan.

Operator ===memaksa perbandingan nilai dan jenis:

Contoh
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false
Gunakan Parameter Default
Jika suatu fungsi dipanggil dengan argumen yang hilang, nilai argumen yang hilang tersebut ditetapkan ke undefined.

Nilai yang tidak terdefinisi dapat merusak kode Anda. Menetapkan nilai default pada argumen merupakan kebiasaan yang baik.

Contoh
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
ECMAScript 2015 memperbolehkan parameter default dalam definisi fungsi:

function (a=1, b=1) { /*function code*/ }
Baca lebih lanjut tentang parameter fungsi dan argumen di Parameter Fungsi

Akhiri Peralihan Anda dengan Default
Selalu akhiri switchpernyataan Anda dengan default. Meskipun menurut Anda itu tidak perlu.

Contoh
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}
Hindari Angka, String, dan Boolean sebagai Objek
Selalu perlakukan angka, string, atau boolean sebagai nilai primitif. Bukan sebagai objek.

Mendeklarasikan tipe ini sebagai objek, memperlambat kecepatan eksekusi, dan menghasilkan efek samping yang buruk:

Contoh
let x = "John";             
let y = new String("John");
(x === y) // is false because x is a string and y is an object.
Atau bahkan lebih buruk:

Contoh
let x = new String("John");             
let y = new String("John");
(x == y) // is false because you cannot compare objects.