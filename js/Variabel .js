Variabel JavaScript
Variabel adalah Wadah untuk Menyimpan Data
Variabel JavaScript dapat dideklarasikan dengan 4 cara:

Secara otomatis
Menggunakanvar
Menggunakanlet
Menggunakanconst
Dalam contoh pertama ini, x, y, dan z adalah variabel yang tidak dideklarasikan.

Mereka dideklarasikan secara otomatis saat pertama kali digunakan:

Contoh
x = 5;
y = 6;
z = x + y;
Catatan
Dianggap sebagai praktik pemrograman yang baik untuk selalu mendeklarasikan variabel sebelum digunakan.

Dari contoh-contoh tersebut Anda dapat menebak:

x menyimpan nilai 5
y menyimpan nilai 6
z menyimpan nilai 11
Contoh penggunaan var
var x = 5;
var y = 6;
var z = x + y;
Catatan
Kata kunci tersebut vardigunakan dalam semua kode JavaScript dari tahun 1995 hingga 2015.

Kata kunci letdan constditambahkan ke JavaScript pada tahun 2015.

Kata kunci tersebut varhanya boleh digunakan dalam kode yang ditulis untuk peramban lama.

Contoh penggunaan let
let x = 5;
let y = 6;
let z = x + y;
Contoh penggunaan const
const x = 5;
const y = 6;
const z = x + y;
Contoh Campuran
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
Kedua variabel price1dan price2 dideklarasikan dengan constkata kunci.

Ini adalah nilai konstan dan tidak dapat diubah.

Variabel totaldideklarasikan dengan letkata kunci.

Nilainya totaldapat diubah.

Kapan Menggunakan var, let, atau const?
1. Selalu mendeklarasikan variabel

2. Selalu gunakan constjika nilainya tidak boleh diubah

3. Selalu gunakan constjika tipenya tidak boleh diubah (Array dan Objek)

4. Hanya gunakan letjika Anda tidak bisa menggunakannyaconst

5. Gunakan hanya varjika Anda HARUS mendukung browser lama.

Sama Seperti Aljabar
Sama seperti dalam aljabar, variabel memiliki nilai:

let x = 5;
let y = 6;
Sama seperti dalam aljabar, variabel digunakan dalam ekspresi:

let z = x + y;
Dari contoh di atas, Anda dapat menebak bahwa totalnya dihitung menjadi 11.

Catatan
Variabel adalah wadah untuk menyimpan nilai.


Pengidentifikasi JavaScript
Semua variabel JavaScript harus diidentifikasi dengan nama yang unik .

Nama-nama unik ini disebut pengenal .

Pengenal dapat berupa nama pendek (seperti x dan y) atau nama yang lebih deskriptif (usia, jumlah, volume total).

Aturan umum untuk membangun nama untuk variabel (pengidentifikasi unik) adalah:

Nama dapat berisi huruf, angka, garis bawah, dan tanda dolar.
Nama harus dimulai dengan huruf.
Nama juga dapat dimulai dengan $ dan _ (tetapi kita tidak akan menggunakannya dalam tutorial ini).
Nama peka huruf besar-kecil (y dan Y adalah variabel yang berbeda).
Kata-kata yang dicadangkan (seperti kata kunci JavaScript) tidak dapat digunakan sebagai nama.
Catatan
Pengenal JavaScript peka terhadap huruf besar-kecil.

Operator Penugasan
Dalam JavaScript, tanda sama dengan ( =) adalah operator "penugasan", bukan operator "sama dengan".

Ini berbeda dengan aljabar. Hal berikut tidak masuk akal dalam aljabar:

x = x + 5
Namun, dalam JavaScript, hal itu masuk akal: ia menetapkan nilai x + 5 ke x.

(Menghitung nilai x + 5 dan memasukkan hasilnya ke dalam x. Nilai x bertambah 5.)

Catatan
Operator "sama dengan" ditulis seperti ==dalam JavaScript.

Tipe Data JavaScript
Variabel JavaScript dapat menampung angka seperti 100 dan nilai teks seperti "John Doe".

Dalam pemrograman, nilai teks disebut string teks.

JavaScript dapat menangani banyak jenis data, tetapi untuk saat ini, pikirkan saja angka dan string.

String ditulis dalam tanda kutip ganda atau tunggal. Angka ditulis tanpa tanda kutip.

Jika Anda menaruh angka dalam tanda kutip, angka tersebut akan diperlakukan sebagai string teks.

Contoh
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
Mendeklarasikan Variabel JavaScript
Membuat variabel dalam JavaScript disebut "mendeklarasikan" variabel.

Anda mendeklarasikan variabel JavaScript dengan kata kunci varatau let:

var carName;
atau:
let carName;
Setelah deklarasi, variabel tersebut tidak memiliki nilai (secara teknis, tidak memiliki nilai undefined).

Untuk menetapkan nilai pada variabel, gunakan tanda sama dengan:

carName = "Volvo";
Anda juga dapat menetapkan nilai ke variabel saat Anda mendeklarasikannya:

let carName = "Volvo";
Pada contoh di bawah, kami membuat variabel bernama carName"Volvo" dan menetapkan nilai "Volvo" padanya.

Kemudian kita "mengeluarkan" nilai tersebut ke dalam paragraf HTML dengan id="demo":

Contoh
<p id="demo"></p>

<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>
Catatan
Ini adalah praktik pemrograman yang baik untuk mendeklarasikan semua variabel di awal skrip.

Satu Pernyataan, Banyak Variabel
Anda dapat mendeklarasikan banyak variabel dalam satu pernyataan.

Mulailah pernyataan dengan letdan pisahkan variabel dengan koma :

Contoh
let person = "John Doe", carName = "Volvo", price = 200;
Suatu deklarasi dapat mencakup beberapa baris:

Contoh
let person = "John Doe",
carName = "Volvo",
price = 200;
Nilai = tidak terdefinisi
Dalam program komputer, variabel sering kali dideklarasikan tanpa nilai. Nilai tersebut dapat berupa sesuatu yang harus dihitung, atau sesuatu yang akan diberikan nanti, seperti masukan pengguna.

Variabel yang dideklarasikan tanpa nilai akan memiliki nilai undefined.

Variabel carName akan memiliki nilai undefinedsetelah eksekusi pernyataan ini:

Contoh
let carName;
Mendeklarasikan Ulang Variabel JavaScript
Jika Anda mendeklarasikan ulang variabel JavaScript yang dideklarasikan dengan var, variabel tersebut tidak akan kehilangan nilainya.

Variabel carNameakan tetap memiliki nilai "Volvo" setelah menjalankan pernyataan berikut:

Contoh
var carName = "Volvo";
var carName;
Catatan
Anda tidak dapat mendeklarasikan ulang variabel yang dideklarasikan dengan letatau const.

Ini tidak akan berhasil:

let carName = "Volvo";
let carName;
Aritmatika JavaScript
Seperti halnya aljabar, Anda dapat melakukan aritmatika dengan variabel JavaScript, menggunakan operator seperti =dan +:

Contoh
let x = 5 + 2 + 3;
Anda juga dapat menambahkan string, tetapi string akan digabungkan:

Contoh
let x = "John" + " " + "Doe";
Coba juga ini:

Contoh
let x = "5" + 2 + 3;
Catatan
Jika Anda meletakkan suatu angka dalam tanda kutip, angka-angka yang tersisa akan diperlakukan sebagai string dan dirangkai.

Sekarang coba ini:

Contoh
let x = 2 + 3 + "5";
Tanda Dolar JavaScript $
Karena JavaScript memperlakukan tanda dolar sebagai huruf, pengenal yang berisi $ adalah nama variabel yang valid:

Contoh
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
Penggunaan tanda dolar tidak terlalu umum dalam JavaScript, tetapi programmer profesional sering menggunakannya sebagai alias untuk fungsi utama dalam pustaka JavaScript.

Dalam pustaka JavaScript jQuery, misalnya, fungsi main $digunakan untuk memilih elemen HTML. Dalam jQuery, fungsi main $("p");berarti "pilih semua elemen p".

Garis bawah JavaScript (_)
Karena JavaScript memperlakukan garis bawah sebagai huruf, pengenal yang berisi _ adalah nama variabel yang valid:

Contoh
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
Penggunaan garis bawah tidak terlalu umum dalam JavaScript, tetapi ada konvensi di antara programmer profesional yang menggunakannya sebagai alias untuk variabel "pribadi (tersembunyi)".

