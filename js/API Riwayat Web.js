API Riwayat Web
API Riwayat Web menyediakan metode mudah untuk mengakses objek windows.history.

Objek window.history berisi URL (Situs Web) yang dikunjungi oleh pengguna.

API Riwayat Web didukung di semua browser:

Yes	Yes	Yes	Yes	Yes
Metode Sejarah back()
Metode back() memuat URL sebelumnya dalam daftar windows.history.

Sama halnya dengan mengeklik "tanda panah kembali" pada peramban Anda.

Contoh
<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>
Kembali

IKLAN

Metode go() Sejarah
Metode go() memuat URL tertentu dari daftar riwayat:

Contoh
<button onclick="myFunction()">Go Back 2 Pages</button>

<script>
function myFunction() {
  window.history.go(-2);
}
</script>
Kembali 2 Halaman

Properti Objek Sejarah
Property	Description
length	Returns the number of URLs in the history list
Metode Objek Sejarah
Method	Description
back()	Loads the previous URL in the history list
forward()	Loads the next URL in the history list
go()	Loads a specific URL from the history list
