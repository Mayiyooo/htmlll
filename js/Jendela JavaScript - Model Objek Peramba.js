Jendela JavaScript - Model Objek Peramban
Model Objek Browser (BOM) memungkinkan JavaScript untuk "berbicara" dengan browser.

Model Objek Peramban (BOM)
Tidak ada standar resmi untuk Model Objek Peramban ( Browser Object Model /BOM).

Karena peramban modern telah menerapkan (hampir) metode dan properti yang sama untuk interaktivitas JavaScript, ia sering disebut sebagai metode dan properti BOM.

Objek Jendela
Objek windowini didukung oleh semua peramban. Objek ini mewakili jendela peramban.

Semua objek, fungsi, dan variabel JavaScript global secara otomatis menjadi anggota objek jendela.

Variabel global adalah properti dari objek jendela.

Fungsi global adalah metode objek jendela.

Bahkan objek dokumen (dari HTML DOM) adalah properti dari objek jendela:

window.document.getElementById("header");
sama dengan:

document.getElementById("header");
Ukuran Jendela
Dua properti dapat digunakan untuk menentukan ukuran jendela browser.

Kedua properti mengembalikan ukuran dalam piksel:

window.innerHeight- tinggi bagian dalam jendela browser (dalam piksel)
window.innerWidth- lebar bagian dalam jendela browser (dalam piksel)
Jendela peramban (viewport peramban) TIDAK menyertakan bilah alat dan bilah gulir.

Contoh
let w = window.innerWidth;
let h = window.innerHeight;