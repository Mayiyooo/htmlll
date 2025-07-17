Cakupan JavaScript
Cakupan menentukan aksesibilitas (visibilitas) variabel.

Variabel JavaScript memiliki 3 jenis cakupan:

Cakupan blok
Ruang lingkup fungsi
Cakupan global
Cakupan Blok
Sebelum ES6 (2015), variabel JavaScript hanya memiliki Cakupan Global dan Cakupan Fungsi .

ES6 memperkenalkan dua kata kunci JavaScript baru yang penting: letdan const.

Kedua kata kunci ini menyediakan Cakupan Blok dalam JavaScript.

Variabel yang dideklarasikan di dalam blok {} tidak dapat diakses dari luar blok:

Contoh
{
  let x = 2;
}
// x can NOT be used here
Variabel yang dideklarasikan dengan varkata kunci TIDAK DAPAT memiliki cakupan blok.

Variabel yang dideklarasikan di dalam blok { } dapat diakses dari luar blok.

Contoh
{
  var x = 2;
}
// x CAN be used here
Cakupan Lokal
Variabel yang dideklarasikan dalam fungsi JavaScript, bersifat LOKAL terhadap fungsi tersebut:

Contoh
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
Variabel lokal memiliki Ruang Lingkup Fungsi :

Mereka hanya dapat diakses dari dalam fungsi tersebut.

Karena variabel lokal hanya dikenali di dalam fungsinya, variabel dengan nama yang sama dapat digunakan dalam fungsi yang berbeda.

Variabel lokal dibuat saat fungsi dimulai, dan dihapus saat fungsi selesai.

Ruang Lingkup Fungsi
JavaScript memiliki cakupan fungsi: Setiap fungsi menciptakan cakupan baru.

Variabel yang didefinisikan di dalam suatu fungsi tidak dapat diakses (terlihat) dari luar fungsi.

Variabel yang dideklarasikan dengan var, let dan constcukup mirip ketika dideklarasikan di dalam suatu fungsi.

Mereka semua memiliki Ruang Lingkup Fungsi :

function myFunction() {
  var carName = "Volvo";   // Function Scope
}
function myFunction() {
  let carName = "Volvo";   // Function Scope
}
function myFunction() {
  const carName = "Volvo";   // Function Scope
}
Variabel JavaScript Global
Variabel yang dideklarasikan di luar suatu fungsi menjadi GLOBAL .

Contoh
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
Variabel global memiliki Cakupan Global :

Semua skrip dan fungsi pada halaman web dapat mengaksesnya. 

Cakupan Global
Variabel yang dideklarasikan secara Global (di luar fungsi apa pun) memiliki Cakupan Global .

Variabel global dapat diakses dari mana saja dalam program JavaScript.

Variabel yang dideklarasikan dengan var, let dan constcukup mirip ketika dideklarasikan di luar blok.

Mereka semua memiliki Cakupan Global :

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope
Variabel JavaScript
Dalam JavaScript, objek dan fungsi juga merupakan variabel.

Cakupan menentukan aksesibilitas variabel, objek, dan fungsi dari berbagai bagian kode.

IKLAN

Otomatis Global
Jika Anda menetapkan nilai ke variabel yang belum dideklarasikan, variabel tersebut akan secara otomatis menjadi variabel GLOBAL .

Contoh kode ini akan mendeklarasikan variabel global carName, bahkan jika nilainya ditetapkan di dalam suatu fungsi.

Contoh
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
Mode Ketat
Semua peramban modern mendukung menjalankan JavaScript dalam "Mode Ketat".

Anda akan mempelajari lebih lanjut tentang cara menggunakan mode ketat di bab selanjutnya dari tutorial ini.

Dalam "Mode Ketat", variabel yang tidak dideklarasikan tidak secara otomatis bersifat global.

Variabel Global dalam HTML
Dengan JavaScript, cakupan global adalah lingkungan JavaScript.

Dalam HTML, cakupan global adalah objek jendela.

Variabel global yang didefinisikan dengan varkata kunci milik objek jendela:

Contoh
var carName = "Volvo";
// code here can use window.carName
Variabel global yang didefinisikan dengan letkata kunci tidak termasuk dalam objek jendela:

Contoh
let carName = "Volvo";
// code here can not use window.carName
Peringatan
JANGAN membuat variabel global kecuali Anda bermaksud melakukannya.

Variabel global (atau fungsi) Anda dapat menimpa variabel (atau fungsi) jendela.
Fungsi apa pun, termasuk objek jendela, dapat menimpa variabel dan fungsi global Anda.

Masa Pakai Variabel JavaScript
Masa pakai variabel JavaScript dimulai saat dideklarasikan.

Variabel fungsi (lokal) dihapus ketika fungsi selesai.

Di peramban web, variabel global dihapus saat Anda menutup jendela peramban (atau tab).

Argumen Fungsi
Argumen fungsi (parameter) berfungsi sebagai variabel lokal di dalam fungsi.

