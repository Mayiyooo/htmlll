Pencarian String JavaScript
Metode Pencarian String
String indexOf()
String lastIndexOf()
String pencarian()
String pencocokan()
String matchAll()
String termasuk()
String dimulaiDengan()
String berakhirDengan()
Lihat Juga:
Tutorial String
Metode String
Template String
Referensi String
String JavaScript indexOf()
Metode ini indexOf()mengembalikan indeks (posisi) kemunculan pertama suatu string dalam string, atau mengembalikan -1 jika string tidak ditemukan:

Contoh
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
Catatan
JavaScript menghitung posisi dari nol.

0 adalah posisi pertama dalam string, 1 adalah posisi kedua, 2 adalah posisi ketiga, ...

String JavaScript lastIndexOf()
Metode ini lastIndexOf()mengembalikan indeks kemunculan terakhir teks tertentu dalam sebuah string:

Contoh
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
Keduanya indexOf(), dan lastIndexOf()mengembalikan -1 jika teks tidak ditemukan:

Contoh
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("John");
Kedua metode menerima parameter kedua sebagai posisi awal pencarian:

Contoh
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
Metode ini lastIndexOf()mencari mundur (dari akhir ke awal), artinya: jika parameter kedua adalah 15, pencarian dimulai pada posisi 15, dan mencari ke awal string.

Contoh
let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15);
Pencarian String JavaScript()
Metode ini search()mencari string untuk string (atau ekspresi reguler) dan mengembalikan posisi kecocokan:

Contoh
let text = "Please locate where 'locate' occurs!";
text.search("locate");
let text = "Please locate where 'locate' occurs!";
text.search(/locate/);
Apakah Anda Memperhatikan?
Kedua metode, indexOf()dan search(), sama?

Mereka menerima argumen (parameter) yang sama, dan mengembalikan nilai yang sama?

Kedua metode ini TIDAK sama. Berikut perbedaannya:

Metode ini search()tidak dapat mengambil argumen posisi awal kedua.
Metode ini indexOf()tidak dapat mengambil nilai pencarian yang kuat (ekspresi reguler).
Anda akan mempelajari lebih lanjut tentang ekspresi reguler di bab berikutnya.

IKLAN

Pencocokan String JavaScript()
Metode ini match()mengembalikan array yang berisi hasil pencocokan string dengan string (atau ekspresi reguler).

Contoh
Lakukan pencarian untuk "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
Lakukan pencarian untuk "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/);
Lakukan pencarian global untuk "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);
Lakukan pencarian global tanpa memperhatikan huruf besar/kecil untuk "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);
Catatan
Jika ekspresi reguler tidak menyertakan pengubah g (pencarian global), match()hanya akan mengembalikan kecocokan pertama dalam string.

Baca selengkapnya tentang ekspresi reguler dalam bab JS RegExp .

JavaScript String matchAll()
Metode ini matchAll()mengembalikan iterator yang berisi hasil pencocokan string dengan string (atau ekspresi reguler).

Contoh
const iterator = text.matchAll("Cats");
Jika parameternya adalah ekspresi reguler, bendera global (g) harus ditetapkan, jika tidak, TypeError akan dilemparkan.

Contoh
const iterator = text.matchAll(/Cats/g);
Jika Anda ingin melakukan pencarian tanpa memperhatikan huruf besar/kecil, tanda tidak memperhatikan huruf (i) harus ditetapkan:

Contoh
const iterator = text.matchAll(/Cats/gi);
Catatan
matchAll()adalah fitur ES2020 .

matchAll()tidak berfungsi di Internet Explorer.

String JavaScript termasuk()
Metode ini includes()mengembalikan true jika suatu string berisi nilai tertentu.

Jika tidak, ia akan kembali false.

Contoh
Periksa apakah suatu string menyertakan "dunia":

let text = "Hello world, welcome to the universe.";
text.includes("world");
Periksa apakah suatu string mengandung "dunia". Mulai dari posisi 12:

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
Catatan
includes()peka huruf besar/kecil.

includes()adalah fitur ES6 .

includes()tidak didukung di Internet Explorer.

String JavaScript dimulai dengan()
Metode ini startsWith()mengembalikan nilai true jika suatu string dimulai dengan nilai yang ditentukan.

Jika tidak, maka akan kembali false:

Contoh
Mengembalikan benar:

let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
Mengembalikan false:

let text = "Hello world, welcome to the universe.";
text.startsWith("world")
Posisi awal pencarian dapat ditentukan:

Mengembalikan false:

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5)
Mengembalikan benar:

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6)
Catatan
startsWith()peka huruf besar/kecil.

startsWith()adalah fitur ES6 .

startsWith()tidak didukung di Internet Explorer.

String JavaScript berakhir dengan()
Metode ini endsWith()mengembalikan nilai true jika suatu string diakhiri dengan nilai yang ditentukan.

Jika tidak, maka akan kembali false:

Contoh
Periksa apakah suatu string diakhiri dengan "Doe":

let text = "John Doe";
text.endsWith("Doe");
Periksa apakah 11 karakter pertama suatu string diakhiri dengan "dunia":

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);