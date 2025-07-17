Sintaks JavaScript
Sintaks JavaScript adalah serangkaian aturan tentang bagaimana program JavaScript dibangun:

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
Nilai JavaScript
Sintaks JavaScript mendefinisikan dua jenis nilai:

Nilai tetap
Nilai variabel
Nilai tetap disebut Literal .

Nilai variabel disebut Variabel .

Literal JavaScript
Dua aturan sintaksis yang paling penting untuk nilai tetap adalah:

1. Angka ditulis dengan atau tanpa desimal:

10.50

1001
2. String adalah teks yang ditulis dalam tanda kutip ganda atau tunggal:

"John Doe"

'John Doe'
IKLAN

Variabel JavaScript
Dalam bahasa pemrograman, variabel digunakan untuk menyimpan nilai data.

JavaScript menggunakan kata kunci var, letdan constuntuk mendeklarasikan variabel.

Tanda sama dengan digunakan untuk menetapkan nilai pada variabel.

Dalam contoh ini, x didefinisikan sebagai variabel. Kemudian, x diberi nilai 6:

let x;
x = 6;
Operator JavaScript
JavaScript menggunakan operator aritmatika ( + - * /) untuk menghitung nilai:

(5 + 6) * 10
JavaScript menggunakan operator penugasan ( =) untuk menetapkan nilai ke variabel:

let x, y;
x = 5;
y = 6;
Ekspresi JavaScript
Ekspresi adalah kombinasi nilai, variabel, dan operator yang dihitung menjadi suatu nilai.

Perhitungan itu disebut evaluasi.

Misalnya, 5 * 10 bernilai 50:

5 * 10
Ekspresi juga dapat berisi nilai variabel:

x * 10
Nilainya dapat berupa berbagai jenis, seperti angka dan string.

Misalnya, "John" + " " + "Doe", dievaluasi menjadi "John Doe":

"John" + " " + "Doe"
Kata Kunci JavaScript
Kata kunci JavaScript digunakan untuk mengidentifikasi tindakan yang akan dilakukan.

Kata letkunci memberi tahu browser untuk membuat variabel:

let x, y;
x = 5 + 6;
y = x * 10;
Kata varkunci juga memberi tahu browser untuk membuat variabel:

var x, y;
x = 5 + 6;
y = x * 10;
Dalam contoh ini, penggunaan var atau letakan menghasilkan hasil yang sama.

Anda akan mempelajari lebih lanjut tentang var dan letnanti dalam tutorial ini.

Komentar JavaScript
Tidak semua pernyataan JavaScript "dieksekusi".

Kode setelah garis miring ganda //atau di antara /*dan */diperlakukan sebagai komentar .

Komentar diabaikan dan tidak akan dieksekusi:

let x = 5;   // I will be executed

// x = 6;   I will NOT be executed
Anda akan mempelajari lebih lanjut tentang komentar di bab berikutnya.

Pengidentifikasi / Nama JavaScript
Pengidentifikasi adalah nama JavaScript.

Pengidentifikasi digunakan untuk memberi nama variabel, kata kunci, dan fungsi.

Aturan untuk nama resmi sama di sebagian besar bahasa pemrograman.

Nama JavaScript harus dimulai dengan:

Sebuah huruf (AZ atau az)
Tanda dolar ($)
Atau garis bawah (_)
Karakter berikutnya dapat berupa huruf, angka, garis bawah, atau tanda dolar.

Catatan
Angka tidak diperbolehkan sebagai karakter pertama dalam nama.

Dengan cara ini JavaScript dapat dengan mudah membedakan pengenal dari angka.

JavaScript peka huruf besar/kecil
Semua pengenal JavaScript peka huruf besar-kecil . 

Variabel lastNamedan lastname, adalah dua variabel yang berbeda:

let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
JavaScript tidak menafsirkan LET atau Let sebagai kata kunci let .

JavaScript dan Camel Case
Secara historis, programmer telah menggunakan berbagai cara untuk menggabungkan beberapa kata menjadi satu nama variabel:

Tanda hubung:

nama depan, nama belakang, master-card, antar kota.

Tanda hubung tidak diizinkan dalam JavaScript. Tanda hubung hanya digunakan untuk pengurangan.

Menggarisbawahi:

nama_depan, nama_belakang, master_card, antar_kota.

Kasus Unta Atas (Kotak Pascal):

Nama Depan, Nama Belakang, MasterCard, InterCity.


Huruf Kecil Unta:

Pemrogram JavaScript cenderung menggunakan camel case yang dimulai dengan huruf kecil:

namadepan, namabelakang, masterCard, interCity.

Set Karakter JavaScript
JavaScript menggunakan set karakter Unicode .

Unicode mencakup (hampir) semua karakter, tanda baca, dan simbol di dunia.