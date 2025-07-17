Contoh AJAX
Contoh Sederhana
Pengantar AJAX
AJAX adalah impian pengembang, karena Anda dapat:

Membaca data dari server web - setelah halaman dimuat
Perbarui halaman web tanpa memuat ulang halaman
Kirim data ke server web - di latar belakang
Contoh AJAX
Let AJAX change this text
Change Content

Contoh AJAX Dijelaskan
Halaman HTML
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

</body>
</html>
Halaman HTML berisi bagian <div> dan <tombol>.

Bagian <div> digunakan untuk menampilkan informasi dari server.

<tombol> memanggil suatu fungsi (jika diklik).

Fungsi ini meminta data dari server web dan menampilkannya:

Fungsi loadDoc()
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
Apa itu AJAX?
AJAX = JavaScript dan XML yang sinkron .​

AJAX bukan bahasa pemrograman.

AJAX hanya menggunakan kombinasi:

Objek bawaan browser XMLHttpRequest(untuk meminta data dari server web)
JavaScript dan HTML DOM (untuk menampilkan atau menggunakan data)
AJAX adalah nama yang menyesatkan. Aplikasi AJAX mungkin menggunakan XML untuk mengangkut data, tetapi sama umum untuk mengangkut data sebagai teks biasa atau teks JSON.

AJAX memungkinkan halaman web diperbarui secara asinkron dengan bertukar data dengan server web di balik layar. Ini berarti Anda dapat memperbarui sebagian halaman web tanpa perlu memuat ulang seluruh halaman.

Cara Kerja AJAX
AJAX

1. Suatu peristiwa terjadi di halaman web (halaman dimuat, tombol diklik)
2. Objek XMLHttpRequest dibuat oleh JavaScript
3. Objek XMLHttpRequest mengirimkan permintaan ke server web
4. Server memproses permintaan tersebut
5. Server mengirimkan respons kembali ke halaman web
6. Respons dibaca oleh JavaScript
7. Tindakan yang tepat (seperti pembaruan halaman) dilakukan oleh JavaScript
Peramban Modern (Fetch API)
Peramban Modern dapat menggunakan Fetch API sebagai ganti Objek XMLHttpRequest.

Antarmuka Fetch API memungkinkan peramban web membuat permintaan HTTP ke server web.

Jika Anda menggunakan Objek XMLHttpRequest, Fetch dapat melakukan hal yang sama dengan cara yang lebih sederhana.
Minta Informasi Header

Minta File XML

Ambil Data Server dengan PHP dan ASP

Ambil Informasi Basis Data

Aplikasi AJAX

