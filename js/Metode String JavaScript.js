Metode String JavaScript
Metode String Dasar
String Javascript bersifat primitif dan tidak dapat diubah: Semua metode string menghasilkan string baru tanpa mengubah string asli.

Panjang string
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim
()
String trimStart() String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
Lihat Juga:
Tutorial String
Pencarian
String Template
String Referensi String
Panjang String JavaScript
Properti lengthmengembalikan panjang string:

Contoh
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
Mengekstrak Karakter String
Ada 4 metode untuk mengekstrak karakter string:

Metode​at(position)
Metode​charAt(position)
Metode​charCodeAt(position)
Menggunakan akses properti [] seperti dalam array
String JavaScript charAt()
Metode ini charAt()mengembalikan karakter pada indeks (posisi) tertentu dalam sebuah string:

Contoh
let text = "HELLO WORLD";
let char = text.charAt(0);
String JavaScript charCodeAt()
Metode ini charCodeAt()mengembalikan kode karakter pada indeks tertentu dalam sebuah string:

Metode ini mengembalikan kode UTF-16 (bilangan bulat antara 0 dan 65535).

Contoh
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
Kode JavaScriptPointAt()
Contoh
Dapatkan nilai titik kode pada posisi pertama dalam sebuah string:

let text = "HELLO WORLD";
let code = text.codePointAt(0);
String JavaScript di()
ES2022 memperkenalkan metode string at():

Contoh
Dapatkan huruf ketiga dari nama:

const name = "W3Schools";
let letter = name.at(2);
Dapatkan huruf ketiga dari nama:

const name = "W3Schools";
let letter = name[2];
Metode ini at()mengembalikan karakter pada indeks (posisi) tertentu dalam sebuah string.

Metode ini at()didukung di semua browser modern sejak Maret 2022:

Catatan
Metode ini at()merupakan tambahan baru pada JavaScript.

Ini memperbolehkan penggunaan indeks negatif sementara charAt()tidak.

Sekarang Anda dapat menggunakan myString.at(-2)sebagai pengganti charAt(myString.length-2).
Dukungan Peramban
at()adalah fitur ES2022.

JavaScript 2022 didukung di semua browser modern sejak Maret 2023:

Chrome 94	Edge 94	Firefox 93	Safari 16.4	Opera 79
Sep 2021	Sep 2021	Oct 2021	Mar 2023	Oct 2021
Akses Properti [ ]
Contoh
let text = "HELLO WORLD";
let char = text[0];
Catatan
Akses properti mungkin sedikit tidak dapat diprediksi:

Ini membuat string terlihat seperti array (tetapi sebenarnya tidak)
Jika tidak ada karakter yang ditemukan, [ ] mengembalikan undefined, sementara charAt() mengembalikan string kosong.
Hanya dapat dibaca. str[0] = "A" tidak memberikan kesalahan (tetapi tidak berfungsi!)
Contoh
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work
JavaScript String concat()
concat()menggabungkan dua atau lebih string:

Contoh
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
Metode ini concat()dapat digunakan sebagai pengganti operator tambah. Kedua baris ini memiliki fungsi yang sama:

Contoh
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
Catatan
Semua metode string mengembalikan string baru. Metode-metode ini tidak mengubah string aslinya.

Secara formal dikatakan:

String tidak dapat diubah: String tidak dapat diubah, hanya diganti.

Mengekstrak Bagian Tali
Ada 3 metode untuk mengekstrak bagian dari string:

slice(start, end)
substring(start, end)
substr(start, length)
Irisan String JavaScript()
slice()mengekstrak bagian dari string dan mengembalikan bagian yang diekstrak dalam string baru.

Metode ini mengambil 2 parameter: posisi awal, dan posisi akhir (akhir tidak disertakan).

Contoh
Potong sebagian tali dari posisi 7 ke posisi 13:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
Catatan
JavaScript menghitung posisi dari nol.

Posisi pertama adalah 0.

Posisi kedua adalah 1.

Contoh
Jika Anda menghilangkan parameter kedua, metode akan memotong sisa string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
Jika parameternya negatif, posisi dihitung dari akhir string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
Contoh ini mengiris sebagian string dari posisi -12 ke posisi -6:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
Substring String JavaScript()
substring()mirip dengan slice().

Perbedaannya adalah nilai awal dan akhir kurang dari 0 diperlakukan sebagai 0 dalam substring().

Contoh
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
Jika Anda menghilangkan parameter kedua, substring()akan memotong sisa string.

JavaScript String substr()
substr()mirip dengan slice().

Perbedaannya adalah parameter kedua menentukan panjang bagian yang diekstraksi.

Peringatan
Metode ini substr()dihapus (tidak digunakan lagi) dalam standar JavaScript terbaru.

Gunakan substring()atau slice()sebagai gantinya.

Contoh
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
Jika Anda menghilangkan parameter kedua, substr()akan memotong sisa string.

Contoh
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
Jika parameter pertama negatif, posisi dihitung dari akhir string.

Contoh
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
Mengonversi ke Huruf Besar dan Kecil
Suatu string diubah menjadi huruf besar dengan toUpperCase():

Suatu string diubah menjadi huruf kecil dengan toLowerCase():

String JavaScript keUpperCase()
Contoh
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
String JavaScript ke Huruf Kecil()
Contoh
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
String JavaScript isWellFormed()
Metode ini isWellFormed()mengembalikan hasil true jika string terbentuk dengan baik.

Jika tidak, ia akan kembali false.

Suatu untaian tidak terbentuk dengan baik jika hanya mengandung pengganti tunggal .

Contoh
let text = "Hello world!";
let result = text.isWellFormed();
let text = "Hello World \uD800";
let result = text.isWellFormed();
Pengganti Tunggal
Pengganti tunggal adalah titik kode pengganti Unicode yang bukan bagian dari pasangan pengganti sah yang digunakan untuk merepresentasikan karakter dalam penyandian UTF-16.

String JavaScript keWellFormed()
Metode String toWellFormed() mengembalikan string baru di mana semua "pengganti tunggal" diganti dengan karakter pengganti Unicode (U+FFFD).

Contoh
let text = "Hello World \uD800";
let result = text.toWellFormed();
String JavaScript trim()
Metode ini trim()menghilangkan spasi dari kedua sisi string:

Contoh
let text1 = "      Hello World!      ";
let text2 = text1.trim();
String JavaScript trimStart()
ECMAScript 2019 menambahkan metode String trimStart()ke JavaScript.

Metode ini trimStart()bekerja seperti trim(), tetapi hanya menghapus spasi dari awal string.

Contoh
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
JavaScript String trimStart()didukung di semua browser modern sejak Januari 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
String JavaScript trimEnd()
ECMAScript 2019 menambahkan metode string trimEnd()ke JavaScript.

Metode ini trimEnd()bekerja seperti trim(), tetapi hanya menghapus spasi dari akhir string.

Contoh
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
JavaScript String trimEnd()didukung di semua browser modern sejak Januari 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
Pengisi String JavaScript
ECMAScript 2017 menambahkan dua metode string baru ke JavaScript: padStart() dan padEnd()untuk mendukung padding di awal dan akhir string.

String JavaScript padStart()
Metode ini padStart()mengisi string dari awal.

Ia melapisi seutas tali dengan tali lainnya (beberapa kali) hingga mencapai panjang tertentu.

Contoh
Tambahkan string dengan "0" hingga mencapai panjang 4:

let text = "5";
let padded = text.padStart(4,"0");
Tambahkan "x" pada tali hingga panjangnya mencapai 4:

let text = "5";
let padded = text.padStart(4,"x");
Catatan
Metodenya padStart()adalah metode string.

Untuk menambahkan angka, ubahlah angka tersebut menjadi string terlebih dahulu.

Lihat contoh di bawah.

Contoh
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
Dukungan Peramban
padStart()adalah fitur ECMAScript 2017 .

ES2017 didukung di semua browser modern sejak September 2017:

Chrome 58	Edge 15	Firefox 52	Safari 11	Opera 45
Apr 2017	Apr 2017	Mar 2017	Sep 2017	May 2017
padStart()tidak didukung di Internet Explorer.

String JavaScript padEnd()
Metode ini padEnd()menambahkan string dari akhir.

Ia melapisi seutas tali dengan tali lainnya (beberapa kali) hingga mencapai panjang tertentu.

Contoh
let text = "5";
let padded = text.padEnd(4,"0");
let text = "5";
let padded = text.padEnd(4,"x");
Catatan
Metodenya padEnd()adalah metode string.

Untuk menambahkan angka, ubahlah angka tersebut menjadi string terlebih dahulu.

Lihat contoh di bawah.

Contoh
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
Dukungan Peramban
padEnd()adalah fitur ECMAScript 2017 .

ES2017 didukung di semua browser modern sejak September 2017:

Chrome 58	Edge 15	Firefox 52	Safari 11	Opera 45
Apr 2017	Apr 2017	Mar 2017	Sep 2017	May 2017
padEnd()tidak didukung di Internet Explorer.

Pengulangan String JavaScript()
Metode ini repeat()mengembalikan string dengan sejumlah salinan string.

Metode ini repeat()mengembalikan string baru.

Metode ini repeat()tidak mengubah string asli.

Contoh
Membuat salinan teks:

let text = "Hello world!";
let result = text.repeat(2);
let text = "Hello world!";
let result = text.repeat(4);
Sintaksis
string.repeat(count)
Parameter
Parameter	Description
count	Required.
The number of copies wanted.
Nilai Pengembalian
Jenis	Keterangan
Rangkaian	Rangkaian baru yang berisi salinan.
Dukungan Peramban
repeat()adalah fitur ES6 (JavaScript 2015).

ES6 didukung sepenuhnya di semua browser modern sejak Juni 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
repeat()tidak didukung di Internet Explorer.

Mengganti Konten String
Metode ini replace()mengganti nilai yang ditentukan dengan nilai lain dalam sebuah string:

Contoh
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
Catatan
Metode ini replace()tidak mengubah string yang dipanggilnya.

Metode ini replace()mengembalikan string baru.

Metode ini hanya replace()mengganti kecocokan pertama

Jika Anda ingin mengganti semua kecocokan, gunakan ekspresi reguler dengan tanda /g yang disetel. Lihat contoh di bawah.

Secara default, replace()metode ini hanya mengganti kecocokan pertama :

Contoh
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

Secara default, replace()metode ini peka huruf besar-kecil. Penulisan MICROSOFT (dengan huruf kapital) tidak akan berfungsi:

Contoh
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");

Untuk mengganti huruf besar/kecil yang tidak peka huruf, gunakan ekspresi reguler dengan /itanda (tidak peka huruf):

Contoh
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

Catatan
Ekspresi reguler ditulis tanpa tanda kutip.

Untuk mengganti semua kecocokan, gunakan ekspresi reguler dengan /gbendera (kecocokan global):

Contoh
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

Catatan
Anda akan mempelajari lebih banyak tentang ekspresi reguler dalam bab Ekspresi Reguler JavaScript .

JavaScript String GantiSemua()
Pada tahun 2021, JavaScript memperkenalkan metode string replaceAll():

Contoh
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
Metode ini replaceAll()memungkinkan Anda menentukan ekspresi reguler, bukan string, yang akan diganti.

Jika parameternya adalah ekspresi reguler, bendera global (g) harus ditetapkan, jika tidak, TypeError akan dilemparkan.

Contoh
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
Catatan
replaceAll()adalah fitur ES2021 .

replaceAll()tidak berfungsi di Internet Explorer.

Mengonversi String ke Array
Jika Anda ingin bekerja dengan string sebagai array, Anda dapat mengubahnya menjadi array.

Pemisahan String JavaScript()
Suatu string dapat diubah menjadi array dengan split()metode:

Contoh
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
Jika pemisah dihilangkan, array yang dikembalikan akan berisi seluruh string dalam indeks [0].

Jika pemisahnya adalah "", array yang dikembalikan akan berupa array karakter tunggal:

Contoh
text.split("")