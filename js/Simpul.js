HTML DOM (Node)
Menambah dan Menghapus Node (Elemen HTML)

Membuat Elemen HTML Baru (Node)
Untuk menambahkan elemen baru ke HTML DOM, Anda harus membuat elemen (simpul elemen) terlebih dahulu, lalu menambahkannya ke elemen yang sudah ada.

 Contoh
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>
Contoh Dijelaskan 
Kode ini membuat elemen baru <p>:

const para = document.createElement("p");
Untuk menambahkan teks ke <p>elemen, Anda harus membuat simpul teks terlebih dahulu. Kode ini membuat simpul teks:

const node = document.createTextNode("This is a new paragraph.");
Kemudian Anda harus menambahkan simpul teks ke <p>elemen:

para.appendChild(node);
Terakhir Anda harus menambahkan elemen baru ke elemen yang sudah ada.

Kode ini menemukan elemen yang ada:

const element = document.getElementById("div1");
Kode ini menambahkan elemen baru ke elemen yang sudah ada:

element.appendChild(para);
IKLAN

Membuat Elemen HTML baru - insertBefore()
Metode appendChild()pada contoh sebelumnya menambahkan elemen baru sebagai anak terakhir induknya.

Jika Anda tidak menginginkannya, Anda dapat menggunakan insertBefore()metode:

Contoh
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);
</script>
Menghapus Elemen HTML yang Ada
Untuk menghapus elemen HTML, gunakan remove() metode:

Contoh
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const elmnt = document.getElementById("p1"); elmnt.remove();
</script>
Contoh Dijelaskan 
Dokumen HTML berisi <div>elemen dengan dua simpul anak (dua <p> elemen):

<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
Temukan elemen yang ingin Anda hapus:

const elmnt = document.getElementById("p1");
Kemudian jalankan metode remove() pada elemen tersebut:

elmnt.remove();
Metode ini remove()tidak berfungsi pada peramban lama, lihat contoh di bawah untuk mengetahui cara menggunakannya removeChild().

Menghapus Node Anak
Untuk browser yang tidak mendukung remove()metode ini, Anda harus menemukan simpul induk untuk menghapus elemen:

Contoh
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>
Contoh Dijelaskan 
Dokumen HTML ini berisi <div>elemen dengan dua simpul anak (dua <p> elemen):

<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
Temukan elemen dengan id="div1":

const parent = document.getElementById("div1");
Temukan <p>elemen dengan id="p1":

const child = document.getElementById("p1");
Pisahkan anak dari induknya:

parent.removeChild(child);
Berikut ini adalah solusi umum: Temukan anak yang ingin Anda hapus, dan gunakan parentNodepropertinya untuk menemukan induknya:

const child = document.getElementById("p1");
child.parentNode.removeChild(child);
Mengganti Elemen HTML 
Untuk mengganti elemen ke HTML DOM, gunakan replaceChild()metode:

Contoh
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>