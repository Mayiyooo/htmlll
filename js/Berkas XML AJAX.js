
AJAX dapat digunakan untuk komunikasi interaktif dengan berkas XML.

Contoh AJAX XML
Contoh berikut akan menunjukkan bagaimana halaman web dapat mengambil informasi dari file XML dengan AJAX:

Contoh
Get CD info

Contoh Dijelaskan
Ketika pengguna mengklik tombol "Dapatkan info CD" di atas, loadDoc() fungsi tersebut dijalankan.

Fungsi tersebut loadDoc()membuat XMLHttpRequestobjek, menambahkan fungsi yang akan dieksekusi saat respons server siap, dan mengirimkan permintaan ke server.

Ketika respons server siap, tabel HTML dibangun, node (elemen) diekstraksi dari file XML, dan akhirnya memperbarui elemen "demo" dengan tabel HTML yang diisi dengan data XML:

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {myFunction(this);}
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}