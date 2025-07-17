Keluaran JavaScript
Kemungkinan Tampilan JavaScript
JavaScript dapat "menampilkan" data dengan berbagai cara:

Menulis ke dalam elemen HTML, menggunakan innerHTMLatau innerText.
Menulis ke keluaran HTML menggunakan document.write().
Menulis ke dalam kotak peringatan, menggunakan window.alert().
Menulis ke konsol browser, menggunakan console.log().
Menggunakan innerHTML
Untuk mengakses elemen HTML, Anda dapat menggunakan document.getElementById(id)metode.

Gunakan idatribut untuk mengidentifikasi elemen HTML.

Kemudian gunakan innerHTMLproperti untuk mengubah konten HTML dari elemen HTML:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>

</body>
</html>
Catatan
Mengubah properti innerHTML dari elemen HTML adalah cara paling umum untuk menampilkan data dalam HTML.

Menggunakan innerText
Untuk mengakses elemen HTML, gunakan document.getElementById(id)metode.

Kemudian gunakan innerTextproperti untuk mengubah teks bagian dalam elemen HTML:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerText = "Hello World";
</script>

</body>
</html>
Catatan
Gunakan innerHTML ketika Anda ingin mengubah elemen HTML.

Gunakan innerText ketika Anda hanya ingin mengubah teks biasa.

Menggunakan document.write()
Untuk tujuan pengujian, ada baiknya menggunakan document.write():

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
Menggunakan document.write() setelah dokumen HTML dimuat, akan menghapus semua HTML yang ada :

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html>
Metode document.write() hanya boleh digunakan untuk pengujian.

IKLAN

Menggunakan window.alert()
Anda dapat menggunakan kotak peringatan untuk menampilkan data:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
Anda dapat melewati windowkata kunci tersebut.

Dalam JavaScript, objek jendela adalah objek cakupan global. Ini berarti variabel, properti, dan metode secara default merupakan milik objek jendela. Ini juga berarti bahwa menentukan windowkata kunci bersifat opsional:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

</body>
</html>
Menggunakan console.log()
Untuk tujuan debugging, Anda dapat memanggil console.log()metode di browser untuk menampilkan data.

Anda akan mempelajari lebih lanjut tentang debugging di bab berikutnya.

Contoh
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
Cetak JavaScript
JavaScript tidak memiliki objek cetak atau metode cetak.

Anda tidak dapat mengakses perangkat keluaran dari JavaScript.

Satu-satunya pengecualian adalah Anda dapat memanggil window.print()metode di browser untuk mencetak konten jendela saat ini.

Contoh
<!DOCTYPE html>
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>