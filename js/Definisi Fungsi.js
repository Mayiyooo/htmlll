
Fungsi JavaScript didefinisikan dengan functionkata kunci.

Anda dapat menggunakan deklarasi fungsi atau ekspresi fungsi .

Deklarasi Fungsi
Sebelumnya dalam tutorial ini, Anda mempelajari bahwa fungsi dideklarasikan dengan sintaksis berikut:

function functionName(parameters) {
  // code to be executed
}
Fungsi yang dideklarasikan tidak langsung dieksekusi. Fungsi tersebut "disimpan untuk digunakan nanti", dan akan dieksekusi nanti, ketika dipanggil.

Contoh
function myFunction(a, b) {
  return a * b;
}
Titik koma digunakan untuk memisahkan pernyataan JavaScript yang dapat dieksekusi. Karena deklarasi
fungsi bukanlah pernyataan yang dapat dieksekusi, tidak umum untuk mengakhirinya dengan titik koma.

Ekspresi Fungsi
Fungsi JavaScript juga dapat didefinisikan menggunakan ekspresi .

Ekspresi fungsi dapat disimpan dalam variabel:

Contoh
const x = function (a, b) {return a * b};
Setelah ekspresi fungsi disimpan dalam variabel, variabel tersebut dapat digunakan sebagai fungsi:

Contoh
const x = function (a, b) {return a * b};
let z = x(4, 3);
Fungsi di atas sebenarnya adalah fungsi anonim (fungsi tanpa nama).

Fungsi yang disimpan dalam variabel tidak memerlukan nama fungsi. Fungsi tersebut selalu dipanggil menggunakan nama variabel.

Fungsi di atas diakhiri dengan titik koma karena merupakan bagian dari pernyataan yang dapat dieksekusi.

IKLAN

Konstruktor Fungsi()
Seperti yang Anda lihat pada contoh sebelumnya, fungsi JavaScript didefinisikan dengan functionkata kunci.

Fungsi juga dapat didefinisikan dengan konstruktor fungsi JavaScript bawaan yang disebut Function().

Contoh
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
Anda sebenarnya tidak perlu menggunakan konstruktor fungsi. Contoh di atas sama dengan penulisan:

Contoh
const myFunction = function (a, b) {return a * b};

let x = myFunction(4, 3);
Sering kali, Anda dapat menghindari penggunaan newkata kunci dalam JavaScript.

Fungsi Pengangkatan
Sebelumnya dalam tutorial ini, Anda mempelajari tentang "hoisting" ( JavaScript Hoisting ).

Hoisting adalah perilaku default JavaScript untuk memindahkan deklarasi ke bagian atas cakupan saat ini.

Hoisting berlaku untuk deklarasi variabel dan deklarasi fungsi.

Oleh karena itu, fungsi JavaScript dapat dipanggil sebelum dideklarasikan:

myFunction(5);

function myFunction(y) {
  return y * y;
}
Fungsi yang didefinisikan menggunakan ekspresi tidak diangkat.

Fungsi Pemanggilan Diri Sendiri
Ekspresi fungsi dapat dibuat "memanggil sendiri".

Ekspresi pemanggilan diri dipanggil (dimulai) secara otomatis, tanpa dipanggil.

Ekspresi fungsi akan dieksekusi secara otomatis jika ekspresi diikuti oleh ().

Anda tidak dapat memanggil sendiri suatu deklarasi fungsi.

Anda harus menambahkan tanda kurung di sekitar fungsi untuk menunjukkan bahwa itu adalah ekspresi fungsi:

Contoh
(function () {
  let x = "Hello!!";  // I will invoke myself
})();
Fungsi di atas sebenarnya adalah fungsi pemanggilan diri anonim (fungsi tanpa nama).

Fungsi Dapat Digunakan sebagai Nilai
Fungsi JavaScript dapat digunakan sebagai nilai:

Contoh
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3);
Fungsi JavaScript dapat digunakan dalam ekspresi:

Contoh
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3) * 2;
Fungsi adalah Objek
Operator typeofdalam JavaScript mengembalikan "fungsi" untuk fungsi.

Namun, fungsi JavaScript paling baik dijelaskan sebagai objek.

Fungsi JavaScript memiliki properti dan metode .

Properti arguments.lengthmengembalikan jumlah argumen yang diterima saat fungsi dipanggil:

Contoh
function myFunction(a, b) {
  return arguments.length;
}
Metode ini toString()mengembalikan fungsi sebagai string:

Contoh
function myFunction(a, b) {
  return a * b;
}

let text = myFunction.toString();
Fungsi yang didefinisikan sebagai properti suatu objek disebut metode untuk objek tersebut.
Fungsi yang dirancang untuk membuat objek baru disebut konstruktor objek.

Fungsi Panah
Fungsi panah memungkinkan sintaksis singkat untuk menulis ekspresi fungsi.

Anda tidak memerlukan functionkata kunci, returnkata kunci, dan tanda kurung kurawal .

Contoh
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;
Fungsi panah tidak memiliki this. Fungsi ini kurang cocok untuk mendefinisikan metode objek .

Fungsi panah tidak diangkat. Fungsi ini harus didefinisikan sebelum digunakan.

Menggunakan const lebih aman daripada menggunakan var, karena ekspresi fungsi selalu bernilai konstan.

Anda hanya dapat menghilangkan returnkata kunci dan tanda kurung kurawal jika fungsinya merupakan pernyataan tunggal. Oleh karena itu, sebaiknya selalu menjaganya:

Contoh
const x = (x, y) => { return x * y };
