Debugging JavaScript
Kesalahan dapat (akan) terjadi, setiap kali Anda menulis beberapa kode komputer baru.

Debugging Kode
Kode pemrograman mungkin mengandung kesalahan sintaksis, atau kesalahan logika.

Banyak dari kesalahan ini yang sulit didiagnosis.

Seringkali, ketika kode pemrograman mengandung kesalahan, tidak akan terjadi apa-apa. Tidak ada pesan kesalahan, dan Anda tidak akan mendapatkan petunjuk di mana harus mencari kesalahan.

Mencari (dan memperbaiki) kesalahan dalam kode pemrograman disebut debugging kode.

Debugger JavaScript
Debugging memang tidak mudah. Untungnya, semua peramban modern memiliki debugger JavaScript bawaan.

Debugger bawaan dapat dihidupkan dan dimatikan, sehingga kesalahan terpaksa dilaporkan kepada pengguna.

Dengan debugger, Anda juga dapat mengatur breakpoint (tempat di mana eksekusi kode dapat dihentikan), dan memeriksa variabel saat kode dieksekusi.

Biasanya (jika tidak, ikuti langkah-langkah di bagian bawah halaman ini), Anda mengaktifkan debugging di peramban Anda dengan tombol F12, dan pilih "Konsol" di menu debugger.

Metode console.log()
Jika browser Anda mendukung debugging, Anda dapat menggunakan console.log()untuk menampilkan nilai JavaScript di jendela debugger:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html>
Tip: Baca selengkapnya tentang console.log()metode ini di Referensi Konsol JavaScript kami .

Menetapkan Titik Henti
Di jendela debugger, Anda dapat mengatur titik henti dalam kode JavaScript.

Pada setiap breakpoint, JavaScript akan berhenti dieksekusi, dan membiarkan Anda memeriksa nilai JavaScript.

Setelah memeriksa nilai, Anda dapat melanjutkan eksekusi kode (biasanya dengan tombol putar).

IKLAN

Kata Kunci Debugger
Kata debuggerkunci menghentikan eksekusi JavaScript, dan memanggil (jika tersedia) fungsi debugging.

Ini memiliki fungsi yang sama seperti pengaturan breakpoint dalam debugger.

Jika tidak ada debugging yang tersedia, pernyataan debugger tidak akan berpengaruh.

Dengan debugger dihidupkan, kode ini akan berhenti dieksekusi sebelum mengeksekusi baris ketiga.

Contoh
let x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;