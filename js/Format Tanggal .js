
Input Tanggal JavaScript
Secara umum ada 3 jenis format input tanggal JavaScript:

Jenis	Contoh
Tanggal ISO	"2015-03-25" (Standar Internasional)
Tanggal Singkat	"25/03/2015"
Kencan Panjang	"25 Mar 2015" atau "25 Mar 2015"
Format ISO mengikuti standar ketat dalam JavaScript.

Format lainnya tidak terdefinisi dengan baik dan mungkin spesifik untuk browser tertentu.

Keluaran Tanggal JavaScript
Terlepas dari format input, JavaScript akan (secara default) mengeluarkan tanggal dalam format string teks lengkap:

Wed Jul 16 2025 16:45:50 GMT+0700 (Western Indonesia Time)
Tanggal ISO JavaScript
ISO 8601 adalah standar internasional untuk representasi tanggal dan waktu.

Sintaks ISO 8601 (YYYY-MM-DD) juga merupakan format tanggal JavaScript yang disukai:

Contoh (Tanggal lengkap)
const d = new Date("2015-03-25");
Tanggal yang dihitung akan relatif terhadap zona waktu Anda.
Tergantung pada zona waktu Anda, hasil di atas akan bervariasi antara 24 Maret dan 25 Maret.

ADVERTISEMENT

Tanggal ISO (Tahun dan Bulan)
Tanggal ISO dapat ditulis tanpa menentukan hari (YYYY-MM):

Contoh
const d = new Date("2015-03");
Zona waktu akan mengubah hasil di atas antara 28 Februari dan 01 Maret.

Tanggal ISO (Hanya Tahun)
Tanggal ISO dapat ditulis tanpa bulan dan hari (YYYY):

Contoh
const d = new Date("2015");
Zona waktu akan mengubah hasil di atas antara 31 Desember 2014 dan 01 Januari 2015.

Tanggal ISO (Tanggal-Waktu)
Tanggal ISO dapat ditulis dengan tambahan jam, menit, dan detik (YYYY-MM-DDTHH:MM:SSZ):

Contoh
const d = new Date("2015-03-25T12:00:00Z");
Tanggal dan waktu dipisahkan dengan huruf T kapital.

Waktu UTC didefinisikan dengan huruf kapital Z.

Jika Anda ingin mengubah waktu relatif terhadap UTC, hapus Z dan tambahkan +HH:MM atau -HH:MM sebagai gantinya:

Contoh
const d = new Date("2015-03-25T12:00:00-06:30");
UTC (Universal Time Coordinated) sama dengan GMT (Greenwich Mean Time).

Menghilangkan T atau Z dalam string tanggal-waktu dapat memberikan hasil yang berbeda di browser yang berbeda.

Zona Waktu
Saat menetapkan tanggal, tanpa menentukan zona waktu, JavaScript akan menggunakan zona waktu browser.

Saat mendapatkan tanggal, tanpa menentukan zona waktu, hasilnya diubah ke zona waktu browser.

Dengan kata lain: Jika tanggal/waktu dibuat dalam GMT (Greenwich Mean Time), tanggal/waktu akan diubah ke CDT (Central US Daylight Time) jika pengguna menjelajah dari AS bagian tengah.

Tanggal Singkat JavaScript.
Tanggal pendek ditulis dengan sintaksis "MM/DD/YYYY" seperti ini:

Contoh
const d = new Date("03/25/2015");
PERINGATAN!
Di beberapa peramban, bulan atau hari tanpa angka nol di depan dapat menghasilkan kesalahan:

const d = new Date("2015-3-25");
Perilaku "YYYY/MM/DD" tidak terdefinisi.
Beberapa peramban akan mencoba menebak formatnya. Beberapa akan mengembalikan NaN.

const d = new Date("2015/03/25");
Perilaku "DD-MM-YYYY" juga tidak terdefinisi.
Beberapa peramban akan mencoba menebak formatnya. Beberapa akan mengembalikan NaN.

const d = new Date("25-03-2015");
Tanggal Panjang JavaScript.
Tanggal panjang paling sering ditulis dengan sintaksis "MMM DD YYYY" seperti ini:

Contoh
const d = new Date("Mar 25 2015");
Bulan dan hari dapat dalam urutan apa pun:

Contoh
const d = new Date("25 Mar 2015");
Dan, bulan dapat ditulis lengkap (Januari), atau disingkat (Jan):

Contoh
const d = new Date("January 25 2015");
Contoh
const d = new Date("Jan 25 2015");
Koma diabaikan. Nama tidak peka huruf besar/kecil:

Contoh
const d = new Date("JANUARY, 25, 2015");
Input Tanggal - Parsing Tanggal
Jika Anda memiliki string tanggal yang valid, Anda dapat menggunakan Date.parse()metode untuk mengubahnya menjadi milidetik.

Date.parse()mengembalikan jumlah milidetik antara tanggal dan 1 Januari 1970:

Contoh
let msec = Date.parse("March 21, 2012");
Anda kemudian dapat menggunakan jumlah milidetik untuk mengubahnya menjadi objek tanggal:

Contoh
let msec = Date.parse("March 21, 2012");
const d = new Date(msec);
Referensi Tanggal JavaScript Lengkap
Untuk referensi Tanggal lengkap, kunjungi:

Referensi Tanggal JavaScript Lengkap .

Referensi berisi deskripsi dan contoh semua properti dan metode Tanggal.

