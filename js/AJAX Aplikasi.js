Aplikasi XML
Bab ini menunjukkan beberapa aplikasi HTML yang menggunakan XML, HTTP, DOM, dan JavaScript.

Dokumen XML yang Digunakan
Dalam bab ini kita akan menggunakan file XML yang disebut "cd_catalog.xml" .

Menampilkan Data XML dalam Tabel HTML
Contoh ini mengulang setiap elemen <CD>, dan menampilkan nilai elemen <ARTIST> dan <TITLE> dalam tabel HTML:

Contoh
<table id="demo"></table>

<script>
function loadXMLDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const xmlDoc = xhttp.responseXML;
    const cd = xmlDoc.getElementsByTagName("CD");
    myFunction(cd);
  }
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}

function myFunction(cd) {
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd.length; i++) {
    table += "<tr><td>" +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
</script>

</body>
</html>
Untuk informasi lebih lanjut tentang penggunaan JavaScript dan XML DOM, kunjungi DOM Intro.

IKLAN

Menampilkan CD Pertama dalam Elemen div HTML
Contoh ini menggunakan fungsi untuk menampilkan elemen CD pertama dalam elemen HTML dengan id="showCD":

Contoh
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = xhttp.responseXML;
  const cd = xmlDoc.getElementsByTagName("CD");
  myFunction(cd, 0);
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function myFunction(cd, i) {
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " +
  cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
Navigasi Antar CD
Untuk menavigasi antar CD pada contoh di atas, buat fungsi next()dan previous():

Contoh
function next() {
  // display the next CD, unless you are on the last CD
  if (i < len-1) {
    i++;
    displayCD(i);
  }
}

function previous() {
  // display the previous CD, unless you are on the first CD
  if (i > 0) {
    i--;
    displayCD(i);
  }
}
Tampilkan Informasi Album Saat Mengklik CD
Contoh terakhir menunjukkan bagaimana Anda dapat menampilkan informasi album saat pengguna mengklik CD:

Contoh
function displayCD(i) {
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " +
  cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}