
JavaScript memiliki tiga jenis kotak popup: Kotak peringatan, Kotak konfirmasi, dan Kotak perintah.

Kotak Peringatan
Kotak peringatan sering digunakan jika Anda ingin memastikan informasi sampai ke pengguna.

Saat kotak peringatan muncul, pengguna harus mengeklik "OK" untuk melanjutkan.

Sintaksis
window.alert("sometext");
Metode ini window.alert()dapat ditulis tanpa awalan jendela.

Contoh
alert("I am an alert box!");
Kotak Konfirmasi
Kotak konfirmasi sering digunakan jika Anda ingin pengguna memverifikasi atau menerima sesuatu.

Saat kotak konfirmasi muncul, pengguna harus mengeklik "OK" atau "Batal" untuk melanjutkan.

Jika pengguna mengklik "OK", kotak akan menampilkan nilai true . Jika pengguna mengklik "Cancel", kotak akan menampilkan nilai false .

Sintaksis
window.confirm("sometext");
Metode ini window.confirm()dapat ditulis tanpa awalan jendela.

Contoh
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
IKLAN

Kotak Prompt
Kotak perintah sering digunakan jika Anda ingin pengguna memasukkan nilai sebelum memasuki halaman.

Saat kotak perintah muncul, pengguna harus mengklik "OK" atau "Batal" untuk melanjutkan setelah memasukkan nilai input.

Jika pengguna mengklik "OK", kotak akan mengembalikan nilai input. Jika pengguna mengklik "Batal", kotak akan mengembalikan null.

Sintaksis
window.prompt("sometext","defaultText");
Metode ini window.prompt()dapat ditulis tanpa awalan jendela.

Contoh
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
Jeda Baris
Untuk menampilkan jeda baris di dalam kotak pop-up, gunakan garis miring terbalik diikuti oleh karakter n.

Contoh
alert("Hello\nHow are you?");
