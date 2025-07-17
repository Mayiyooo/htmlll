
Metode Set Date memungkinkan Anda menetapkan nilai tanggal (tahun, bulan, hari, jam, menit, detik, milidetik) untuk Objek Tanggal.

Metode Pengaturan Tanggal
Metode Set Date digunakan untuk menetapkan bagian dari tanggal:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
Metode setFullYear()
Metode ini setFullYear()menetapkan tahun dari sebuah objek tanggal. Dalam contoh ini, hingga 2020:

Contoh
const d = new Date("January 01, 2025");
d.setFullYear(2020);
Metode ini secara opsionalsetFullYear() dapat mengatur bulan dan hari:

Contoh
const d = new Date("January 01, 2025");
d.setFullYear(2020, 11, 3);
IKLAN

Metode setMonth()
Metode ini setMonth()menetapkan bulan dari objek tanggal (0-11):

Contoh
const d = new Date("January 01, 2025");
d.setMonth(11);
Metode setDate()
Metode ini setDate()menetapkan hari dari objek tanggal (1-31):

Contoh
const d = new Date("January 01, 2025");
d.setDate(15);
Metode ini setDate()juga dapat digunakan untuk menambahkan hari pada suatu tanggal:

Contoh
const d = new Date("January 01, 2025");
d.setDate(d.getDate() + 50);
Catatan
Jika penambahan hari menggeser bulan atau tahun, perubahan ditangani secara otomatis oleh objek Tanggal.

Metode setHours()
Metode ini setHours()menetapkan jam objek tanggal (0-23):

Contoh
const d = new Date("January 01, 2025");
d.setHours(22);
Metode ini setHours()juga dapat digunakan untuk mengatur menit dan detik.

Contoh
const d = new Date("January 01, 2025");
d.setHours(22, 10, 20);
Metode setMinutes()
Metode ini setMinutes()menetapkan menit objek tanggal (0-59):

Contoh
const d = new Date("January 01, 2025");
d.setMinutes(30);
Metode setSeconds()
Metode ini setSeconds()menetapkan detik objek tanggal (0-59):

Contoh
const d = new Date("January 01, 2025");
d.setSeconds(30);
Bandingkan Tanggal
Tanggal dapat dengan mudah dibandingkan.

Contoh berikut membandingkan tanggal hari ini dengan 14 Januari 2100:

Contoh
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}