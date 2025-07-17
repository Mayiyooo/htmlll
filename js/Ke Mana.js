Ke Mana
Tag <script>
Dalam HTML, kode JavaScript disisipkan di antara tag <script>dan </script>.

Contoh
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

Contoh JavaScript lama mungkin menggunakan atribut tipe: <script type="text/javascript">.
Atribut tipe tidak diperlukan. JavaScript adalah bahasa skrip default dalam HTML.

Fungsi dan Acara JavaScript
JavaScript functionadalah blok kode JavaScript, yang dapat dieksekusi saat "dipanggil".

Misalnya, suatu fungsi dapat dipanggil saat suatu peristiwa terjadi, seperti saat pengguna mengklik tombol.

Anda akan mempelajari lebih banyak tentang fungsi dan peristiwa di bab selanjutnya.

JavaScript di <head> atau <body>
Anda dapat menempatkan sejumlah skrip dalam dokumen HTML.

Skrip dapat ditempatkan di <body>, atau di <head>bagian halaman HTML, atau di keduanya.

JavaScript di <head>
Dalam contoh ini, JavaScript functionditempatkan di <head>bagian halaman HTML.

Fungsi ini dipanggil saat tombol diklik:

Contoh
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>

IKLAN

JavaScript di <body>
Dalam contoh ini, JavaScript functionditempatkan di <body>bagian halaman HTML.

Fungsi ini dipanggil saat tombol diklik:

Contoh
<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
Menempatkan skrip di bagian bawah elemen <body> meningkatkan kecepatan tampilan, karena interpretasi skrip memperlambat tampilan.

JavaScript Eksternal
Skrip juga dapat ditempatkan di file eksternal:

Berkas eksternal: myScript.js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
Skrip eksternal praktis ketika kode yang sama digunakan di banyak halaman web yang berbeda.

Berkas JavaScript memiliki ekstensi berkas .js .

Untuk menggunakan skrip eksternal, masukkan nama file skrip dalam srcatribut (sumber) dari sebuah <script>tag:

Contoh
<script src="myScript.js"></script>
Anda dapat menempatkan referensi skrip eksternal di dalam <head>atau <body>sesuai keinginan Anda.

Skrip akan berperilaku seolah-olah berada tepat di tempat <script>tag berada.

Skrip eksternal tidak dapat berisi <script>tag.

Keuntungan JavaScript Eksternal
Menempatkan skrip dalam file eksternal memiliki beberapa keuntungan:

Ini memisahkan HTML dan kode
Ini membuat HTML dan JavaScript lebih mudah dibaca dan dipelihara
File JavaScript yang di-cache dapat mempercepat pemuatan halaman
Untuk menambahkan beberapa file skrip ke satu halaman - gunakan beberapa tag skrip:

Contoh
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
Referensi Eksternal
Skrip eksternal dapat direferensikan dalam 3 cara berbeda:

Dengan URL lengkap (alamat web lengkap)
Dengan jalur file (seperti /js/)
Tanpa jalan apa pun
Contoh ini menggunakan URL lengkap untuk menautkan ke myScript.js:

Contoh
<script src="https://www.w3schools.com/js/myScript.js"></script>

Contoh ini menggunakan jalur file untuk menautkan ke myScript.js:

Contoh
<script src="/js/myScript.js"></script>

Contoh ini tidak menggunakan jalur untuk menautkan ke myScript.js:

Contoh
<script src="myScript.js"></script>