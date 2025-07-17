Metode Mendapatkan Tanggal di JavaScript
Konstruktor Date() yang baru
Dalam JavaScript, objek tanggal dibuat dengan new Date().

new Date()mengembalikan objek tanggal dengan tanggal dan waktu saat ini.

Dapatkan Waktu Saat Ini
const date = new Date();
Metode Mendapatkan Tanggal
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
Catatan 1
Metode get di atas mengembalikan waktu lokal .

Waktu universal (UTC) didokumentasikan di bagian bawah halaman ini.

Catatan 2
Metode get mengembalikan informasi dari objek tanggal yang ada.

Pada objek tanggal, waktunya statis. "Jam" tidak "berjalan".

Waktu pada objek tanggal TIDAK sama dengan waktu saat ini.

Metode getFullYear()
Metode ini getFullYear()mengembalikan tahun suatu tanggal sebagai angka empat digit:

Contoh
const d = new Date("2021-03-25");
d.getFullYear();
const d = new Date();
d.getFullYear();
Peringatan !
Kode JavaScript lama mungkin menggunakan metode nonstandar getYear().

getYear() seharusnya mengembalikan tahun 2 digit.

getYear() sudah tidak berlaku lagi. Jangan gunakan!

Metode getMonth()
Metode ini getMonth()mengembalikan bulan suatu tanggal sebagai angka (0-11).

Catatan
Dalam JavaScript, Januari adalah bulan nomor 0, Februari adalah bulan nomor 1, ...

Terakhir, Desember adalah bulan nomor 11.

Contoh
const d = new Date("2021-03-25");
d.getMonth();
const d = new Date();
d.getMonth();
Catatan
Anda dapat menggunakan array nama untuk mengembalikan bulan sebagai nama:

Contoh
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
Metode getDate()
Metode ini getDate()mengembalikan hari dalam bentuk angka (1-31):

Contoh
const d = new Date("2021-03-25");
d.getDate();
const d = new Date();
d.getDate();
IKLAN

Metode getHours()
Metode ini getHours()mengembalikan jam suatu tanggal sebagai angka (0-23):

Contoh
const d = new Date("2021-03-25");
d.getHours();
const d = new Date();
d.getHours();
Metode getMinutes()
Metode ini getMinutes()mengembalikan menit suatu tanggal sebagai angka (0-59):

Contoh
const d = new Date("2021-03-25");
d.getMinutes();
const d = new Date();
d.getMinutes();
Metode getSeconds()
Metode ini getSeconds()mengembalikan detik suatu tanggal sebagai angka (0-59):

Contoh
const d = new Date("2021-03-25");
d.getSeconds();
const d = new Date();
d.getSeconds();
Metode getMilliseconds()
Metode ini getMilliseconds()mengembalikan milidetik suatu tanggal sebagai angka (0-999):

Contoh
const d = new Date("2021-03-25");
d.getMilliseconds();
const d = new Date();
d.getMilliseconds();
Metode getDay()
Metode ini getDay()mengembalikan hari dalam seminggu sebagai angka (0-6).

Catatan
Dalam JavaScript, hari pertama dalam seminggu (hari 0) adalah Minggu.

Beberapa negara di dunia menganggap hari pertama dalam seminggu adalah Senin.

Contoh
const d = new Date("2021-03-25");
d.getDay();
const d = new Date();
d.getDay();
Catatan
Anda dapat menggunakan array nama, dan getDay()mengembalikan hari dalam seminggu sebagai nama:

Contoh
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date("2021-03-25");
let day = days[d.getDay()];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
Metode getTime()
Metode ini getTime()mengembalikan jumlah milidetik sejak 1 Januari 1970:

Contoh
const d = new Date("1970-01-01");
d.getTime();
const d = new Date("2021-03-25");
d.getTime();
const d = new Date();
d.getTime();
Metode Date.now()
Date.now()mengembalikan jumlah milidetik sejak 1 Januari 1970.

Contoh
let ms = Date.now();
Hitung jumlah tahun sejak 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
Date.now()adalah metode statis dari objek Tanggal.

Anda tidak dapat menggunakannya pada objek tanggal seperti myDate.now().

Sintaksisnya selalu Date.now().

Metode Mendapatkan Tanggal UTC
Method	Same As	Description
getUTCDate()	getDate()	Returns the UTC date
getUTCFullYear()	getFullYear()	Returns the UTC year
getUTCMonth()	getMonth()	Returns the UTC month
getUTCDay()	getDay()	Returns the UTC day
getUTCHours()	getHours()	Returns the UTC hour
getUTCMinutes()	getMinutes()	Returns the UTC minutes
getUTCSeconds()	getSeconds()	Returns the UTC seconds
getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
Metode UTC menggunakan waktu UTC (Waktu Universal Terkoordinasi).

Waktu UTC sama dengan GMT (Greenwich Mean Time).

Perbedaan antara waktu lokal dan waktu UTC dapat mencapai 24 jam.





Metode getTimezoneOffset()
Metode ini getTimezoneOffset()mengembalikan perbedaan (dalam menit) antara waktu lokal dan waktu UTC:

Contoh
let diff = d.getTimezoneOffset();