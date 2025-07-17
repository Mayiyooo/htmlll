Contoh AJAX PHP
AJAX digunakan untuk membuat aplikasi yang lebih interaktif.

Contoh AJAX PHP
Contoh berikut menunjukkan bagaimana halaman web dapat berkomunikasi dengan server web saat pengguna mengetik karakter di kolom input:

Contoh
Start typing a name in the input field below:

Suggestions:

First name: 


Contoh Dijelaskan
Dalam contoh di atas, saat pengguna mengetik karakter di kolom input, fungsi yang dipanggil showHint()dieksekusi.

Fungsi dipicu oleh onkeyupperistiwa.

Berikut kodenya:

Contoh
<p>Start typing a name in the input field below:</p>
<p>Suggestions: <span id="txtHint"></span></p>

<form>
First name: <input type="text" onkeyup="showHint(this.value)">
</form>

<script>
function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  xmlhttp.open("GET", "gethint.php?q=" + str);
  xmlhttp.send();
  }
}
</script>
Penjelasan kode:

Pertama, periksa apakah kolom input kosong (str.length == 0). Jika kosong, hapus isi placeholder txtHint dan keluar dari fungsi.

Namun, jika kolom input tidak kosong, lakukan hal berikut:

Buat objek XMLHttpRequest
Buat fungsi yang akan dieksekusi saat respons server siap
Kirim permintaan ke file PHP (gethint.php) di server
Perhatikan bahwa parameter q ditambahkan gethint.php?q="+str
Variabel str menyimpan konten bidang input
IKLAN

File PHP - "gethint.php"
Berkas PHP memeriksa serangkaian nama, dan mengembalikan nama terkait ke peramban:

<?php
// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?>