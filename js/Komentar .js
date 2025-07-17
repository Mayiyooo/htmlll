Komentar JavaScript
Komentar JavaScript dapat digunakan untuk menjelaskan kode JavaScript, dan membuatnya lebih mudah dibaca.

Komentar JavaScript juga dapat digunakan untuk mencegah eksekusi saat menguji kode alternatif.

Komentar Baris Tunggal
Komentar baris tunggal dimulai dengan //.

Teks apa pun antara //dan akhir baris akan diabaikan oleh JavaScript (tidak akan dieksekusi).

Contoh ini menggunakan komentar satu baris sebelum setiap baris kode:

Contoh
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
Contoh ini menggunakan komentar satu baris di akhir setiap baris untuk menjelaskan kode:

Contoh
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2
Komentar Multi-baris
Komentar multi-baris dimulai dengan /*dan diakhiri dengan */.

Teks apa pun antara /*dan */akan diabaikan oleh JavaScript.

Contoh ini menggunakan komentar multi-baris (blok komentar) untuk menjelaskan kode:

Contoh
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
Komentar satu baris paling umum digunakan.
Komentar blok sering digunakan untuk dokumentasi formal.

IKLAN

Menggunakan Komentar untuk Mencegah Eksekusi
Menggunakan komentar untuk mencegah eksekusi kode cocok untuk pengujian kode.

Menambahkan //di depan baris kode akan mengubah baris kode tersebut dari baris yang dapat dieksekusi menjadi komentar.

Contoh ini menggunakan // untuk mencegah eksekusi salah satu baris kode:

Contoh
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
Contoh ini menggunakan blok komentar untuk mencegah eksekusi beberapa baris:

Contoh
/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/