
"async dan await membuat janji lebih mudah ditulis"

async membuat fungsi mengembalikan Promise

await membuat suatu fungsi menunggu Promise

Sintaks Asinkron
Kata kunci asyncsebelum suatu fungsi membuat fungsi tersebut mengembalikan janji:

Contoh
async function myFunction() {
  return "Hello";
}
Sama dengan:

function myFunction() {
  return Promise.resolve("Hello");
}
Berikut cara menggunakan Promise:

myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
Contoh
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

Atau lebih sederhana, karena Anda mengharapkan nilai normal (respons normal, bukan kesalahan):

Contoh
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);}
);

Sintaks Await
Kata awaitkunci hanya dapat digunakan di dalam suatu asyncfungsi.

Kata kunci tersebut awaitmembuat fungsi menghentikan sementara eksekusi dan menunggu janji yang terselesaikan sebelum melanjutkannya:

let value = await promise;
ADVERTISEMENT

Contoh
Mari kita mulai perlahan dan pelajari cara menggunakannya.

Sintaks Dasar
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

Kedua argumen (resolve dan reject) telah ditetapkan sebelumnya oleh JavaScript.

Kami tidak akan membuatnya, tetapi memanggil salah satunya ketika fungsi pelaksana sudah siap.

Seringkali kita tidak memerlukan fungsi penolakan.

Contoh tanpa penolakan
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

Menunggu Waktu Habis
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

Menunggu File
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();