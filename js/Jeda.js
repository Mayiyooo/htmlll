JavaScript Break dan Continue
Pernyataan itu break"keluar" dari suatu lingkaran.

Pernyataan continue"melompati" satu iterasi dalam perulangan.

Pernyataan Istirahat
Anda telah melihat breakpernyataan yang digunakan di bab sebelumnya dari tutorial ini. Pernyataan tersebut digunakan untuk "melompat keluar" dari sebuah switch()pernyataan.

Pernyataan ini breakjuga dapat digunakan untuk keluar dari suatu masalah:

Contoh
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
Dalam contoh di atas, breakpernyataan mengakhiri loop ("mematahkan" loop) ketika penghitung loop (i) adalah 3.

Pernyataan Lanjutan
Pernyataan tersebut continuemenghentikan satu iterasi (dalam perulangan), jika kondisi tertentu terjadi, dan berlanjut pada iterasi berikutnya dalam perulangan.

Contoh ini melewatkan nilai 3:

Contoh
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
IKLAN

Label JavaScript
Untuk memberi label pada pernyataan JavaScript, Anda mendahului pernyataan tersebut dengan nama label dan titik dua:

label:
statements
Pernyataan breakdan continueadalah satu-satunya pernyataan JavaScript yang dapat "melompat keluar" dari blok kode.

Sintaksis:

break labelname;

continue labelname;
Pernyataan continue (dengan atau tanpa referensi label) hanya dapat digunakan untuk melewatkan satu iterasi loop .

Pernyataan tersebut break, tanpa referensi label, hanya dapat digunakan untuk keluar dari suatu loop atau switch .

Dengan referensi label, pernyataan break dapat digunakan untuk keluar dari blok kode mana pun :

Contoh
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}