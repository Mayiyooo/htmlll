Pernyataan Switch JavaScript
Pernyataan ini switchdigunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda.

Pernyataan Switch JavaScript
Gunakan switchpernyataan untuk memilih satu dari banyak blok kode yang akan dieksekusi.

Sintaksis
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
Beginilah cara kerjanya:

Ekspresi switch dievaluasi satu kali.
Nilai ekspresi dibandingkan dengan nilai setiap kasus.
Jika ada kecocokan, blok kode terkait akan dieksekusi.
Jika tidak ada yang cocok, blok kode default akan dieksekusi.
Contoh
Metode ini getDay()mengembalikan hari dalam seminggu sebagai angka antara 0 dan 6.

(Minggu=0, Senin=1, Selasa=2..)

Contoh ini menggunakan nomor hari dalam seminggu untuk menghitung nama hari dalam seminggu:

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
Hasil hari ini adalah:

Wednesday

Kata Kunci Istirahat
Ketika JavaScript mencapai suatu break kata kunci, ia keluar dari blok switch.

Ini akan menghentikan eksekusi di dalam blok switch.

Tidak perlu memutus kasus terakhir dalam blok switch. Blok akan tetap diputus (berakhir) di sana.

Catatan
Jika Anda menghilangkan pernyataan break, eksekusi akan berlanjut ke kasus berikutnya tanpa mempedulikan apakah kondisinya cocok.

Kata Kunci Default
Kata defaultkunci menentukan kode yang akan dijalankan jika tidak ada kecocokan huruf besar/kecil:

Contoh
Metode ini getDay()mengembalikan hari dalam seminggu sebagai angka antara 0 dan 6.

Jika hari ini bukan Sabtu (6) atau Minggu (0), tulis pesan default:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
Hasil teksnya akan menjadi:

Looking forward to the Weekend
Kasus tersebut defaulttidak harus menjadi kasus terakhir dalam blok sakelar:

Contoh
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
Jika defaultbukan kasus terakhir pada blok switch, ingatlah untuk mengakhiri kasus default dengan tanda break.

Blok Kode Umum
Terkadang Anda ingin beberapa kasus sakelar menggunakan kode yang sama.

Dalam contoh kasus ini, 4 dan 5 berbagi blok kode yang sama, dan 0 dan 6 berbagi blok kode lain:

Contoh
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
Detail Pengalihan
Jika beberapa kasus cocok dengan suatu nilai kasus, kasus pertama akan dipilih.

Jika tidak ditemukan kasus yang cocok, program melanjutkan ke label default .

Jika tidak ada label default yang ditemukan, program melanjutkan ke pernyataan setelah switch .

Perbandingan Ketat
Kasus sakelar menggunakan perbandingan yang ketat (===).

Nilainya harus berjenis sama agar cocok.

Perbandingan yang ketat hanya dapat dilakukan jika operannya bertipe sama.

Dalam contoh ini tidak akan ada kecocokan untuk x:

Contoh
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
