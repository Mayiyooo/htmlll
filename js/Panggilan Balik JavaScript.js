Panggilan Balik JavaScript
"Saya akan menelepon lagi nanti!"

Panggilan balik adalah fungsi yang dilewatkan sebagai argumen ke fungsi lain

Teknik ini memungkinkan suatu fungsi memanggil fungsi lain

Fungsi panggilan balik dapat dijalankan setelah fungsi lain selesai

Urutan Fungsi
Fungsi JavaScript dieksekusi sesuai urutan pemanggilannya. Bukan sesuai urutan pendefinisiannya.

Contoh ini akan menampilkan "Selamat Tinggal":

Contoh
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

Contoh ini akan menampilkan "Halo":

Contoh
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();

Kontrol Urutan
Terkadang Anda ingin memiliki kontrol yang lebih baik atas kapan menjalankan suatu fungsi.

Misalkan Anda ingin melakukan perhitungan, lalu menampilkan hasilnya.

Anda dapat memanggil fungsi kalkulator ( myCalculator), menyimpan hasilnya, lalu memanggil fungsi lain ( myDisplayer) untuk menampilkan hasilnya:

Contoh
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

Atau, Anda dapat memanggil fungsi kalkulator ( myCalculator), dan membiarkan fungsi kalkulator memanggil fungsi tampilan ( myDisplayer):

Contoh
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);

Masalah dengan contoh pertama di atas adalah Anda harus memanggil dua fungsi untuk menampilkan hasilnya.

Masalah dengan contoh kedua adalah Anda tidak dapat mencegah fungsi kalkulator menampilkan hasilnya.

Sekarang saatnya untuk melakukan panggilan balik.

IKLAN

Panggilan Balik JavaScript
Panggilan balik adalah fungsi yang dilewatkan sebagai argumen ke fungsi lain.

Dengan menggunakan panggilan balik, Anda dapat memanggil fungsi kalkulator ( myCalculator) dengan panggilan balik ( myCallback), dan membiarkan fungsi kalkulator menjalankan panggilan balik setelah perhitungan selesai:

Contoh
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
Dalam contoh di atas, myDisplayerdisebut fungsi panggilan balik .

Ini diteruskan myCalculator()sebagai argumen .

Catatan
Saat Anda meneruskan suatu fungsi sebagai argumen, ingatlah untuk tidak menggunakan tanda kurung.

Kanan: myCalculator(5, 5, myDisplayer);

Salah:myCalculator(5, 5, myDisplayer());

Contoh
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}