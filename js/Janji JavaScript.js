Janji JavaScript
"Saya Menjanjikan Hasil!"

"Memproduksi kode" adalah kode yang membutuhkan waktu

"Mengonsumsi kode" adalah kode yang harus menunggu hasilnya

Promise adalah sebuah Objek yang menghubungkan kode Produksi dan kode Konsumsi

Objek Janji JavaScript
Promise memuat kode produksi dan panggilan ke kode konsumsi:

Sintaks Janji
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
Ketika kode produksi memperoleh hasil, ia harus memanggil salah satu dari dua panggilan balik:

Kapan	Panggilan
Kesuksesan	myResolve(nilai hasil)
Kesalahan	myReject(objek kesalahan)
Properti Objek Janji
Objek JavaScript Promise dapat berupa:

Tertunda
Terpenuhi
Ditolak
Objek Promise mendukung dua properti: state dan result .

Selama objek Promise "tertunda" (berfungsi), hasilnya tidak terdefinisi.

Ketika suatu objek Promise "terpenuhi", hasilnya adalah sebuah nilai.

Jika suatu objek Promise "ditolak", hasilnya adalah objek kesalahan.

myPromise.state	myPromise.result
"tertunda"	belum diartikan
"terpenuhi"	nilai hasil
"ditolak"	objek kesalahan
Anda tidak dapat mengakses properti Promise state dan result .

Anda harus menggunakan metode Promise untuk menangani janji.

Janji Bagaimana Caranya
Berikut cara menggunakan Promise:

myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
Promise.then() mengambil dua argumen, panggilan balik untuk keberhasilan dan satu lagi untuk kegagalan.

Keduanya bersifat opsional, jadi Anda dapat menambahkan panggilan balik untuk keberhasilan atau kegagalan saja.

Contoh
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

IKLAN

Contoh Janji JavaScript
Untuk menunjukkan penggunaan promise, kita akan menggunakan contoh callback dari bab sebelumnya:

Menunggu Waktu Habis
Menunggu File
Menunggu Waktu Habis
Contoh Penggunaan Callback
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

Contoh Penggunaan Promise
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});

Menunggu berkas
Contoh penggunaan Callback
function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);

Contoh penggunaan Promise
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);