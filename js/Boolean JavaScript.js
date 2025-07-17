Boolean JavaScript
Tipe Data Boolean
Dalam JavaScript, Boolean adalah tipe data primitif yang hanya dapat memiliki satu dari dua nilai:

benar atau salah

Nilai Boolean dari suatu ekspresi adalah dasar untuk semua perbandingan dan kondisi JavaScript .

Karakteristik Utama Boolean
benar dan salah adalah tipe data boolean
benar dan salah adalah satu-satunya nilai boolean yang mungkin
benar dan salah harus ditulis dengan huruf kecil
benar dan salah harus ditulis tanpa tanda kutip
Kasus Penggunaan Boolean
Sangat sering, dalam pemrograman, Anda memerlukan tipe data yang dapat mewakili salah satu dari dua nilai, seperti:

ya atau tidak
aktif atau nonaktif
benar atau salah
Nilai Boolean sangat penting untuk operasi logika dan alur kontrol dalam pemrograman JavaScript.

Perbandingan
Semua operator perbandingan JavaScript (seperti ==, !=, <, >) mengembalikan nilai benar atau salah dari perbandingan.

Mengingat x = 5 , tabel di bawah ini menjelaskan perbandingannya:

Description	Example	Returns
Not equal to	(x == 8)	false
Unequal to	(x != 8)	true
Greater than	(x > 8)	false
Less than	(x < 8)	true
Contoh
let x = 5;

(x == 8); // equals false
(x != 8); // equals true
Lihat Juga:
Tutorial Perbandingan JavaScript

Kondisi
Boolean banyak digunakan dalam pernyataan if untuk menentukan blok kode yang akan dieksekusi berdasarkan logika.

Example	Result
if (day == "Monday")	true or false
if (salary > 9000)	true or false
if (age < 18)	true or false
Contoh
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
Lihat Juga:
Tutorial JavaScript Jika Lain

Lingkaran
Boolean banyak digunakan dalam perulangan untuk menentukan kondisi perulangan.

Description	Example
For loop	for (i = 0; i < 5; i++)
While loop	while (i < 10)
For in loop	for (x in person)
For of loop	for (x of cars)
Contoh
while (i < 10) {
  text += i;
  i++;
}
Lihat Juga:
Tutorial Perulangan JavaScript

Fungsi Boolean()
Anda dapat menggunakan Boolean()fungsi ini untuk mengetahui apakah suatu ekspresi (atau variabel) benar:

Contoh
Boolean(10 > 9)
Atau bahkan lebih mudah:

Contoh
(10 > 9)
IKLAN

Segala Sesuatu yang Memiliki "Nilai" adalah Benar
Contoh
100 is true

3.14 is true

-15 is true

"Hello" is true

"false" is true

(7 + 1 + 3.14) is true
Segala Sesuatu yang Tidak Memiliki "Nilai" Adalah Palsu
Nilai Boolean 0 (nol) adalah salah :

let x = 0;
Boolean(x);
Nilai Boolean -0 (minus nol) adalah salah :

let x = -0;
Boolean(x);
Nilai Boolean dari "" (string kosong) adalah false :

let x = "";
Boolean(x);
Nilai Boolean dari undefined adalah false :

let x;
Boolean(x);
Nilai Boolean dari null adalah false :

let x = null;
Boolean(x);
Nilai Boolean dari false adalah (Anda dapat menebaknya) false :

let x = false;
Boolean(x);
Nilai Boolean NaN salah :

let x = 10 / "Hallo";
Boolean(x);
Boolean JavaScript sebagai Objek
Biasanya boolean JavaScript adalah nilai primitif yang dibuat dari literal:

let x = false;
Tetapi boolean juga dapat didefinisikan sebagai objek dengan kata kunci new:

let y = new Boolean(false);
Contoh
let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object
Peringatan
Jangan membuat objek Boolean.

Kata newkunci memperumit kode dan memperlambat kecepatan eksekusi.

Objek Boolean dapat menghasilkan hasil yang tidak terduga:

Boolean dan objek boolean tidak dapat dibandingkan dengan aman:

let x = Boolean(false);
let y = new Boolean(false);

(x == Y) returns true
(y === Y) returns false
