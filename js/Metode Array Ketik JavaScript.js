Metode Array Ketik JavaScript
Metode from()
Metode ini from()membuat array bertipe baru dari objek apa pun yang dapat diulang:

Contoh
Buat array yang diketik dari sebuah string:

const myArr = Int16Array.from("1234567890");
Membuat array yang diketik dari sebuah array:

const myArr = Int16Array.from([1,2,3,4,5,6,7,8,9,0]);
Metode of()
Metode ini of()membuat array tipe baru dari sejumlah argumen:

Contoh
const myArr = Int16Array.of(1,2,3,4,5,6,7,8,9,0);
Properti constructor.name
Properti constructor.namemengembalikan nama (tipe) dari array yang diketik:

Contoh
myArr.constructor.name
Properti BYTES_PER_ELEMENT
BYTES_PER_ELEMENTmengembalikan jumlah byte yang digunakan untuk menyimpan setiap elemen array:

Contoh
myArr.BYTES_PER_ELEMENT
Metode Array Umum
Array yang diketik memiliki banyak metode yang sama dengan Array Standar :

Iterasi : forEach(), map(), filter(), reduce(), reduceRight(), every(), some(), find(), findIndex(), findLast(), findLastIndex().

Pencarian : include(), indexOf(), lastIndexOf().

Manipulasi : at(), copyWithin(), fill(), reverse(), set(), slice(), sort(), subarray().

Konversi : join(), toLocaleString(), toString().

Metode yang tidak bermutasi : toReversed(), toSorted(), with().

Metode fill()
Metode ini fill()mengubah semua elemen dalam array yang diketik menjadi suatu nilai:

Contoh
Isi semua elemen array dengan nilai:

myArr.fill(200);
Metode ini fill()mengambil dua argumen opsional: indeks awal dan indeks akhir:

Contoh
Isi beberapa elemen array dengan suatu nilai:

myArr.fill(200, 0, 3);
Metode find()
Metode ini find()mengembalikan elemen pertama yang memenuhi pengujian:

Contoh
myArr.find((x) => x > 18)
Metode some()
Metode ini some()mengembalikan nilai true jika suatu elemen yang memiliki fungsi yang disediakan mengembalikan nilai true:

Contoh
myArr.some((x) => x > 18)
IKLAN

Metode Array Tidak Tersedia
Beberapa metode array TIDAK tersedia untuk array yang diketik.

Hal ini disebabkan oleh sifat panjangnya yang tetap dan kurangnya struktur yang tetap.

Metode	Susunan	Array yang diketik
pop()	Ya	TIDAK
dorongan()	Ya	TIDAK
menggeser()	Ya	TIDAK
unshift()	Ya	TIDAK
sambatan()	Ya	TIDAK
datar()	Ya	TIDAK
peta datar()	Ya	TIDAK
menggabungkan()	Ya	TIDAK
untuk disambung()	Ya	TIDAK
API Browser yang Mendukung Array Ketik
Contoh API Fetch
fetch(url)
.then(request => request.arrayBuffer())
.then(arrayBuffer =>...);
Contoh Kanvas
const canvas = document.getElementById('my_canvas');
const context = canvas.getContext('2d');
const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
const uint8ClampedArray = imageData.data;