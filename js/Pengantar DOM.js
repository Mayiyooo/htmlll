Metode JavaScript - HTML DOM
Metode DOM HTML adalah tindakan yang dapat Anda lakukan (pada Elemen HTML).

Properti HTML DOM adalah nilai (Elemen HTML) yang dapat Anda atur atau ubah.

Antarmuka Pemrograman DOM
DOM HTML dapat diakses dengan JavaScript (dan dengan bahasa pemrograman lainnya).

Dalam DOM, semua elemen HTML didefinisikan sebagai objek .

Antarmuka pemrograman adalah properti dan metode setiap objek.

Properti adalah nilai yang dapat Anda peroleh atau atur (seperti mengubah konten elemen HTML) .

Metode adalah tindakan yang dapat Anda lakukan (seperti menambah atau menghapus elemen HTML).

Contoh
Contoh berikut mengubah konten ( innerHTML) elemen <p>dengan id="demo":

Contoh
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
Dalam contoh di atas, getElementByIdadalah sebuah metode , sedangkan innerHTMLadalah sebuah properti .

Metode getElementById
Cara paling umum untuk mengakses elemen HTML adalah dengan menggunakan idelemen tersebut.

Dalam contoh di atas getElementByIdmetode yang digunakan id="demo"untuk menemukan elemen.

Properti innerHTML
Cara termudah untuk mendapatkan konten suatu elemen adalah dengan menggunakan innerHTMLproperti.

Properti innerHTMLini berguna untuk mendapatkan atau mengganti konten elemen HTML.

Properti ini innerHTMLdapat digunakan untuk mendapatkan atau mengubah elemen HTML apa pun, termasuk <html>dan <body>.

Latihan
?
Apa metode HTML DOM yang legal untuk mengakses elemen HTML?


fetchId
getElementById()
element()
