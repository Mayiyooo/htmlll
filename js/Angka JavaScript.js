Angka JavaScript
JavaScript hanya memiliki satu jenis angka. Angka dapat ditulis dengan atau tanpa desimal.

Contoh
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

Angka ekstra besar atau ekstra kecil dapat ditulis dengan notasi ilmiah (eksponen):

Contoh
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

Angka JavaScript Selalu 64-bit Floating Point
Tidak seperti banyak bahasa pemrograman lainnya, JavaScript tidak mendefinisikan berbagai jenis angka, seperti bilangan bulat, pendek, panjang, titik mengambang, dan sebagainya.

Angka JavaScript selalu disimpan sebagai angka floating-point presisi ganda, mengikuti standar internasional IEEE 754.

Format ini menyimpan angka dalam 64 bit, dengan angka (pecahan) disimpan dalam bit 0 hingga 51, eksponen dalam bit 52 hingga 62, dan tanda dalam bit 63.

Nilai (alias Pecahan/Mantissa)	Eksponen	Tanda
52 bit (0 - 51) 	11 bit (52 - 62)	1 bit (63)
Presisi Integer
Bilangan bulat (angka tanpa titik atau notasi eksponen) akurat hingga 15 digit.

Contoh
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
Jumlah desimal maksimum adalah 17.

Presisi Mengambang
Aritmatika titik mengambang tidak selalu 100% akurat:

let x = 0.2 + 0.1;

Untuk menyelesaikan soal di atas, ada baiknya kita melakukan perkalian dan pembagian:

let x = (0.2 * 10 + 0.1 * 10) / 10;
IKLAN

Menambahkan Angka dan String
PERINGATAN !!

JavaScript menggunakan operator + untuk penambahan dan penggabungan.

Angka-angka ditambahkan. String dirangkai.

Jika Anda menambahkan dua angka, hasilnya akan menjadi angka:

Contoh
let x = 10;
let y = 20;
let z = x + y;
Jika Anda menambahkan dua string, hasilnya akan berupa penggabungan string:

Contoh
let x = "10";
let y = "20";
let z = x + y;
Jika Anda menambahkan angka dan string, hasilnya akan berupa penggabungan string:

Contoh
let x = 10;
let y = "20";
let z = x + y;
Jika Anda menambahkan string dan angka, hasilnya akan berupa penggabungan string:

Contoh
let x = "10";
let y = 20;
let z = x + y;
Kesalahan umum adalah mengharapkan hasil ini menjadi 30:

Contoh
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
Kesalahan umum adalah mengharapkan hasil ini menjadi 102030:

Contoh
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
Interpreter JavaScript bekerja dari kiri ke kanan.

10 + 20 pertama ditambahkan karena x dan y keduanya angka.

Kemudian 30 + "30" dirangkai karena z adalah string.

String Angka
String JavaScript dapat memiliki konten numerik:

let x = 100;         // x is a number

let y = "100";       // y is a string
JavaScript akan mencoba mengubah string menjadi angka dalam semua operasi numerik:

Ini akan berhasil:

let x = "100";
let y = "10";
let z = x / y;

Ini juga akan berfungsi:

let x = "100";
let y = "10";
let z = x * y;

Dan ini akan berhasil:

let x = "100";
let y = "10";
let z = x - y;

Namun ini tidak akan berhasil:

let x = "100";
let y = "10";
let z = x + y;

Dalam contoh terakhir JavaScript menggunakan operator + untuk menggabungkan string.

NaN - Bukan Angka
NaNadalah kata khusus JavaScript yang menunjukkan bahwa suatu angka bukanlah angka yang sah.

Mencoba melakukan aritmatika dengan string non-numerik akan menghasilkan NaN(Bukan Angka):

Contoh
let x = 100 / "Apple";

Namun, jika stringnya numerik, hasilnya akan berupa angka:

Contoh
let x = 100 / "10";
Anda dapat menggunakan fungsi JavaScript global isNaN() untuk mengetahui apakah suatu nilai bukan angka:

Contoh
let x = 100 / "Apple";
isNaN(x);
Hati-hati terhadap NaN. Jika Anda menggunakan NaNdalam operasi matematika, hasilnya juga akan menjadi NaN:

Contoh
let x = NaN;
let y = 5;
let z = x + y;
Atau hasilnya mungkin berupa penggabungan seperti NaN5:

Contoh
let x = NaN;
let y = "5";
let z = x + y;
NaNadalah angka: typeof NaNmengembalikan number:

Contoh
typeof NaN;
Ketakterbatasan
Infinity(atau -Infinity) adalah nilai yang akan dikembalikan JavaScript jika Anda menghitung angka di luar angka terbesar yang mungkin.

Contoh
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
Pembagian dengan 0 (nol) juga menghasilkan Infinity:

Contoh
let x =  2 / 0;
let y = -2 / 0;
Infinityadalah angka: typeof Infinitymengembalikan number.

Contoh
typeof Infinity;
Heksadesimal
JavaScript mengartikan konstanta numerik sebagai heksadesimal jika didahului oleh 0x.

Contoh
let x = 0xFF;
Jangan pernah menulis angka dengan angka nol di depan (seperti 07).
Beberapa versi JavaScript menginterpretasikan angka sebagai oktal jika ditulis dengan angka nol di depan.

Secara default, JavaScript menampilkan angka sebagai desimal basis 10 .

Tetapi Anda dapat menggunakan toString()metode ini untuk mengeluarkan angka dari basis 2 ke basis 36 .

Heksadesimal adalah basis 16. Desimal adalah basis 10. Oktal adalah basis 8. Biner adalah basis 2 .

Contoh
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);
Angka JavaScript sebagai Objek
Biasanya angka JavaScript adalah nilai primitif yang dibuat dari literal:

let x = 123;
Namun angka juga dapat didefinisikan sebagai objek dengan kata kunci new:

let y = new Number(123);
Contoh
let x = 123;
let y = new Number(123);
Jangan membuat objek Angka.

Kata newkunci memperumit kode dan memperlambat kecepatan eksekusi.

Objek Angka dapat menghasilkan hasil yang tidak terduga:

Ketika menggunakan ==operator, x dan y sama :

let x = 500;
let y = new Number(500);
Saat menggunakan ===operator, x dan y tidak sama .

let x = 500;
let y = new Number(500);
Perhatikan perbedaan antara (x==y)dan (x===y).

(x == y)benar atau salah?

let x = new Number(500);
let y = new Number(500);
(x === y)benar atau salah?

let x = new Number(500);
let y = new Number(500);