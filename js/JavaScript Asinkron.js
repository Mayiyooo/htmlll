JavaScript Asinkron
"Saya akan menyelesaikannya nanti!"

Fungsi yang berjalan secara paralel dengan fungsi lain disebut asynchronous

Contoh yang bagus adalah JavaScript setTimeout()

JavaScript Asinkron
Contoh-contoh yang digunakan pada bab sebelumnya sangat disederhanakan.

Tujuan dari contoh-contoh ini adalah untuk menunjukkan sintaksis fungsi panggilan balik:

Contoh
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

Dalam contoh di atas, myDisplayeradalah nama suatu fungsi.

Ini diteruskan myCalculator()sebagai argumen.

Di dunia nyata, panggilan balik paling sering digunakan dengan fungsi asinkron.

Contoh tipikal adalah JavaScript setTimeout().

Menunggu Waktu Habis
Saat menggunakan fungsi JavaScript setTimeout(), Anda dapat menentukan fungsi panggilan balik untuk dieksekusi saat batas waktu:

Contoh
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}

Dalam contoh di atas, myFunctiondigunakan sebagai panggilan balik.

myFunctionditeruskan setTimeout()sebagai argumen.

3000 adalah jumlah milidetik sebelum batas waktu, jadi myFunction()akan dipanggil setelah 3 detik.

Catatan
Saat Anda meneruskan suatu fungsi sebagai argumen, ingatlah untuk tidak menggunakan tanda kurung.

Kanan: setTimeout(myFunction, 3000);

Salah:setTimeout(fungsi saya(), 3000);

Daripada meneruskan nama suatu fungsi sebagai argumen ke fungsi lain, Anda selalu dapat meneruskan seluruh fungsi sebagai gantinya:

Contoh
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

Dalam contoh di atas, function(){ myFunction("I love You !!!"); } digunakan sebagai panggilan balik. Ini adalah fungsi yang lengkap. Fungsi lengkap diteruskan ke setTimeout() sebagai argumen.

3000 adalah jumlah milidetik sebelum batas waktu, jadi myFunction()akan dipanggil setelah 3 detik.

Menunggu Interval:
Saat menggunakan fungsi JavaScript setInterval(), Anda dapat menentukan fungsi panggilan balik yang akan dijalankan untuk setiap interval:

Contoh
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}