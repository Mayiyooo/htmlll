HTML DOM
Halaman ini mengajarkan Anda cara menemukan dan mengakses elemen HTML di halaman HTML.

Menemukan Elemen HTML
Seringkali, dengan JavaScript, Anda ingin memanipulasi elemen HTML.

Untuk melakukannya, Anda harus menemukan unsur-unsurnya terlebih dahulu. Ada beberapa cara untuk melakukannya:

Menemukan elemen HTML berdasarkan id
Menemukan elemen HTML berdasarkan nama tag
Menemukan elemen HTML berdasarkan nama kelas
Menemukan elemen HTML dengan pemilih CSS
Menemukan elemen HTML dengan koleksi objek HTML
Menemukan Elemen HTML berdasarkan Id
Cara termudah untuk menemukan elemen HTML di DOM adalah dengan menggunakan ID elemen.

Contoh ini menemukan elemen dengan id="intro":

Contoh
const element = document.getElementById("intro");
Jika elemen ditemukan, metode akan mengembalikan elemen sebagai objek (dalam elemen).

Jika elemen tidak ditemukan, elemen akan berisi null.

Menemukan Elemen HTML berdasarkan Nama Tag
Contoh ini menemukan semua <p>elemen:

Contoh
const element = document.getElementsByTagName("p");
Contoh ini menemukan elemen dengan id="main", lalu menemukan semua <p>elemen di dalam "main":

Contoh
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
IKLAN

Menemukan Elemen HTML berdasarkan Nama Kelas
Jika Anda ingin menemukan semua elemen HTML dengan nama kelas yang sama, gunakan getElementsByClassName().

Contoh ini mengembalikan daftar semua elemen dengan class="intro".

Contoh
const x = document.getElementsByClassName("intro");
Menemukan Elemen HTML dengan Pemilih CSS
Jika Anda ingin menemukan semua elemen HTML yang cocok dengan pemilih CSS tertentu (id, nama kelas, jenis, atribut, nilai atribut, dll), gunakan querySelectorAll()metode tersebut.

Contoh ini mengembalikan daftar semua <p>elemen dengan class="intro".

Contoh
const x = document.querySelectorAll("p.intro");
Menemukan Elemen HTML dengan Koleksi Objek HTML
Contoh ini menemukan elemen formulir dengan id="frm1", dalam koleksi formulir, dan menampilkan semua nilai elemen:

Contoh
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
