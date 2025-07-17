Aritmatika JavaScript
Operator Aritmatika JavaScript
Operator aritmatika melakukan aritmatika pada angka (literal atau variabel).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
Operasi Aritmatika
Operasi aritmatika umum beroperasi pada dua angka.

Kedua angka tersebut dapat berupa literal:

Contoh
let x = 100 + 50;
atau variabel:

Contoh
let x = a + b;
atau ekspresi:

Contoh
let x = (100 + 50) * a;
Operator dan Operand
Angka-angka (dalam operasi aritmatika) disebut operan .

Operasi (yang akan dilakukan antara dua operan) didefinisikan oleh operator .

Operan	Operator	Operan
100	+	50
ADVERTISEMENT

Menambahkan
Operator penjumlahan ( +) menambahkan angka:

Contoh
let x = 5;
let y = 2;
let z = x + y;
Pengurangan
Operator pengurangan ( -) mengurangi angka.

Contoh
let x = 5;
let y = 2;
let z = x - y;
Mengalikan
Operator perkalian ( *) mengalikan angka.

Contoh
let x = 5;
let y = 2;
let z = x * y;
Pemisah
Operator pembagian ( /) membagi angka.

Contoh
let x = 5;
let y = 2;
let z = x / y;
Sisa
Operator modulus ( )% mengembalikan sisa pembagian.

Contoh
let x = 5;
let y = 2;
let z = x % y;
Dalam aritmatika, pembagian dua bilangan bulat menghasilkan hasil bagi dan sisa .

Dalam matematika, hasil operasi modulo adalah sisa pembagian aritmatika.

Peningkatan
Operator penambahan ( ++) menambah angka.

Contoh
let x = 5;
x++;
let z = x;
Penurunan
Operator penurunan ( ) mengurangi angka .--

Contoh
let x = 5;
x--;
let z = x;
Eksponensiasi
Operator eksponensial ( **) menaikkan operan pertama ke pangkat operan kedua.

Contoh
let x = 5;
let z = x ** 2;
x ** y menghasilkan hasil yang sama seperti Math.pow(x,y):

Contoh
let x = 5;
let z = Math.pow(x,2);
Prioritas Operator
Prioritas operator menggambarkan urutan pelaksanaan operasi dalam ekspresi aritmatika.

Contoh
let x = 100 + 50 * 3;
Apakah hasil contoh di atas sama dengan 150 * 3, atau sama dengan 100 + 150?

Apakah penjumlahan atau perkalian yang dilakukan terlebih dahulu?

Seperti dalam matematika sekolah tradisional, perkalian dilakukan terlebih dahulu.

Perkalian ( *) dan pembagian ( /) mempunyai prioritas lebih tinggi daripada penjumlahan ( +) dan pengurangan ( -).

Dan (seperti dalam matematika sekolah) prioritas dapat diubah dengan menggunakan tanda kurung.

Saat menggunakan tanda kurung, operasi di dalam tanda kurung dihitung terlebih dahulu:

Contoh
let x = (100 + 50) * 3;
Jika banyak operasi memiliki prioritas yang sama (seperti penjumlahan dan pengurangan atau perkalian dan pembagian), operasi tersebut dihitung dari kiri ke kanan:

Contoh
let x = 100 + 50 - 3;
let x = 100 / 50 * 3;