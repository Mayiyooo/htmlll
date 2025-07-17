Riwayat Jendela JavaScript
Objek tersebut window.historyberisi riwayat peramban.

Sejarah Jendela
Objek window.historydapat ditulis tanpa awalan jendela.

Untuk melindungi privasi pengguna, ada batasan pada bagaimana JavaScript dapat mengakses objek ini.

Beberapa metode:

history.back()- sama seperti mengklik kembali di browser
history.forward()- sama seperti mengklik maju di browser
Riwayat Jendela Kembali
Metode ini history.back()memuat URL sebelumnya dalam daftar riwayat.

Ini sama seperti mengklik tombol Kembali di peramban.

Contoh
Buat tombol kembali di halaman:

<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>
Output dari kode di atas akan menjadi:

IKLAN

Riwayat Jendela Maju
Metode ini history.forward()memuat URL berikutnya dalam daftar riwayat.

Ini sama saja dengan mengeklik tombol Teruskan di peramban.

Contoh
Buat tombol teruskan di halaman:

<html>
<head>
<script>
function goForward() {
  window.history.forward()
}
</script>
</head>
<body>

<input type="button" value="Forward" onclick="goForward()">

</body>
</html>