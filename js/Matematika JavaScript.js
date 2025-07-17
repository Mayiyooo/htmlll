Objek Matematika JavaScript
Objek Matematika
Objek JavaScript Math memungkinkan Anda melakukan tugas matematika.

Objek Matematika bersifat statis.

Semua metode dan properti dapat digunakan tanpa membuat objek Math terlebih dahulu.

Math.PI;
Properti Matematika (Konstanta)
Sintaks untuk setiap properti Matematika adalah : .Math.property

JavaScript menyediakan 8 konstanta matematika yang dapat diakses sebagai properti Matematika:

Contoh
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
Metode Matematika
Sintaks untuk metode Math any adalah:Math.method(number)

Angka ke Integer
Ada 4 metode umum untuk membulatkan angka menjadi bilangan bulat:

Matematika.bulat(x)	Mengembalikan x dibulatkan ke bilangan bulat terdekat
Matematika.ceil(x)	Mengembalikan x dibulatkan ke bilangan bulat terdekat
Matematika.lantai(x)	Mengembalikan x dibulatkan ke bawah ke bilangan bulat terdekat
Matematika.trunc(x)	Mengembalikan bagian integer dari x ( baru di ES6 )
Matematika.bulat()
Math.round(x)mengembalikan bilangan bulat terdekat:

Contoh
Math.round(4.6);
Math.round(4.5);
Math.round(4.4);
Matematika.ceil()
Math.ceil(x)mengembalikan nilai x yang dibulatkan ke bilangan bulat terdekat:

Contoh
Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);
Math.floor()
Math.floor(x)mengembalikan nilai x yang dibulatkan ke bawah ke bilangan bulat terdekat:

Contoh
Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);
Math.trunc()
Math.trunc(x)mengembalikan bagian integer dari x:

Contoh
Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);
Matematika.tanda()
Math.sign(x)kembali jika x negatif, nol atau positif.

Jika x positif maka hasilnya 1
Jika x negatif maka akan menghasilkan -1
Jika x adalah nol, maka hasilnya adalah 0
Contoh
Math.sign(-4);
Math.sign(0);
Math.sign(4);
Catatan
Math.trunc() dan Math.sign() ditambahkan ke JavaScript 2015 - ES6 .


Matematika.pow()
Math.pow(x, y)mengembalikan nilai x ke pangkat y:

Contoh
Math.pow(8, 2);
Matematika.akar()
Math.sqrt(x)mengembalikan akar kuadrat dari x:

Contoh
Math.sqrt(64);
Matematika.abs()
Math.abs(x)mengembalikan nilai absolut (positif) dari x:

Contoh
Math.abs(-4.7);
Matematika.sin()
Math.sin(x)mengembalikan sinus (nilai antara -1 dan 1) dari sudut x (diberikan dalam radian).

Jika Anda ingin menggunakan derajat alih-alih radian, Anda harus mengubah derajat ke radian:

Sudut dalam radian = Sudut dalam derajat x PI / 180.

Contoh
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Matematika.cos()
Math.cos(x)mengembalikan kosinus (nilai antara -1 dan 1) dari sudut x (diberikan dalam radian).

Jika Anda ingin menggunakan derajat alih-alih radian, Anda harus mengubah derajat ke radian:

Sudut dalam radian = Sudut dalam derajat x PI / 180.

Contoh
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.min() dan Math.max()
Math.min()dan Math.max()dapat digunakan untuk menemukan nilai terendah atau tertinggi dalam daftar argumen:

Contoh
Math.min(0, 150, 30, 20, -8, -200);
Contoh
Math.max(0, 150, 30, 20, -8, -200);
Matematika.acak()
Math.random()mengembalikan angka acak antara 0 (inklusif) dan 1 (eksklusif):

Contoh
Math.random();
Anda akan mempelajari lebih lanjut Math.random()di bab berikutnya dari tutorial ini.

Metode Math.log()
Math.log(x)mengembalikan logaritma natural dari x.

Logaritma natural mengembalikan waktu yang dibutuhkan untuk mencapai tingkat pertumbuhan tertentu:

Contoh
Math.log(1);
Math.log(2);
Math.log(3);
Math.E dan Math.log() adalah saudara kembar.

Berapa kali kita harus mengalikan Math.E untuk mendapatkan hasil 10?

Math.log(10);
Metode Math.log2()
Math.log2(x)mengembalikan logaritma basis 2 dari x.

Berapa kali kita harus mengalikan 2 untuk mendapatkan hasil 8?

Math.log2(8);
Metode Math.log10()
Math.log10(x)mengembalikan logaritma basis 10 dari x.

Berapa kali kita harus mengalikan 10 untuk mendapatkan hasil 1000?

Math.log10(1000);