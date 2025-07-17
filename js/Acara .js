
Peristiwa HTML adalah "sesuatu" yang terjadi pada elemen HTML.

Ketika JavaScript digunakan pada halaman HTML, JavaScript dapat "bereaksi" terhadap peristiwa ini.

Acara HTML
Peristiwa HTML dapat berupa sesuatu yang dilakukan peramban, atau sesuatu yang dilakukan pengguna.

Berikut adalah beberapa contoh peristiwa HTML:

Halaman web HTML telah selesai dimuat
Bidang masukan HTML telah diubah
Tombol HTML diklik
Sering kali, ketika suatu peristiwa terjadi, Anda mungkin ingin melakukan sesuatu.

JavaScript memungkinkan Anda mengeksekusi kode saat peristiwa terdeteksi.

HTML memungkinkan atribut penanganan peristiwa, dengan kode JavaScript , untuk ditambahkan ke elemen HTML.

Dengan tanda kutip tunggal:

<element event='some JavaScript'>
Dengan tanda kutip ganda:

<element event="some JavaScript">
Dalam contoh berikut, onclickatribut (dengan kode), ditambahkan ke suatu <button>elemen:

Contoh
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
Dalam contoh di atas, kode JavaScript mengubah konten elemen dengan id="demo".

Pada contoh berikutnya, kode mengubah konten elemennya sendiri (menggunakan this.innerHTML):

Contoh
<button onclick="this.innerHTML = Date()">The time is?</button>
Kode JavaScript seringkali terdiri dari beberapa baris. Atribut peristiwa yang memanggil fungsi lebih umum:

Contoh
<button onclick="displayDate()">The time is?</button>
IKLAN

Peristiwa HTML Umum
Berikut adalah daftar beberapa peristiwa HTML umum:

Peristiwa	Keterangan
onchange	Elemen HTML telah diubah
klik saja	Pengguna mengklik elemen HTML
arahkan mouse ke atas	Pengguna menggerakkan mouse di atas elemen HTML
onmouseout	Pengguna menggerakkan mouse menjauh dari elemen HTML
onkeydown	Pengguna menekan tombol keyboard
memuat	Browser telah selesai memuat halaman
Daftarnya jauh lebih panjang: Referensi JavaScript W3Schools Peristiwa HTML DOM .

Penanganan Peristiwa JavaScript
Penanganan peristiwa dapat digunakan untuk menangani dan memverifikasi masukan pengguna, tindakan pengguna, dan tindakan browser:

Hal-hal yang harus dilakukan setiap kali halaman dimuat
Hal-hal yang harus dilakukan ketika halaman ditutup
Tindakan yang harus dilakukan ketika pengguna mengklik tombol
Konten yang harus diverifikasi saat pengguna memasukkan data
Dan masih banyak lagi ...
Banyak metode berbeda yang dapat digunakan untuk membiarkan JavaScript bekerja dengan peristiwa:

Atribut acara HTML dapat mengeksekusi kode JavaScript secara langsung
Atribut acara HTML dapat memanggil fungsi JavaScript
Anda dapat menetapkan fungsi pengendali acara Anda sendiri ke elemen HTML
Anda dapat mencegah peristiwa dikirim atau ditangani
Dan masih banyak lagi ...