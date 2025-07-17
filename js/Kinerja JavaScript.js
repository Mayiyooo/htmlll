Kinerja JavaScript
Cara mempercepat kode JavaScript Anda.

Kurangi Aktivitas dalam Loop
Perulangan sering digunakan dalam pemrograman.

Setiap pernyataan dalam satu perulangan, termasuk pernyataan for, dieksekusi pada setiap iterasi perulangan.

Pernyataan atau penugasan yang dapat ditempatkan di luar loop akan membuat loop berjalan lebih cepat.

Buruk:
for (let i = 0; i < arr.length; i++) {
Kode yang Lebih Baik:
let l = arr.length;
for (let i = 0; i < l; i++) {
Kode yang buruk mengakses properti panjang suatu array tiap kali loop diulang.

Kode yang lebih baik mengakses properti length di luar loop dan membuat loop berjalan lebih cepat.

Kurangi Akses DOM
Mengakses DOM HTML sangat lambat, dibandingkan dengan pernyataan JavaScript lainnya.

Jika Anda berencana mengakses elemen DOM beberapa kali, akses elemen tersebut satu kali, lalu gunakan sebagai variabel lokal:

Contoh
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";
IKLAN

Kurangi Ukuran DOM
Jaga jumlah elemen dalam HTML DOM tetap kecil.

Ini akan selalu meningkatkan pemuatan halaman, dan mempercepat rendering (tampilan halaman), terutama pada perangkat yang lebih kecil.

Setiap upaya untuk mencari DOM (seperti getElementsByTagName) akan mendapat manfaat dari DOM yang lebih kecil.

Hindari Variabel yang Tidak Diperlukan
Jangan membuat variabel baru jika Anda tidak berencana menyimpan nilainya.

Seringkali Anda dapat mengganti kode seperti ini:

let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
Dengan ini:

document.getElementById("demo").innerHTML = firstName + " " + lastName;
Tunda Pemuatan JavaScript
Menempatkan skrip Anda di bagian bawah badan halaman memungkinkan browser memuat halaman terlebih dahulu.

Saat skrip sedang diunduh, peramban tidak akan memulai unduhan lainnya. Selain itu, semua aktivitas penguraian dan rendering mungkin diblokir.

Spesifikasi HTTP menetapkan bahwa browser tidak boleh mengunduh lebih dari dua komponen secara paralel.

Alternatifnya adalah menggunakan defer="true"tag skrip. Atribut defer menentukan bahwa skrip harus dieksekusi setelah halaman selesai diurai, tetapi atribut ini hanya berfungsi untuk skrip eksternal.

Jika memungkinkan, Anda dapat menambahkan skrip ke halaman melalui kode, setelah halaman dimuat:

Contoh
<script>
window.onload = function() {
  const element = document.createElement("script");
  element.src = "myScript.js";
  document.body.appendChild(element);
};
</script>