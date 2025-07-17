Peristiwa Pengaturan Waktu JavaScript
123456789101112
JavaScript dapat dieksekusi dalam interval waktu.

Ini disebut peristiwa pengaturan waktu.

Waktu Acara
Objek tersebut windowmemungkinkan eksekusi kode pada interval waktu tertentu.

Interval waktu ini disebut peristiwa pengaturan waktu.

Dua metode utama yang digunakan dengan JavaScript adalah:

setTimeout(function, milliseconds)
Menjalankan suatu fungsi setelah menunggu sejumlah milidetik tertentu.

setInterval(function, milliseconds)
Sama seperti setTimeout(), tetapi mengulang eksekusi fungsi secara terus-menerus.
dan setTimeout()keduanya setInterval()merupakan metode objek HTML DOM Window.

Metode setTimeout()
window.setTimeout(function, milliseconds);
Metode ini window.setTimeout()dapat ditulis tanpa awalan jendela.

Parameter pertama adalah fungsi yang akan dieksekusi.

Parameter kedua menunjukkan jumlah milidetik sebelum eksekusi.

Contoh
Klik tombol. Tunggu 3 detik, dan halaman akan menampilkan pesan "Halo":

<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>
IKLAN

Bagaimana Menghentikan Eksekusi?
Metode ini clearTimeout()menghentikan eksekusi fungsi yang ditetapkan dalam setTimeout().

window.clearTimeout(timeoutVariable)
Metode ini window.clearTimeout()dapat ditulis tanpa awalan jendela.

Metode ini clearTimeout()menggunakan variabel yang dikembalikan dari setTimeout():

myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
Jika fungsi belum dieksekusi, Anda dapat menghentikan eksekusi dengan memanggil clearTimeout() metode:

Contoh
Contoh yang sama seperti di atas, tetapi dengan tambahan tombol "Berhenti":

<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>
Metode setInterval()
Metode ini setInterval()mengulang fungsi yang diberikan pada setiap interval waktu yang diberikan.

window.setInterval(function, milliseconds);
Metode ini window.setInterval()dapat ditulis tanpa awalan jendela.

Parameter pertama adalah fungsi yang akan dieksekusi.

Parameter kedua menunjukkan panjang interval waktu antara setiap eksekusi.

Contoh ini menjalankan fungsi yang disebut "myTimer" sekali setiap detik (seperti jam tangan digital).

Contoh
Menampilkan waktu saat ini:

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
Ada 1000 milidetik dalam satu detik.

Bagaimana Menghentikan Eksekusi?
Metode ini clearInterval()menghentikan eksekusi fungsi yang ditetapkan dalam metode setInterval().

window.clearInterval(timerVariable)
Metode ini window.clearInterval()dapat ditulis tanpa awalan jendela.

Metode ini clearInterval()menggunakan variabel yang dikembalikan dari setInterval():

let myVar = setInterval(function, milliseconds);
clearInterval(myVar);
Contoh
Contoh yang sama seperti di atas, tetapi kami telah menambahkan tombol "Hentikan waktu":

<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
let myVar = setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>
