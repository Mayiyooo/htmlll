JavaScript BigInt
Variabel JavaScript BigIntdigunakan untuk menyimpan nilai integer besar yang terlalu besar untuk direpresentasikan oleh JavaScript normal Number.

Akurasi Integer JavaScript
Bilangan bulat JavaScript hanya akurat hingga 15 digit:

Presisi Integer
let x = 999999999999999;
let y = 9999999999999999;
Dalam JavaScript, semua angka disimpan dalam format floating-point 64-bit (standar IEEE 754).

Dengan standar ini, bilangan bulat besar tidak dapat direpresentasikan secara tepat dan akan dibulatkan.

Oleh karena itu, JavaScript hanya dapat merepresentasikan bilangan bulat dengan aman:

Hingga 9007199254740991 +(2 53 -1)

Dan

Turun ke -9007199254740991 -(2 53 -1).

Nilai integer di luar rentang ini kehilangan presisi.

Cara Membuat BigInt
Untuk membuat BigInt, tambahkan n di akhir bilangan bulat atau panggil BigInt():

Contoh
let x = 9999999999999999;
let y = 9999999999999999n;
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
BigInt: Tipe Data JavaScript baru
JavaScript typeofa BigIntadalah "bigint":

Contoh
let x = BigInt(999999999999999);
let type = typeof x;
BigIntadalah tipe data numerik kedua dalam JavaScript (setelah Number).

Dengan BigIntjumlah total tipe data yang didukung dalam JavaScript adalah 8:

1. String
2. Angka
3. Bigint
4. Boolean
5. Tidak Terdefinisi
6. Null
7. Simbol
8. Objek

Operator BigInt
Operator yang dapat digunakan pada JavaScript Number juga dapat digunakan pada BigInt.

Contoh Perkalian BigInt
let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;
Catatan
Aritmatika antara a BigInt dan a Numbertidak diizinkan (konversi tipe kehilangan informasi).

Pergeseran kanan yang tidak bertanda (>>>) tidak dapat dilakukan pada BigInt (tidak memiliki lebar tetap).

Desimal BigInt
A BigInttidak dapat memiliki desimal.

Contoh Pembagian BigInt
let x = 5n;
let y = x / 2;
// Error: Cannot mix BigInt and other types, use explicit conversion.
let x = 5n;
let y = Number(x) / 2;
BigInt Hex, Oktal dan Biner
BigIntjuga dapat ditulis dalam notasi heksadesimal, oktal, atau biner:

Contoh Heksadesimal BigInt
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
Keingintahuan Presisi
Pembulatan dapat membahayakan keamanan program:

Contoh MAX_SAFE_INTEGER
9007199254740992 === 9007199254740993; // is true !!!
Dukungan Peramban
BigIntdidukung di semua browser sejak September 2020:

Chrome 67	Edge 79	Firefox 68	Safari 14	Opera 54
May 2018	Jan 2020	Jul 2019	Sep 2020	Jun 2018

Bilangan Bulat Aman Minimum dan Maksimum
ES6 menambahkan properti max dan min ke objek Number:

MAX_SAFE_INTEGER
MIN_SAFE_INTEGER
Contoh MAX_SAFE_INTEGER
let x = Number.MAX_SAFE_INTEGER;
Contoh MIN_SAFE_INTEGER
let x = Number.MIN_SAFE_INTEGER;
Metode Angka Baru
ES6 juga menambahkan 2 metode baru ke objek Number:

Number.isInteger()
Number.isSafeInteger()
Metode Number.isInteger()
Metode ini Number.isInteger()mengembalikan nilai truejika argumennya adalah bilangan bulat.

Contoh: isInteger()
Number.isInteger(10);
Number.isInteger(10.5);
Metode Number.isSafeInteger()
Bilangan bulat yang aman adalah bilangan bulat yang dapat direpresentasikan secara tepat sebagai angka presisi ganda.

Metode ini Number.isSafeInteger()mengembalikan truejika argumennya adalah bilangan bulat yang aman.

Contoh isSafeInteger()
Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);
