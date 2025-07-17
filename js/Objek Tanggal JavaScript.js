Objek Tanggal JavaScript
Objek Tanggal JavaScript memungkinkan kita bekerja dengan tanggal:

Rabu, 16 Juli 2025, 16:41:50 GMT+0700 (Waktu Indonesia Barat)

     
Contoh
const d = new Date();
const d = new Date("2022-03-25");
Catatan
Objek tanggal bersifat statis. "Jam" tidak "berjalan".

Jam komputer terus berdetak, tetapi objek tanggal tidak.

Keluaran Tanggal JavaScript
Secara default, JavaScript akan menggunakan zona waktu browser dan menampilkan tanggal sebagai string teks lengkap:

Rabu, 16 Juli 2025, 16:41:50 GMT+0700 (Waktu Indonesia Barat)

Anda akan mempelajari lebih banyak tentang cara menampilkan tanggal nanti dalam tutorial ini.

Membuat Objek Tanggal
Objek tanggal dibuat dengan new Date()konstruktor.

Ada 9 cara untuk membuat objek tanggal baru:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
JavaScript baru Tanggal()
new Date()membuat objek tanggal dengan tanggal dan waktu saat ini :

Contoh
const d = new Date();
new Date( string tanggal )
new Date(date string)membuat objek tanggal dari string tanggal :

Contoh
const d = new Date("October 13, 2014 11:13:00");
const d = new Date("2022-03-25");
Format string tanggal dijelaskan dalam bab berikutnya.

new Tanggal( tahun, bulan, ... )
new Date(year, month, ...)membuat objek tanggal dengan tanggal dan waktu yang ditentukan .

7 angka menentukan tahun, bulan, hari, jam, menit, detik, dan milidetik (dalam urutan tersebut):

Contoh
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
Catatan
JavaScript menghitung bulan dari 0 hingga 11 :

Januari = 0 .

Desember = 11 .

Menentukan bulan yang lebih tinggi dari 11 tidak akan mengakibatkan kesalahan, tetapi akan menambahkan luapan ke tahun berikutnya:

Menentukan:

const d = new Date(2018, 15, 24, 10, 33, 30);
Sama dengan:

const d = new Date(2019, 3, 24, 10, 33, 30);
Menentukan hari yang lebih tinggi dari maksimum tidak akan mengakibatkan kesalahan, tetapi akan menambahkan luapan ke bulan berikutnya:

Menentukan:

const d = new Date(2018, 5, 35, 10, 33, 30);
Sama dengan:

const d = new Date(2018, 6, 5, 10, 33, 30);
Menggunakan Angka 6, 4, 3, atau 2
6 angka menentukan tahun, bulan, hari, jam, menit, detik:

Contoh
const d = new Date(2018, 11, 24, 10, 33, 30);
5 angka menentukan tahun, bulan, hari, jam, dan menit:

Contoh
const d = new Date(2018, 11, 24, 10, 33);
4 angka menunjukkan tahun, bulan, hari, dan jam:

Contoh
const d = new Date(2018, 11, 24, 10);
3 angka menunjukkan tahun, bulan, dan hari:

Contoh
const d = new Date(2018, 11, 24);
2 angka menunjukkan tahun dan bulan:

Contoh
const d = new Date(2018, 11);
Anda tidak dapat menghilangkan bulan. Jika Anda hanya memasukkan satu parameter, parameter tersebut akan dianggap sebagai milidetik.

Contoh
const d = new Date(2018);
Abad Sebelumnya
Tahun satu dan dua digit akan diartikan sebagai 19xx:

Contoh
const d = new Date(99, 11, 24);
Contoh
const d = new Date(9, 11, 24);
JavaScript Menyimpan Tanggal sebagai Milidetik
JavaScript menyimpan tanggal sebagai jumlah milidetik sejak 01 Januari 1970.

Waktu nol adalah 01 Januari 1970 00:00:00 UTC .

Satu hari (24 jam) adalah 86.400.000 milidetik.

Sekarang waktunya: 1752658910788 milidetik setelah 01 Januari 1970

Tanggal baru ( milidetik )
new Date(milliseconds)membuat objek tanggal baru sebagai milidetik ditambah waktu nol:

Contoh
01 Januari 1970 ditambah 100.000.000.000 milidetik adalah:

const d = new Date(100000000000);
01 Januari 1970 dikurangi 100.000.000.000 milidetik adalah:

const d = new Date(-100000000000);
Tanggal 01 Januari 1970 ditambah 24 jam adalah:

const d = new Date(24 * 60 * 60 * 1000);
// or
const d = new Date(86400000);
01 Januari 1970 ditambah 0 milidetik adalah:

const d = new Date(0);
IKLAN

Metode Tanggal
Saat objek tanggal dibuat, sejumlah metode memungkinkan Anda mengoperasikannya.

Metode tanggal memungkinkan Anda mendapatkan dan mengatur tahun, bulan, hari, jam, menit, detik, dan milidetik objek tanggal, menggunakan waktu lokal atau waktu UTC (universal, atau GMT).

Metode tanggal dan zona waktu dibahas dalam bab berikutnya.

Menampilkan Tanggal
JavaScript akan (secara default) menampilkan tanggal menggunakan metode toString() . Ini adalah representasi string dari tanggal, termasuk zona waktu. Formatnya ditentukan dalam spesifikasi ECMAScript:

Contoh
Wed Jul 16 2025 16:41:50 GMT+0700 (Western Indonesia Time)
Saat Anda menampilkan objek tanggal dalam HTML, objek tersebut secara otomatis diubah menjadi string, dengan toString()metode.

Contoh
const d = new Date();
d.toString();
Metode ini toDateString()mengubah tanggal ke format yang lebih mudah dibaca:

Contoh
const d = new Date();
d.toDateString();
Metode ini toUTCString()mengubah tanggal menjadi string menggunakan standar UTC:

Contoh
const d = new Date();
d.toUTCString();
Metode ini toISOString()mengubah tanggal menjadi string menggunakan standar ISO:

Contoh
const d = new Date();
d.toISOString();
