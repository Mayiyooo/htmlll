Parameter Fungsi JavaScript
JavaScript functiontidak melakukan pemeriksaan apa pun pada nilai parameter (argumen).

Parameter dan Argumen Fungsi
Sebelumnya dalam tutorial ini, Anda mempelajari bahwa fungsi dapat memiliki parameter :

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
Parameter fungsi adalah nama yang tercantum dalam definisi fungsi.

Argumen fungsi adalah nilai nyata yang diteruskan ke (dan diterima oleh) fungsi.

Aturan Parameter
Definisi fungsi JavaScript tidak menentukan tipe data untuk parameter.

Fungsi JavaScript tidak melakukan pemeriksaan tipe pada argumen yang dilewatkan.

Fungsi JavaScript tidak memeriksa jumlah argumen yang diterima.

Parameter Default
Jika suatu fungsi dipanggil dengan argumen yang hilang (kurang dari yang dideklarasikan), nilai yang hilang akan ditetapkan ke undefined.

Kadang-kadang hal ini dapat diterima, tetapi terkadang lebih baik untuk menetapkan nilai default ke parameter:

Contoh
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
Nilai Parameter Default
ES6 memperbolehkan parameter fungsi memiliki nilai default.

Contoh
Jika y tidak lolos atau tidak terdefinisi, maka y = 10.

function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);
Parameter Istirahat Fungsi
Parameter sisanya (...) memungkinkan suatu fungsi untuk memperlakukan argumen dalam jumlah tak terbatas sebagai suatu array:

Contoh
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
IKLAN

Objek Argumen
Fungsi JavaScript memiliki objek bawaan yang disebut objek argumen.

Objek argumen berisi serangkaian argumen yang digunakan saat fungsi dipanggil (dipanggil).

Dengan cara ini Anda cukup menggunakan fungsi untuk menemukan (misalnya) nilai tertinggi dalam daftar angka:

Contoh
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
Atau buat fungsi untuk menjumlahkan semua nilai input:

Contoh
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}