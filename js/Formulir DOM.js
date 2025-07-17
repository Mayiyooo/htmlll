JavaScript HTML DOM - Mengubah CSS
HTML DOM memungkinkan JavaScript untuk mengubah gaya elemen HTML.

Mengubah Gaya HTML
Untuk mengubah gaya elemen HTML, gunakan sintaks berikut:

document.getElementById(id).style.property = new style
Contoh berikut mengubah gaya suatu <p>elemen:

Contoh
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html>
Menggunakan Acara
HTML DOM memungkinkan Anda mengeksekusi kode saat suatu peristiwa terjadi.

Peristiwa dihasilkan oleh browser ketika "sesuatu terjadi" pada elemen HTML:

Sebuah elemen diklik
Halaman telah dimuat
Bidang input diubah
Anda akan mempelajari lebih lanjut tentang peristiwa di bab berikutnya dari tutorial ini.

Contoh ini mengubah gaya elemen HTML dengan id="id1", saat pengguna mengklik tombol:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">My Heading 1</h1>

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>

</body>
</html>
