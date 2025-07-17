Formulir JavaScript
Validasi Formulir JavaScript
Validasi formulir HTML dapat dilakukan dengan JavaScript.

Jika kolom formulir (fname) kosong, fungsi ini akan mengirimkan pesan dan mengembalikan false untuk mencegah formulir dikirimkan:

Contoh JavaScript
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
Fungsi ini dapat dipanggil saat formulir dikirimkan:

Contoh Formulir HTML
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
JavaScript Dapat Memvalidasi Input Numerik
JavaScript sering digunakan untuk memvalidasi masukan numerik:

Silakan masukkan angka antara 1 dan 10

 Kirim
IKLAN

Validasi Formulir HTML Otomatis
Validasi formulir HTML dapat dilakukan secara otomatis oleh browser:

Jika bidang formulir (fname) kosong, requiredatribut tersebut mencegah formulir ini dikirimkan:

Contoh Formulir HTML
<form action="/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>
Validasi formulir HTML otomatis tidak berfungsi di Internet Explorer 9 atau versi sebelumnya.

Validasi Data
Validasi data adalah proses untuk memastikan bahwa masukan pengguna bersih, benar, dan berguna.

Tugas validasi yang umum adalah:

apakah pengguna telah mengisi semua kolom yang diperlukan?
apakah pengguna telah memasukkan tanggal yang valid?
apakah pengguna telah memasukkan teks dalam kolom numerik?
Paling sering, tujuan validasi data adalah untuk memastikan masukan pengguna yang benar.

Validasi dapat didefinisikan dengan banyak metode berbeda, dan diterapkan dalam banyak cara berbeda.

Validasi sisi server dilakukan oleh server web, setelah masukan dikirim ke server.

Validasi sisi klien dilakukan oleh peramban web, sebelum masukan dikirim ke server web.

Validasi Kendala HTML
HTML5 memperkenalkan konsep validasi HTML baru yang disebut validasi kendala .

Validasi kendala HTML didasarkan pada:

Atribut Input HTML Validasi Kendala
Validasi kendala CSS Pseudo Selector
Validasi kendala Properti dan Metode DOM
Atribut Input HTML Validasi Kendala
Attribute	Description
disabled	Specifies that the input element should be disabled
max	Specifies the maximum value of an input element
min	Specifies the minimum value of an input element
pattern	Specifies the value pattern of an input element
required	Specifies that the input field requires an element
type 	Specifies the type of an input element
Untuk daftar lengkap, buka Atribut Input HTML .

Validasi Kendala CSS Pseudo Selector
Selector	Description
:disabled	Selects input elements with the "disabled" attribute specified
:invalid	Selects input elements with invalid values
:optional	Selects input elements with no "required" attribute specified
:required	Selects input elements with the "required" attribute specified
:valid	Selects input elements with valid values
Untuk daftar lengkap, kunjungi Kelas Pseudo CSS .

