Ekspresi Reguler JavaScript
Ekspresi reguler adalah serangkaian karakter yang membentuk pola pencarian.

Pola pencarian dapat digunakan untuk operasi pencarian teks dan penggantian teks.

Apa itu Ekspresi Reguler?
Ekspresi reguler adalah serangkaian karakter yang membentuk pola pencarian .

Saat Anda mencari data dalam suatu teks, Anda dapat menggunakan pola pencarian ini untuk mendeskripsikan apa yang Anda cari.

Ekspresi reguler dapat berupa karakter tunggal, atau pola yang lebih rumit.

Ekspresi reguler dapat digunakan untuk melakukan semua jenis operasi pencarian teks dan penggantian teks .

Sintaksis
/pattern/modifiers;
Contoh
/w3schools/i;
Contoh dijelaskan:

/w3schools/i   adalah ekspresi reguler.

w3schools   adalah suatu pola (yang akan digunakan dalam pencarian).

i   adalah pengubah (mengubah pencarian agar tidak peka huruf besar/kecil).

Menggunakan Metode String
Dalam JavaScript, ekspresi reguler sering digunakan dengan dua metode string : search()dan replace().

Metode ini search()menggunakan ekspresi untuk mencari kecocokan, dan mengembalikan posisi kecocokan.

Metode ini replace()mengembalikan string yang dimodifikasi di mana polanya diganti.

Menggunakan String search() Dengan String
Metode ini search()mencari string untuk nilai tertentu dan mengembalikan posisi kecocokan:

Contoh
Gunakan string untuk melakukan pencarian "W3schools" dalam string:

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
Hasil dalam n akan menjadi:

6

Menggunakan String search() Dengan Ekspresi Reguler
Contoh
Gunakan ekspresi reguler untuk melakukan pencarian tanpa memperhatikan huruf besar/kecil untuk "w3schools" dalam sebuah string:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
Hasil dalam n akan menjadi:

6

IKLAN

Menggunakan String replace() Dengan String
Metode ini replace()mengganti nilai yang ditentukan dengan nilai lain dalam sebuah string:

let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
Gunakan String replace() Dengan Ekspresi Reguler
Contoh
Gunakan ekspresi reguler yang tidak peka huruf besar/kecil untuk mengganti Microsoft dengan W3Schools dalam sebuah string:

let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
Hasil dalam res akan menjadi:

Visit W3Schools!
Apakah Anda Memperhatikan?
Argumen ekspresi reguler (alih-alih argumen string) dapat digunakan dalam metode di atas.
Ekspresi reguler dapat membuat pencarian Anda jauh lebih efektif (misalnya, tidak peka huruf besar-kecil).

Pengubah Ekspresi Reguler
Pengubah dapat digunakan untuk melakukan pencarian yang lebih global tanpa memperhatikan huruf besar/kecil:

Modifier	Description	Try it
i	Perform case-insensitive matching	
g	Perform a global match (find all)	
m	Perform multiline matching	
d	Perform start and end matching (New in ES2022)	
Pola Ekspresi Reguler
Tanda kurung digunakan untuk menemukan serangkaian karakter:

Expression	Description	Try it
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |	
Metakarakter adalah karakter dengan makna khusus:

Metacharacter	Description	Try it
\d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx	
Kuantifier mendefinisikan kuantitas:

Quantifier	Description	Try it
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
Menggunakan Objek RegExp
Dalam JavaScript, objek RegExp adalah objek ekspresi reguler dengan properti dan metode yang telah ditentukan sebelumnya.

Menggunakan test()
Metode ini test()adalah metode ekspresi RegExp.

Ia mencari pola pada suatu string, dan mengembalikan nilai benar atau salah, tergantung pada hasilnya.

Contoh berikut mencari string untuk karakter "e":

Contoh
const pattern = /e/;
pattern.test("The best things in life are free!");
Karena ada "e" di dalam string, output kode di atas akan menjadi:

true

Anda tidak perlu memasukkan ekspresi reguler ke dalam variabel terlebih dahulu. Dua baris di atas dapat disingkat menjadi satu:

/e/.test("The best things in life are free!");
Menggunakan exec()
Metode ini exec()adalah metode ekspresi RegExp.

Ia mencari suatu rangkaian pola tertentu, dan mengembalikan teks yang ditemukan sebagai objek.

Jika tidak ditemukan kecocokan, maka akan mengembalikan objek kosong (null) .

Contoh berikut mencari string untuk karakter "e":

Contoh
/e/.exec("The best things in life are free!");
Metode RegExp.escape()
Metode ini RegExp.escape()mengembalikan string di mana karakter yang termasuk dalam sintaksis ekspresi reguler di-escape.

Hal ini memungkinkan untuk memperlakukan karakter seperti +, *, ?, ^, $, (, ), [, ], {, }, |, dan \ secara harfiah, dan bukan sebagai bagian dari ekspresi reguler.

Contoh
Buat ekspresi reguler yang cocok dengan string "[*]":

// Escape a text for to use as a regular expression
const safe = RegExp.escape("[*]";

// Build a new reglar expression
const regex = new RegExp(safe);

// Text to replace within
const oldText = "[*] is a web school.";

// Perform the replace
const newText = oldText.match(regex, "W3Schools");