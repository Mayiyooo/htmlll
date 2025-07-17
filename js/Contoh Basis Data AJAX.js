Contoh Basis Data AJAX
AJAX dapat digunakan untuk komunikasi interaktif dengan basis data.

Contoh Basis Data AJAX
Contoh berikut akan menunjukkan bagaimana halaman web dapat mengambil informasi dari database dengan AJAX:

Contoh

Select a customer:

Customer info will be listed here...

Contoh Dijelaskan - Fungsi showCustomer()
Ketika pengguna memilih pelanggan dari daftar dropdown di atas, sebuah fungsi bernama showCustomer()akan dijalankan. Fungsi ini dipicu oleh onchangeperistiwa berikut:

TampilkanPelanggan
function showCustomer(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getcustomer.php?q="+str);
  xhttp.send();
}
Fungsi ini showCustomer()melakukan hal berikut:

Periksa apakah pelanggan dipilih
Buat objek XMLHttpRequest
Buat fungsi yang akan dieksekusi saat respons server siap
Kirim permintaan ke file di server
Perhatikan bahwa parameter (q) ditambahkan ke URL (dengan konten daftar dropdown)
IKLAN

Halaman Server AJAX
Halaman pada server yang dipanggil oleh JavaScript di atas adalah file PHP yang disebut "getcustomer.php".

Kode sumber dalam "getcustomer.php" menjalankan kueri terhadap database, dan mengembalikan hasilnya dalam tabel HTML:

<?php
$mysqli = new mysqli("servername", "username", "password", "dbname");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>PostalCode</th>";
echo "<td>" . $pcode . "</td>";
echo "<th>Country</th>";
echo "<td>" . $country . "</td>";
echo "</tr>";
echo "</table>";
?>
