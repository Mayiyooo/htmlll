
Pekerja web adalah JavaScript yang berjalan di latar belakang, tanpa memengaruhi kinerja halaman.

Apa itu Web Worker?
Saat menjalankan skrip di halaman HTML, halaman tersebut menjadi tidak responsif hingga skrip selesai.

Web worker adalah JavaScript yang berjalan di latar belakang, terlepas dari skrip lain, tanpa memengaruhi kinerja halaman. Anda dapat terus melakukan apa pun yang Anda inginkan: mengklik, memilih sesuatu, dll., selagi web worker berjalan di latar belakang.

Dukungan Peramban
Angka dalam tabel menentukan versi browser pertama yang sepenuhnya mendukung Web Workers:

Chrome 4	IE 10	Firefox 3.5	Safari 4	Opera 11.5
Jan 2010	Sep 2012	Jun 2009	Jun 2009	Jun 2011
Contoh Pekerja Web
Contoh berikut ini membuat pekerja web sederhana yang menghitung angka di latar belakang:

Contoh
Count numbers:
Start Worker Stop Worker

Periksa Dukungan Pekerja Web
Sebelum membuat pekerja web, periksa apakah browser pengguna mendukungnya:

if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
  // Some code.....
} else {
  // Sorry! No Web Worker support..
}
IKLAN

Membuat File Pekerja Web
Sekarang, mari kita buat pekerja web kita dalam JavaScript eksternal.

Di sini, kita membuat skrip yang penting. Skrip ini disimpan dalam berkas "demo_workers.js":

let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();
Bagian penting dari kode di atas adalah postMessage()metode - yang digunakan untuk mengirim pesan kembali ke halaman HTML.

Catatan: Biasanya pekerja web tidak digunakan untuk skrip sederhana seperti itu, tetapi untuk tugas yang lebih intensif pada CPU.

Membuat Objek Pekerja Web
Sekarang setelah kita memiliki berkas pekerja web, kita perlu memanggilnya dari halaman HTML.

Baris berikut memeriksa apakah pekerja sudah ada. Jika tidak, objek pekerja web baru akan dibuat dan kode akan dijalankan di "demo_workers.js":

if (typeof(w) == "undefined") {
  w = new Worker("demo_workers.js");
}
Kemudian kita dapat mengirim dan menerima pesan dari pekerja web.

Tambahkan pendengar acara "onmessage" ke pekerja web.

w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};
Ketika pekerja web memposting pesan, kode di dalam event listener dieksekusi. Data dari pekerja web disimpan di event.data.

Mengakhiri Pekerja Web
Saat objek pekerja web dibuat, objek tersebut akan terus mendengarkan pesan (bahkan setelah skrip eksternal selesai) hingga diakhiri.

Untuk menghentikan pekerja web, dan membebaskan sumber daya browser/komputer, gunakan terminate()metode:

w.terminate();
Gunakan kembali Web Worker
Jika Anda menetapkan variabel pekerja ke tidak terdefinisi, setelah diakhiri, Anda dapat menggunakan kembali kode tersebut:

w = undefined;
Contoh Kode Web Worker Lengkap
Kita telah melihat kode Worker di berkas .js. Berikut kode untuk halaman HTML:

Contoh
<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>

<script>
let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>
