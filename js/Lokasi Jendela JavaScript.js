Lokasi Jendela JavaScript
Objek tersebut window.locationdapat digunakan untuk mendapatkan alamat halaman saat ini (URL) dan mengarahkan browser ke halaman baru.

Lokasi Jendela
Objek window.locationdapat ditulis tanpa awalan jendela.

Beberapa contoh:

window.location.hrefmengembalikan href (URL) dari halaman saat ini
window.location.hostnamemengembalikan nama domain dari web host
window.location.pathnamemengembalikan jalur dan nama file halaman saat ini
window.location.protocolmengembalikan protokol web yang digunakan (http: atau https:)
window.location.assign()memuat dokumen baru
Lokasi Jendela HRef
Properti window.location.hrefmengembalikan URL halaman saat ini.

Contoh
Menampilkan href (URL) halaman saat ini:

document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;
Hasilnya adalah:

Page location is https://www.w3schools.com/js/js_window_location.asp
Nama Host Lokasi Jendela
Properti window.location.hostnamemengembalikan nama host internet (halaman saat ini).

Contoh
Menampilkan nama host:

document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;
Hasilnya adalah:

Page hostname is www.w3schools.com
IKLAN

Jalur Lokasi Jendela
Properti window.location.pathnamemengembalikan nama jalur halaman saat ini.

Contoh
Menampilkan nama jalur URL saat ini:

document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;
Hasilnya adalah:

Page path is /js/js_window_location.asp
Protokol Lokasi Jendela
Properti window.location.protocolmengembalikan protokol web halaman tersebut.

Contoh
Menampilkan protokol web:

document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;
Hasilnya adalah:

Page protocol is https:
Lokasi Jendela Port
Properti window.location.portmengembalikan nomor port host internet (halaman saat ini).

Contoh
Menampilkan nama host:

document.getElementById("demo").innerHTML =
"Port number is " + window.location.port;
Hasilnya adalah:

Port number is
Sebagian besar browser tidak akan menampilkan nomor port default (80 untuk http dan 443 untuk https)

Penetapan Lokasi Jendela
Metode ini window.location.assign()memuat dokumen baru.

Contoh
Muat dokumen baru:

<html>
<head>
<script>
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
</script>
</head>
<body>

<input type="button" value="Load new document" onclick="newDoc()">

</body>
</html>