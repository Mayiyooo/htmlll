Array Ketik JavaScript
Contoh
const myArr = new Int8Array(10);
Array yang diketik
Array yang diketik dirancang untuk menangani data biner mentah .

Tidak seperti array standar, array yang diketik adalah buffer array dengan panjang tetap .

Array bertipe menyimpan elemen bertipe tetap seperti integer 8-bit atau angka 32-bit.

Manfaat Array yang Diketik
Array Ketik dirancang untuk menyediakan cara efisien untuk menangani data biner, tidak seperti array JavaScript tradisional yang dapat menampung elemen tipe data campuran.

Array yang diketik adalah memori mentah, sehingga JavaScript dapat meneruskannya langsung ke fungsi apa pun tanpa mengubah data ke representasi lain.

Array bertipe jauh lebih cepat daripada array biasa dalam meneruskan data ke fungsi yang dapat menggunakan data biner mentah. Array bertipe sangat cocok untuk:

WebGL dan Canvas :
Pemrosesan grafik dan gambar yang cepat.

API File :
Membaca dan menulis file lokal dengan cepat.

API Media :
Penanganan data audio dan video yang cepat.

WebSockets :
Transfer data biner yang efisien melalui jaringan.

Array Ketik diperkenalkan ke JavaScript sebagai bagian dari spesifikasi ECMAScript 2015 (ES6), yang dirilis pada bulan Juni 2015.

Perbedaan dari Array Reguler
Panjang Tetap:
Array yang diketik tidak dapat diubah ukurannya secara dinamis menggunakan metode seperti push() atau pop().

Pembatasan Tipe:
Elemen harus mematuhi tipe data yang ditentukan dari array yang diketik.

Buffer yang Mendasari:
Array yang Diketik adalah tampilan ke dalam ArrayBuffer, yang memungkinkan manipulasi langsung data biner.

Tipe Array yang Diketik
Nama	menit	Maksimal	Byte	Jenis
Int8Array	-128	127	1	byte
Uint8Array	0	255	1	oktet
Uint8ClampedArray	0	255	1	oktet
Array Int16	-32768	32767	2	pendek
Array Uint16	0	65535	2	pendek tak bertanda tangan
Array Int32	-2147483648	2147483647	4	panjang
Array Uint32	0	4294967295	4	unsigned long
Array BigInt64	-2 63	2 63 - 1	8	bigint
Array BigUint64	0	2 64 - 1	8	bigint yang tidak ditandatangani
 	 	 	 	 
Float16Array	-65504	65504	2	setengah tidak terbatas
Float32Array	-3.4e38	3.4e38	4	mengapung tanpa batas
Array Float64	-1.8e308	1.8e308	8	ganda tak terbatas
Bilangan Bulat 8 Bit
Name	Data Type	Range
Int8Array	Signed integer (byte)	-128/127
Uint8Array	Unsigned integer (octet)	0/255
Uint8ClampedArray	Unsigned integer (octet)	0/255
Contoh
Buat array bertipe 10 integer bertanda 8-bit (format byte):

const myArr = new Int8Array(10);
Buat array bertipe 10 bilangan bulat 8-bit yang tidak bertanda (format oktet):

const myArr = new Uint8Array(10);
Buat array bertipe 10 integer 8-bit bertanda tangan (format terjepit):

const myArr = new Uint8ClampedArray(10);
Uint8Array vs Uint8ClampedArray
Perbedaan antara Uint8Array dan Uint8ClampedArray adalah bagaimana nilai ditambahkan.

Jika Anda menetapkan satu elemen dalam Uint8ClampedArray ke nilai di luar rentang 0-255, nilainya akan default ke 0 atau 255.

Array yang diketik hanya akan mengambil 8 bit pertama dari nilai tersebut.

Catatan
Array yang diketik bukanlah array.

isArray() pada array yang diketik mengembalikan false.

Banyak metode array (seperti push dan pop) tidak didukung oleh array bertipe.

Bilangan Bulat 16-Bit
Name	Data Type	Range
Int16Array	Short integer	-32768/32767
Uint16Array	Unsigned short integer	0/65535
Contoh
Buat array bertipe 10 bilangan bulat bertanda 16-bit (format pendek):

const myArr = new Int16Array(10);
Buat array bertipe 10 bilangan bulat 16-bit yang tidak bertanda (format pendek tidak bertanda):

const myArr = new Uint16Array(10);
Bilangan Bulat 32-Bit
Name	Data Type	Range
Int32Array	Signed long integer	-2147483648 / 2147483647
Uint32Array	Unsigned long integer	0 / 4294967295
Contoh
Buat array bertipe 10 bilangan bulat bertanda 32-bit (format panjang):

const myArr = new Int32Array(10);
Buat array bertipe 10 bilangan bulat 32-bit yang tidak bertanda (format panjang tidak bertanda):

const myArr = new Uint32Array(10);
IKLAN

Bilangan Bulat 64-Bit
Name	Data Type	Range
BigInt64Array	Big signed integer	-263/263-1
BigUint64Array	Big unsigned integer	0/264
Contoh
Buat array bertipe 10 integer bertanda 64-bit (format bigint):

const myArr = new Bigint64Array(10);
Buat array bertipe 10 bilangan bulat 64-bit yang tidak bertanda (format bigint):

const myArr = new Biguint64Array(10);
Angka Titik Mengambang
Name	Description	Range
Float16Array	Half precision - 3 significant decimal digits	-65504 / 65504
Float32Array	Normal precision - 7 significant decimal digits	-3.4e38 / 3.4e38
Float64Array	Double precision- 15 significant decimal digits	-1.8e308 / 1.8e308
Seperti yang ditentukan oleh standar ECMAScript , aritmatika dalam JavaScript harus dilakukan menggunakan aritmatika floating-point presisi ganda:

64-bit
Contoh
Buat array yang diketik dari 10 angka floating point dalam format 16-bit (presisi setengah):

const myArr = new Float16Array(10);
Buat array diketik dari 10 angka floating point dalam format 32-bit (presisi normal):

const myArr = new Float32Array(10);
Buat array diketik dari 10 angka floating point dalam format 64-bit (presisi ganda):

const myArr = new Float64Array(10);