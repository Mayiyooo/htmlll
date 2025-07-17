JavaScript HTML DOM - Mengubah HTML
DOM HTML memungkinkan JavaScript untuk mengubah konten elemen HTML.

Mengubah Konten HTML
Cara termudah untuk mengubah konten elemen HTML adalah dengan menggunakan innerHTMLproperti.

Untuk mengubah konten elemen HTML, gunakan sintaks berikut:

document.getElementById(id).innerHTML = new HTML
Contoh ini mengubah konten suatu <p>elemen:

Contoh
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

</body>
</html>
Contoh dijelaskan:

Dokumen HTML di atas berisi <p>elemen denganid="p1"
Kami menggunakan HTML DOM untuk mendapatkan elemen denganid="p1"
JavaScript mengubah konten ( innerHTML) elemen tersebut menjadi "Teks baru!"
Contoh ini mengubah konten suatu <h1>elemen:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1 id="id01">Old Heading</h1>

<script>
const element = document.getElementById("id01");
element.innerHTML = "New Heading";
</script>

</body>
</html>
Contoh dijelaskan:

Dokumen HTML di atas berisi <h1>elemen denganid="id01"
Kami menggunakan HTML DOM untuk mendapatkan elemen denganid="id01"
JavaScript mengubah konten ( innerHTML) elemen tersebut menjadi "Judul Baru"
Mengubah Nilai Atribut
Untuk mengubah nilai atribut HTML, gunakan sintaks berikut:

document.getElementById(id).attribute = new value
Contoh ini mengubah nilai atribut src suatu <img>elemen:

Contoh
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>
Contoh dijelaskan:

Dokumen HTML di atas berisi <img>elemen denganid="myImage"
Kami menggunakan HTML DOM untuk mendapatkan elemen denganid="myImage"
JavaScript mengubah srcatribut elemen tersebut dari "smiley.gif" menjadi "landscape.jpg"
Konten HTML dinamis
JavaScript dapat membuat konten HTML yang dinamis:

Tanggal: Kamis, 17 Juli 2025, 09:07:04 GMT+0700 (Waktu Indonesia Barat)

Contoh
<!DOCTYPE html>
<html>
<body>

<script>
document.getElementById("demo").innerHTML = "Date : " + Date(); </script>

</body>
</html>
dokumen.tulis()
Dalam JavaScript, document.write()dapat digunakan untuk menulis langsung ke aliran keluaran HTML:

Contoh
<!DOCTYPE html>
<html>
<body>

<p>Bla bla bla</p>

<script>
document.write(Date());
</script>

<p>Bla bla bla</p>

</body>
</html>