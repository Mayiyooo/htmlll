Metode Angka JavaScript
Metode Dasar
Metode bilangan dasar dapat digunakan pada bilangan apa pun :

toString()
toExponential()
toFixed()
toPrecision()
nilaiOf()
Metode Statis
Metode statis hanya dapat digunakan pada Number :

Nomor.Terbatas()
Nomor.adalahInteger()
Nomor.adalahNan()
Nomor.adalahIntegerAman()
Nomor.parseInt()
Nomor.parseFloat()
Lihat Juga:
Tutorial Angka
Properti Angka
Referensi Angka
Metode toString()
Metode ini toString()mengembalikan angka sebagai string.

Semua metode angka dapat digunakan pada semua jenis angka (literal, variabel, atau ekspresi):

Contoh
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
Metode ini toString()dapat mengambil argumen radix opsional untuk mengonversi angka ke basis yang berbeda:

Contoh
let x = 123;

let text = x.toString(2);
Metode toExponential()
toExponential()mengembalikan string, dengan angka yang dibulatkan dan ditulis menggunakan notasi eksponensial.

Parameter menentukan jumlah karakter di belakang titik desimal:

Contoh
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);
Parameter ini opsional. Jika Anda tidak menentukannya, JavaScript tidak akan membulatkan angka.

IKLAN

Metode toFixed()
toFixed()mengembalikan string, dengan angka yang ditulis dengan jumlah desimal tertentu:

Contoh
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);
toFixed(2)sangat cocok untuk bekerja dengan uang.

Metode toPrecision()
toPrecision()mengembalikan string, dengan angka yang ditulis dengan panjang tertentu:

Contoh
let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);
Metode valueOf()
valueOf()mengembalikan angka sebagai angka.

Contoh
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();
Dalam JavaScript, angka dapat berupa nilai primitif (typeof = angka) atau objek (typeof = objek).

Metode ini valueOf()digunakan secara internal dalam JavaScript untuk mengubah objek Angka menjadi nilai primitif.

Tidak ada alasan untuk menggunakannya dalam kode Anda.

Semua tipe data JavaScript memiliki metode a valueOf()dan a .toString()

Mengonversi Variabel ke Angka
Ada 3 metode JavaScript yang dapat digunakan untuk mengubah variabel menjadi angka:

Metode	Keterangan
Nomor()	Mengembalikan angka yang dikonversi dari argumennya.
parseFloat()	Mengurai argumennya dan mengembalikan angka floating point
parseInt()	Mengurai argumennya dan mengembalikan bilangan bulat
Metode-metode di atas bukanlah metode angka . Metode-metode tersebut merupakan metode JavaScript global .

Metode Number()
Metode ini Number()dapat digunakan untuk mengubah variabel JavaScript menjadi angka:

Contoh
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
Jika angka tidak dapat dikonversi, NaN(Bukan Angka) dikembalikan.

Metode Number() yang Digunakan pada Tanggal
Number()juga dapat mengubah tanggal menjadi angka.

Contoh
Number(new Date("1970-01-01"))
Catatan
Metode ini Date()mengembalikan jumlah milidetik sejak 1.1.1970.

Jumlah milidetik antara 1970-01-02 dan 1970-01-01 adalah 86400000:

Contoh
Number(new Date("1970-01-02"))
Contoh
Number(new Date("2017-09-30"))
Metode parseInt()
parseInt()mengurai string dan mengembalikan bilangan bulat. Spasi diperbolehkan. Hanya angka pertama yang dikembalikan:

Contoh
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
Jika angka tidak dapat dikonversi, NaN(Bukan Angka) dikembalikan.

Metode parseFloat()
parseFloat()mengurai string dan mengembalikan angka. Spasi diperbolehkan. Hanya angka pertama yang dikembalikan:

Contoh
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");
Jika angka tidak dapat dikonversi, NaN(Bukan Angka) dikembalikan.

Metode Objek Angka
Metode objek ini milik objek Number :

Metode	Keterangan
Nomor.adalahInteger()	Mengembalikan true jika argumennya adalah integer
Nomor.isNaN()	Mengembalikan true jika argumennya adalah NaN
Number.isFinite()	Mengembalikan true jika argumennya bukan Infinity atau NaN
Nomor.isSafeInteger()	Mengembalikan true jika argumennya adalah integer yang aman
Nomor.parseFloat()	Mengonversi string menjadi angka
Nomor.parseInt()	Mengonversi string menjadi bilangan bulat
Metode Angka Tidak Dapat Digunakan pada Variabel
Metode angka di atas termasuk dalam Objek Angka JavaScript .

Metode ini hanya dapat diakses seperti Number.isInteger().

Menggunakan X.isInteger() di mana X adalah variabel, akan menghasilkan kesalahan:

TypeError X.isInteger is not a function.

Metode Number.isInteger()
Metode ini Number.isInteger()mengembalikan nilai truejika argumennya adalah bilangan bulat.

Contoh
Number.isInteger(10);
Number.isInteger(10.5);
Metode Number.isFinite()
Metode ini Number.isFinite()kembali true jika argumennya bukan Infinity, -iInfinity, atau Nan.

Contoh
Number.isFinite(123);
Metode Number.isNaN()
Metode ini Number.isNaN()mengembalikan true jika argumennya adalah NaN (Bukan Angka).

Contoh
Number.isNaN(123);
Catatan
Number.isNaN()adalah cara yang disarankan untuk memeriksa kesamaan dengan NaN. Anda tidak dapat menguji kesamaan dengan NaN menggunakan == atau ===.

Metode Number.isSafeInteger()
Bilangan bulat yang aman adalah bilangan bulat yang dapat direpresentasikan secara tepat sebagai angka presisi ganda.

Metode ini Number.isSafeInteger()mengembalikan truejika argumennya adalah bilangan bulat yang aman.

Contoh
Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);
Bilangan bulat aman adalah semua bilangan bulat dari -(2,53 - 1) hingga +(2,53 - 1).
Bilangan ini aman: 9007199254740991. Bilangan ini tidak aman: 9007199254740992.

Metode Number.parseFloat()
Number.parseFloat()mengurai string dan mengembalikan angka.

Spasi diperbolehkan. Hanya angka pertama yang dikembalikan:

Contoh
Number.parseFloat("10");
Number.parseFloat("10.33");
Number.parseFloat("10 20 30");
Number.parseFloat("10 years");
Number.parseFloat("years 10");
Jika angka tidak dapat dikonversi, NaN(Bukan Angka) dikembalikan.

Catatan
Metode Angka dan sama dengan metode GlobalNumber.parseInt() dan .Number.parseFloat()



parseInt()parseFloat()

Tujuannya adalah modularisasi global (agar lebih mudah menggunakan kode JavaScript yang sama di luar browser).

Metode Number.parseInt()
Number.parseInt()mengurai string dan mengembalikan bilangan bulat.

Spasi diperbolehkan. Hanya angka pertama yang dikembalikan:

Contoh
Number.parseInt("-10");
Number.parseInt("-10.33");
Number.parseInt("10");
Number.parseInt("10.33");
Number.parseInt("10 20 30");
Number.parseInt("10 years");
Number.parseInt("years 10");