Tipe Data JavaScript
JavaScript memiliki 8 Tipe Data
String
Nomor
Bigint
Boolean
Tidak Terdefinisi
Null
Simbol
Objek

Tipe Data Objek
Tipe data objek dapat berisi objek bawaan dan objek yang ditentukan pengguna :

Tipe objek bawaan dapat berupa:

objek, array, tanggal, peta, set, intarray, floatarray, promise, dan masih banyak lagi.

Contoh
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
Catatan
Variabel JavaScript dapat menampung tipe data apa pun.

Konsep Tipe Data
Dalam pemrograman, tipe data merupakan konsep penting.

Untuk dapat mengoperasikan variabel, penting untuk mengetahui sesuatu tentang tipenya.

Tanpa tipe data, komputer tidak dapat menyelesaikan hal ini dengan aman:

let x = 16 + "Volvo";
Apakah masuk akal menambahkan "Volvo" ke angka enam belas? Apakah akan menghasilkan kesalahan atau malah menghasilkan hasil?

JavaScript akan memperlakukan contoh di atas sebagai:

let x = "16" + "Volvo";
Catatan
Saat menambahkan angka dan string, JavaScript akan memperlakukan angka tersebut sebagai string.

Contoh
let x = 16 + "Volvo";
Contoh
let x = "Volvo" + 16;
JavaScript mengevaluasi ekspresi dari kiri ke kanan. Urutan yang berbeda dapat menghasilkan hasil yang berbeda:

JavaScript:
let x = 16 + 4 + "Volvo";
Hasil:

20Volvo
JavaScript:
let x = "Volvo" + 16 + 4;
Hasil:

Volvo164
Dalam contoh pertama, JavaScript memperlakukan 16 dan 4 sebagai angka, hingga mencapai "Volvo".

Pada contoh kedua, karena operan pertama adalah string, semua operan diperlakukan sebagai string.

IKLAN

Tipe JavaScript bersifat Dinamis
JavaScript memiliki tipe dinamis. Artinya, variabel yang sama dapat digunakan untuk menyimpan tipe data yang berbeda:

Contoh
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
String JavaScript
String (atau string teks) adalah serangkaian karakter seperti "John Doe".

String ditulis dengan tanda kutip. Anda dapat menggunakan tanda kutip tunggal atau ganda:

Contoh
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';
Anda dapat menggunakan tanda kutip di dalam string, selama tanda kutip tersebut tidak cocok dengan tanda kutip yang ada di sekitar string tersebut:

Contoh
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
Anda akan mempelajari lebih lanjut tentang string pada tutorial ini nanti.

Angka JavaScript
Semua angka JavaScript disimpan sebagai angka desimal (titik mengambang).

Angka dapat ditulis dengan atau tanpa desimal:

Contoh
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;
Notasi Eksponensial
Angka ekstra besar atau ekstra kecil dapat ditulis dengan notasi ilmiah (eksponensial):

Contoh
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
Catatan
Sebagian besar bahasa pemrograman memiliki banyak jenis angka:

Bilangan bulat (integer):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Angka riil (floating-point):
float (32-bit), double (64-bit).

Angka Javascript selalu satu jenis:
ganda (titik mengambang 64-bit).

Anda akan mempelajari lebih lanjut tentang angka dalam tutorial ini nanti.

JavaScript BigInt
Semua angka JavaScript disimpan dalam format floating-point 64-bit.

JavaScript BigInt adalah tipe data baru ( ES2020 ) yang dapat digunakan untuk menyimpan nilai integer yang terlalu besar untuk direpresentasikan oleh Angka JavaScript normal.

Contoh
let x = BigInt("123456789012345678901234567890");
Anda akan mempelajari lebih lanjut tentang BigInt nanti dalam tutorial ini.

Boolean JavaScript
Boolean hanya dapat memiliki dua nilai: trueatau false.

Contoh
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
Boolean sering digunakan dalam pengujian bersyarat.

Anda akan mempelajari lebih lanjut tentang boolean nanti dalam tutorial ini.

Array JavaScript
Array JavaScript ditulis dengan tanda kurung siku.

Item array dipisahkan dengan koma.

Kode berikut mendeklarasikan (membuat) sebuah array bernama cars, berisi tiga item (nama mobil):

Contoh
const cars = ["Saab", "Volvo", "BMW"];
Indeks array berbasis nol, yang berarti item pertama adalah [0], kedua adalah [1], dan seterusnya.

Anda akan mempelajari lebih lanjut tentang array pada tutorial ini nanti.

Objek JavaScript
Objek JavaScript ditulis dengan kurung kurawal {}.

Properti objek ditulis sebagai pasangan nama:nilai, dipisahkan dengan koma.

Contoh
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Objek (orang) dalam contoh di atas memiliki 4 properti: firstName, lastName, age, dan eyeColor.

Anda akan mempelajari lebih lanjut tentang objek pada tutorial ini nanti.

Jenis Operator
Anda dapat menggunakan operator JavaScript typeofuntuk menemukan jenis variabel JavaScript.

Operator typeofmengembalikan tipe variabel atau ekspresi:

Contoh
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
Contoh
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
Anda akan mempelajari lebih lanjut tentang typeof nanti dalam tutorial ini.

Belum diartikan
Dalam JavaScript, variabel tanpa nilai memiliki nilai undefined. Tipenya juga undefined.

Contoh
let car;    // Value is undefined, type is undefined
Variabel apa pun dapat dikosongkan dengan menetapkan nilainya ke undefined. Tipenya juga akan menjadi undefined.

Contoh
car = undefined;    // Value is undefined, type is undefined
Nilai Kosong
Nilai kosong tidak ada hubungannya dengan undefined.

Suatu string kosong memiliki nilai legal dan tipe.

Contoh
let car = "";    // The value is "", the typeof is "string"