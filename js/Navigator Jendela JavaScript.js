Navigator Jendela JavaScript
Objek Navigator
Objek tersebut navigatorberisi informasi tentang peramban pengunjung.

Dapat ditulis dengan atau tanpa awalan jendela seperti:

windows.navigatoratau hanyanavigator

Kuki Peramban
Properti cookieEnabledmengembalikan true jika cookie diaktifkan, jika tidak, false:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
Bahasa Peramban
Properti languagemengembalikan bahasa browser:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.language;
</script>
Apakah Peramban Sedang Daring?
Properti onLinemengembalikan true jika browser sedang online:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.onLine;
</script>
Nama Aplikasi Peramban
Properti appNamemengembalikan nama aplikasi browser:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>
Peringatan
Properti ini dihapus (tidak digunakan lagi) dalam standar web terbaru.

Sebagian besar peramban (Chrome, Edge, Firefox, Safari) mengembalikan Netscape sebagai appName.

IKLAN

Nama Kode Aplikasi Peramban
Properti appCodeNamemengembalikan nama kode aplikasi browser:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
</script>
Peringatan
Properti ini dihapus (tidak digunakan lagi) dalam standar web terbaru.

Sebagian besar peramban (Chrome, Edge, Firefox, Safari) mengembalikan Mozilla sebagai appCodeName.

Mesin Peramban
Properti productmengembalikan nama produk mesin peramban:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>
Peringatan
Properti ini dihapus (tidak digunakan lagi) dalam standar web terbaru.

Sebagian besar browser mengembalikan Gecko sebagai produk.

Versi Peramban
Properti appVersionmengembalikan informasi versi tentang browser:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>
Peringatan
Properti ini dihapus (tidak digunakan lagi) dalam standar web terbaru.

Jangan mengandalkan appVersionuntuk mengembalikan versi browser yang benar.

Agen Peramban
Properti userAgentmengembalikan header agen pengguna yang dikirim oleh browser ke server:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.userAgent;
</script>
Peringatan
Informasi dari objek navigator sering kali menyesatkan.

Objek navigator tidak boleh digunakan untuk mendeteksi versi browser karena:

Browser yang berbeda dapat menggunakan nama yang sama
Data navigator dapat diubah oleh pemilik browser
Beberapa browser salah mengidentifikasi diri mereka sendiri untuk melewati pengujian situs
Browser tidak dapat melaporkan sistem operasi baru yang dirilis setelah browser
Platform Peramban
Properti platformmengembalikan platform browser (sistem operasi):

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.platform;
</script>
Peringatan
Properti ini dihapus (tidak digunakan lagi) dalam standar web terbaru.

Jangan mengandalkan platformuntuk mengembalikan platform browser yang benar di semua browser.

Apakah Java Diaktifkan?
Metode ini javaEnabled()mengembalikan true jika Java diaktifkan:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>