Kesalahan JavaScript
Lempar, dan Coba...Tangkap...Akhirnya
Pernyataan tersebut trymendefinisikan blok kode untuk dijalankan (untuk dicoba).

Pernyataan tersebut catchmendefinisikan blok kode untuk menangani kesalahan apa pun.

Pernyataan tersebut finallymendefinisikan blok kode untuk dijalankan tanpa mempedulikan hasilnya.

Pernyataan tersebut throwmendefinisikan kesalahan khusus.

Kesalahan Akan Terjadi!
Saat menjalankan kode JavaScript, berbagai kesalahan dapat terjadi.

Kesalahan dapat berupa kesalahan pengkodean yang dilakukan programmer, kesalahan karena input yang salah, dan hal-hal tak terduga lainnya.

Contoh
Dalam contoh ini, kami salah mengeja "alert" menjadi "adddlert" untuk sengaja menghasilkan kesalahan:

<p id="demo"></p>

<script>
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>
JavaScript menangkap adddlert sebagai kesalahan, dan mengeksekusi kode tangkapan untuk menanganinya.

JavaScript mencoba dan menangkap
Pernyataan ini trymemungkinkan Anda menentukan blok kode yang akan diuji kesalahannya saat sedang dieksekusi.

Pernyataan ini catchmemungkinkan Anda menentukan blok kode yang akan dieksekusi, jika terjadi kesalahan pada blok try.

Pernyataan JavaScript trydan catch datang berpasangan:

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
IKLAN

JavaScript Melempar Kesalahan
Ketika kesalahan terjadi, JavaScript biasanya akan berhenti dan menghasilkan pesan kesalahan.

Istilah teknis untuk ini adalah: JavaScript akan memunculkan pengecualian (memunculkan kesalahan) .

JavaScript sebenarnya akan membuat objek Error dengan dua properti: nama dan pesan .

Pernyataan lemparan
Pernyataan ini throwmemungkinkan Anda membuat kesalahan khusus.

Secara teknis Anda dapat melempar pengecualian (melempar kesalahan) .

Pengecualiannya bisa berupa JavaScript String, a Number, a Booleanatau Object:

throw "Too big";    // throw a text
throw 500;          // throw a number
Jika Anda menggunakan throwbersama-sama dengan trydan catch, Anda dapat mengontrol aliran program dan menghasilkan pesan kesalahan khusus.

Contoh Validasi Input
Contoh ini memeriksa input. Jika nilainya salah, pengecualian (err) akan ditampilkan.

Pengecualian (err) ditangkap oleh pernyataan catch dan pesan kesalahan khusus ditampilkan:

<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>
</html>
Validasi HTML
Kode di atas hanyalah sebuah contoh.

Peramban modern sering kali menggunakan kombinasi JavaScript dan validasi HTML bawaan, menggunakan aturan validasi yang telah ditentukan sebelumnya yang didefinisikan dalam atribut HTML:

<input id="demo" type="number" min="5" max="10" step="1">
Anda dapat membaca lebih lanjut tentang validasi formulir di bab selanjutnya dari tutorial ini.

Pernyataan Akhirnya
Pernyataan ini finallymemungkinkan Anda mengeksekusi kode, setelah try dan catch, apa pun hasilnya:

Sintaksis
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
Contoh
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
Objek Kesalahan
JavaScript memiliki objek kesalahan bawaan yang menyediakan informasi kesalahan saat kesalahan terjadi.

Objek kesalahan menyediakan dua properti yang berguna: nama dan pesan.

Properti Objek Kesalahan
Milik	Keterangan
nama	Menetapkan atau mengembalikan nama kesalahan
pesan	Mengatur atau mengembalikan pesan kesalahan (string)
Nilai Nama Kesalahan
Enam nilai berbeda dapat dikembalikan oleh properti nama kesalahan:

Nama Kesalahan	Keterangan
Kesalahan Evaluasi	Telah terjadi kesalahan pada fungsi eval()
Kesalahan Rentang	Telah terjadi angka “di luar jangkauan”
Kesalahan Referensi	Telah terjadi referensi ilegal
Kesalahan Sintaksis	Telah terjadi kesalahan sintaksis
Kesalahan Tipe	Telah terjadi kesalahan tipe
Kesalahan URI	Telah terjadi kesalahan pada encodeURI()
Enam nilai yang berbeda dijelaskan di bawah ini.

Kesalahan Evaluasi
Menunjukkan EvalErrorkesalahan dalam fungsi eval().

Versi JavaScript yang lebih baru tidak menampilkan EvalError. Gunakan SyntaxError sebagai gantinya.

Kesalahan Rentang
A RangeErrordilemparkan jika Anda menggunakan angka yang berada di luar rentang nilai legal.

Misalnya: Anda tidak dapat menetapkan jumlah digit signifikan suatu angka menjadi 500.

Contoh
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
Kesalahan Referensi
A ReferenceErrordilemparkan jika Anda menggunakan (referensi) variabel yang belum dideklarasikan:

Contoh
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
Kesalahan Sintaksis
A SyntaxErrordilemparkan jika Anda mencoba mengevaluasi kode dengan kesalahan sintaksis.

Contoh
try {
  eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
Kesalahan Ketik
A TypeErrordilemparkan jika operan atau argumen tidak sesuai dengan tipe yang diharapkan oleh operator atau fungsi.

Contoh
let num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
Kesalahan URI (Pengidentifikasi Sumber Daya Seragam)
A URIErrordilemparkan jika Anda menggunakan karakter ilegal dalam fungsi URI:

Contoh
try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}