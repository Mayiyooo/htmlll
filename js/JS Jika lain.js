JavaScript jika, jika tidak, dan jika tidak
Pernyataan kondisional digunakan untuk melakukan tindakan berbeda berdasarkan kondisi berbeda.

Pernyataan Bersyarat
Sering kali ketika Anda menulis kode, Anda ingin melakukan tindakan yang berbeda untuk keputusan yang berbeda.

Anda dapat menggunakan pernyataan kondisional dalam kode Anda untuk melakukan ini.

Dalam JavaScript, kita memiliki pernyataan kondisional berikut:

Digunakan ifuntuk menentukan blok kode yang akan dieksekusi, jika kondisi yang ditentukan benar
Digunakan elseuntuk menentukan blok kode yang akan dieksekusi, jika kondisi yang sama salah
Digunakan else ifuntuk menentukan kondisi baru untuk diuji, jika kondisi pertama salah
Digunakan switchuntuk menentukan banyak blok kode alternatif yang akan dieksekusi
Pernyataan tersebut switchdijelaskan dalam bab berikutnya.

Pernyataan if
Gunakan ifpernyataan untuk menentukan blok kode JavaScript yang akan dieksekusi jika kondisinya benar.

Sintaksis
if (condition) {
  //  block of code to be executed if the condition is true
}
Perhatikan bahwa hurufnya ifadalah huruf kecil. Huruf kapital (If atau IF) akan menghasilkan kesalahan JavaScript.

Contoh
Ucapkan salam "Selamat siang" jika jamnya kurang dari 18:00:

if (hour < 18) {
  greeting = "Good day";
}
Hasil dari salam akan menjadi:

Good day
IKLAN

Pernyataan else
Gunakan elsepernyataan untuk menentukan blok kode yang akan dieksekusi jika kondisinya salah.

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
Contoh
Jika jamnya kurang dari 18, buatlah ucapan "Selamat siang", jika tidak, "Selamat malam":

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
Hasil dari salam akan menjadi:

Good day
Pernyataan else if
Gunakan else ifpernyataan untuk menentukan kondisi baru jika kondisi pertama salah.

Sintaksis
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
Contoh
Jika waktu kurang dari 10:00, buatlah ucapan "Selamat pagi", jika tidak, tetapi waktu kurang dari 20:00, buatlah ucapan "Selamat siang", jika tidak, buatlah ucapan "Selamat malam":

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
Hasil dari salam akan menjadi:

Good day
Contoh
Contoh ini akan menulis tautan ke W3Schools atau World Wildlife Foundation (WWF). Dengan menggunakan angka acak, terdapat peluang 50% untuk setiap tautan.

let text;
if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("demo").innerHTML = text;
