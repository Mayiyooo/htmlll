String JavaScript
String digunakan untuk menyimpan teks

String ditulis dengan tanda kutip

Menggunakan Kutipan
String JavaScript adalah nol karakter atau lebih yang ditulis di dalam tanda kutip.

Contoh
let text = "John Doe";
Anda dapat menggunakan tanda kutip tunggal atau ganda:

Contoh
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
Catatan
String yang dibuat dengan tanda kutip tunggal atau ganda berfungsi sama.

Tidak ada perbedaan antara keduanya.

Kutipan Di Dalam Kutipan
Anda dapat menggunakan tanda kutip di dalam string, selama tanda kutip tersebut tidak cocok dengan tanda kutip yang ada di sekitar string tersebut:

Contoh
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
String Templat
Templat diperkenalkan dengan ES6 (JavaScript 2016).

Templat merupakan rangkaian yang diapit tanda petik terbalik (`Ini adalah rangkaian templat`).

Templat memperbolehkan tanda kutip tunggal dan ganda di dalam string:

Contoh
let text = `He's often called "Johnny"`;

Catatan
Templat tidak didukung di Internet Explorer.

Panjang Tali
Untuk menemukan panjang string, gunakan properti bawaan length:

Contoh
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
Karakter Pelarian
Karena string harus ditulis dalam tanda kutip, JavaScript akan salah memahami string ini:

let text = "We are the so-called "Vikings" from the north.";
Tali tersebut akan dipotong menjadi "Kami adalah apa yang disebut".

Untuk mengatasi masalah ini, Anda dapat menggunakan karakter escape garis miring terbalik .

Karakter escape garis miring terbalik ( \) mengubah karakter khusus menjadi karakter string:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
Contoh
\" menyisipkan tanda kutip ganda dalam sebuah string:


let text = "We are the so-called \"Vikings\" from the north.";
\' menyisipkan tanda kutip tunggal dalam sebuah string:


let text= 'It\'s alright.';
\\ menyisipkan garis miring terbalik dalam string:


let text = "The character \\ is called backslash.";
Enam urutan escape lainnya berlaku dalam JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
Catatan
Enam karakter escape di atas awalnya dirancang untuk mengendalikan mesin tik, teletype, dan mesin faks. Karakter-karakter ini tidak memiliki arti apa pun dalam HTML.

IKLAN

Memutus Antrean Panjang
Demi keterbacaan, programmer sering kali ingin menghindari baris kode yang panjang.

Cara yang aman untuk memecah pernyataan adalah setelah operator:

Contoh
document.getElementById("demo").innerHTML =
"Hello Dolly!";
Cara yang aman untuk memecah string adalah dengan menggunakan penambahan string:

Contoh
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
String Templat
Templat diperkenalkan dengan ES6 (JavaScript 2016).

Templat merupakan rangkaian yang diapit tanda petik terbalik (`Ini adalah rangkaian templat`).

Templat memperbolehkan string multibaris:

Contoh
let text =
`The quick
brown fox
jumps over
the lazy dog`;

Catatan
Templat tidak didukung di Internet Explorer.

String JavaScript sebagai Objek
Biasanya, string JavaScript adalah nilai primitif, yang dibuat dari literal:

let x = "John";
Tetapi string juga dapat didefinisikan sebagai objek dengan kata kunci new:

let y = new String("John");
Contoh
let x = "John";
let y = new String("John");
Jangan membuat objek String.

Kata newkunci memperumit kode dan memperlambat kecepatan eksekusi.

Objek string dapat menghasilkan hasil yang tidak terduga:

Ketika menggunakan ==operator, x dan y sama :

let x = "John";
let y = new String("John");
Saat menggunakan ===operator, x dan y tidak sama :

let x = "John";
let y = new String("John");
Perhatikan perbedaan antara (x==y)dan (x===y).

(x == y)benar atau salah?

let x = new String("John");
let y = new String("John");
(x === y)benar atau salah?

let x = new String("John");
let y = new String("John");