HTML DOM
Dengan HTML DOM, Anda dapat menavigasi pohon simpul menggunakan hubungan simpul.

Simpul DOM
Menurut standar W3C HTML DOM, semua yang ada dalam dokumen HTML adalah sebuah node:

Seluruh dokumen adalah simpul dokumen
Setiap elemen HTML adalah simpul elemen
Teks di dalam elemen HTML adalah simpul teks
Setiap atribut HTML adalah simpul atribut (tidak digunakan lagi)
Semua komentar adalah simpul komentar
DOM HTML tree
Dengan HTML DOM, semua simpul di pohon simpul dapat diakses oleh JavaScript.

Node baru dapat dibuat, dan semua node dapat dimodifikasi atau dihapus.

Hubungan Node
Node-node pada pohon node memiliki hubungan hierarkis satu sama lain.

Istilah orangtua, anak, dan saudara kandung digunakan untuk menggambarkan hubungan tersebut.

Dalam pohon simpul, simpul teratas disebut akar (atau simpul akar)
Setiap node memiliki tepat satu induk, kecuali root (yang tidak memiliki induk)
Sebuah node dapat memiliki sejumlah anak
Saudara kandung (saudara laki-laki atau perempuan) adalah node dengan induk yang sama
<html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>
Pohon simpul
Dari HTML di atas Anda dapat membaca:

<html>adalah simpul akar
<html>tidak memiliki orang tua
<html>adalah orang tua dari <head>dan<body>
<head>adalah anak pertama dari<html>
<body>adalah anak terakhir dari<html>
Dan:

<head>memiliki satu anak:<title>
<title>memiliki satu anak (simpul teks): "Tutorial DOM"
<body>memiliki dua anak: <h1>dan<p>
<h1>memiliki satu anak: "Pelajaran DOM satu"
<p>memiliki satu anak: "Halo dunia!"
<h1>dan <p>merupakan saudara kandung
IKLAN

Menavigasi Antar Node
Anda dapat menggunakan properti node berikut untuk menavigasi antar node dengan JavaScript:

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling
Node Anak dan Nilai Node
Kesalahan umum dalam pemrosesan DOM adalah mengharapkan suatu simpul elemen berisi teks.

Contoh:
<title id="demo">DOM Tutorial</title>
Node elemen <title>(dalam contoh di atas) tidak berisi teks.

Berisi simpul teks dengan nilai "Tutorial DOM".

Nilai dari simpul teks dapat diakses melalui properti simpul innerHTML:

myTitle = document.getElementById("demo").innerHTML;
Mengakses properti innerHTML sama dengan mengakses properti nodeValue anak pertama:

myTitle = document.getElementById("demo").firstChild.nodeValue;
Mengakses anak pertama juga dapat dilakukan seperti ini:

myTitle = document.getElementById("demo").childNodes[0].nodeValue;
Semua (3) contoh berikut mengambil teks suatu <h1>elemen dan menyalinnya ke dalam <p>elemen:

Contoh
<html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
</script>

</body>
</html>
Contoh
<html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
</script>

</body>
</html>
Contoh
<html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02">Hello!</p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
</script>

</body>
</html>
HTML Dalam
Dalam tutorial ini kami menggunakan properti innerHTML untuk mengambil konten elemen HTML.

Namun, mempelajari metode lain di atas berguna untuk memahami struktur pohon dan navigasi DOM.

Node Akar DOM
Ada dua properti khusus yang memungkinkan akses ke dokumen lengkap:

document.body- Isi dokumen
document.documentElement- Dokumen lengkap
Contoh
<html>
<body>

<h2>JavaScript HTMLDOM</h2>
<p>Displaying document.body</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = document.body.innerHTML;
</script>

</body>
</html>
Contoh
<html>
<body>

<h2>JavaScript HTMLDOM</h2>
<p>Displaying document.documentElement</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
</script>

</body>
</html>
Properti nodeName
Properti nodeNamemenentukan nama suatu node.

nodeName hanya dapat dibaca
nodeName dari elemen node sama dengan nama tag
nodeName dari sebuah node atribut adalah nama atribut
nodeName dari node teks selalu #teks
nodeName dari node dokumen selalu #document
Contoh
<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
</script>
Catatan: nodeName selalu berisi nama tag elemen HTML dengan huruf kapital.

Properti nodeValue
Properti nodeValuemenentukan nilai suatu simpul.

nodeValue untuk elemen node adalahnull
nodeValue untuk node teks adalah teks itu sendiri
nodeValue untuk node atribut adalah nilai atribut
Properti nodeType
Properti nodeTypeini hanya baca. Properti ini mengembalikan tipe node.

Contoh
<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;
</script>
Properti nodeType yang paling penting adalah:

Node	Type	Example
ELEMENT_NODE	1	<h1 class="heading">W3Schools</h1>
ATTRIBUTE_NODE	2	 class = "heading" (deprecated)
TEXT_NODE	3	W3Schools
COMMENT_NODE	8	<!-- This is a comment -->
DOCUMENT_NODE	9	The HTML document itself (the parent of <html>)
DOCUMENT_TYPE_NODE	10	<!Doctype html>