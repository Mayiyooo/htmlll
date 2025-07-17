Untuk
Perulangan dapat mengeksekusi blok kode sejumlah kali.

Perulangan JavaScript
Perulangan berguna jika Anda ingin menjalankan kode yang sama berulang-ulang kali, setiap kali dengan nilai yang berbeda.

Seringkali hal ini terjadi saat bekerja dengan array:

Alih-alih menulis:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
Anda dapat menulis:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
Berbagai Jenis Loop
JavaScript mendukung berbagai jenis loop:

for- mengulang blok kode beberapa kali
for/in- mengulang properti suatu objek
for/of- mengulang nilai-nilai objek yang dapat diulang
while- mengulang blok kode ketika kondisi tertentu bernilai benar
do/while- juga melakukan pengulangan melalui blok kode ketika kondisi tertentu bernilai benar
Perulangan For
Pernyataan ini formenciptakan suatu loop dengan 3 ekspresi opsional:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Ekspresi 1 dieksekusi (satu kali) sebelum eksekusi blok kode.

Ekspresi 2 mendefinisikan kondisi untuk mengeksekusi blok kode.

Ekspresi 3 dieksekusi (setiap kali) setelah blok kode dieksekusi.

Contoh
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
Dari contoh di atas, Anda dapat membaca:

Ekspresi 1 menetapkan variabel sebelum loop dimulai (misalkan i = 0).

Ekspresi 2 mendefinisikan kondisi agar loop berjalan (i harus kurang dari 5).

Ekspresi 3 meningkatkan nilai (i++) setiap kali blok kode dalam loop dieksekusi.

IKLAN

Cara menggunakan Ekspresi 1
Ekspresi 1 digunakan untuk menginisialisasi variabel yang digunakan dalam loop (misalkan i = 0).

Namun, ekspresi 1 bersifat opsional.

Anda dapat menghilangkan ekspresi 1 ketika nilai Anda ditetapkan sebelum loop dimulai:

Contoh
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
Anda dapat memasukkan banyak nilai dalam ekspresi 1 (dipisahkan dengan koma):

Contoh
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
Cara menggunakan Ekspresi 2
Ekspresi 2 digunakan untuk mengevaluasi kondisi variabel awal (i < len).

Namun, ekspresi 2 juga opsional.

Jika ekspresi 2 mengembalikan nilai true, perulangan akan dimulai lagi. Jika mengembalikan nilai false, perulangan akan berakhir.

Catatan
Jika Anda menghilangkan ekspresi 2, Anda harus memberikan jeda di dalam loop. Jika tidak, loop tidak akan pernah berakhir. Ini akan menyebabkan browser Anda macet. Baca tentang jeda di bab selanjutnya dari tutorial ini.

Cara menggunakan Ekspresi 3
Ekspresi 3 menambah nilai variabel awal (i++).

Namun, ekspresi 3 juga opsional.

Ekspresi 3 dapat melakukan apa saja seperti kenaikan negatif (i--), kenaikan positif (i = i + 15), atau apa pun yang lain.

Ekspresi 3 juga dapat dihilangkan (seperti saat Anda menambah nilai di dalam loop):

Contoh
let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
Lingkup Loop
Menggunakan vardalam satu lingkaran:

Contoh
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
Menggunakan letdalam satu lingkaran:

Contoh
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5