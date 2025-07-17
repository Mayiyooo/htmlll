
Metode Array Dasar
Panjang larik
Larik toString ()
Larik at()
Larik join()
Larik pop()
Larik push()
Larik shift()
Larik unshift()
Array hapus()
Array gabung()
Array salinDalam()
Array datar()
Array irisan()
Array sambatan()
Array untukDisambung()
Lihat Juga:
Tutorial Array
Metode Pencarian Array
Metode Pengurutan Array
Metode Iterasi
Array Referensi Array
Panjang Array JavaScript
Properti mengembalikan panjang (ukuran) suatu array length:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;
Properti ini lengthjuga dapat digunakan untuk mengatur panjang array:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.length = 2;
Array JavaScript toString()
Metode ini toString()mengembalikan elemen array sebagai string yang dipisahkan koma.

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
Catatan
Setiap objek JavaScript memiliki toString()metode.

Metode ini toString()digunakan secara internal oleh JavaScript ketika suatu objek perlu ditampilkan sebagai teks (seperti dalam HTML), atau ketika suatu objek perlu digunakan sebagai string.

Array JavaScript di()
ES2022 memperkenalkan metode array at():

Contoh
Dapatkan elemen ketiga buah menggunakan at():

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
Dapatkan elemen ketiga buah menggunakan []:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];
Metode ini at()mengembalikan elemen yang diindeks dari suatu array.

Metode ini at()mengembalikan hal yang sama seperti [].

Metode ini at()didukung di semua browser modern sejak Maret 2022:

Chrome 92	Edge 92	Firefox 90	Safari 15.4	Opera 78
Apr 2021	Jul 2021	Jul 2021	Mar 2022	Aug 2021
Catatan
Banyak bahasa yang memungkinkan negative bracket indexingseperti [-1] untuk mengakses elemen dari akhir suatu objek/array/string.

Hal ini tidak dimungkinkan dalam JavaScript, karena [] digunakan untuk mengakses array dan objek. obj[-1] merujuk pada nilai kunci -1, bukan properti terakhir objek.

Metode ini at()diperkenalkan dalam ES2022 untuk memecahkan masalah ini.

JavaScript Array join()
Metode ini join()juga menggabungkan semua elemen array menjadi sebuah string.

Ia berperilaku seperti toString(), tetapi selain itu Anda dapat menentukan pemisah:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Hasil:

Banana * Orange * Apple * Mango
Meletus dan Mendorong
Ketika Anda bekerja dengan array, mudah untuk menghapus elemen dan menambahkan elemen baru.

Inilah yang dimaksud dengan popping dan pushing:

Mengeluarkan item dari suatu susunan, atau memasukkan item ke dalam susunan.

IKLAN

Array JavaScript pop()
Metode ini pop()menghapus elemen terakhir dari sebuah array:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
Metode ini pop()mengembalikan nilai yang "dimunculkan":

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
Array JavaScript mendorong()
Metode ini push()menambahkan elemen baru ke dalam array (di akhir):

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
Metode ini push()mengembalikan panjang array baru:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
Elemen yang Bergeser
Pergeseran sama halnya dengan popping, tetapi dikerjakan pada elemen pertama, bukan elemen terakhir.

Array JavaScript bergeser()
Metode ini shift()menghapus elemen array pertama dan "menggeser" semua elemen lainnya ke indeks yang lebih rendah.

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
Metode ini shift()mengembalikan nilai yang "digeser keluar":

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
Array JavaScript tidak bergeser()
Metode ini unshift()menambahkan elemen baru ke dalam array (di awal), dan "membatalkan pergeseran" elemen lama:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
Metode ini unshift()mengembalikan panjang array baru:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
Elemen yang Berubah
Elemen array diakses menggunakan nomor indeksnya :

Indeks array dimulai dengan 0:

[0] adalah elemen array pertama
[1] adalah yang kedua
[2] adalah yang ketiga ...

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
Panjang Array JavaScript
Properti ini lengthmenyediakan cara mudah untuk menambahkan elemen baru ke dalam array:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
Hapus() Array JavaScript
Peringatan !
Menggunakan delete()daun undefinedberlubang pada susunannya.

Gunakan pop() atau shift() sebagai gantinya.

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
Menggabungkan Array (Concatenating)
Dalam bahasa pemrograman, penggabungan berarti menggabungkan string dari ujung ke ujung.

Penggabungan "salju" dan "bola" menghasilkan "bola salju".

Menggabungkan array berarti menggabungkan array ujung ke ujung.

JavaScript Array concat()
Metode ini concat()membuat array baru dengan menggabungkan (concatenating) array yang sudah ada:

Contoh (Penggabungan Dua Array)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
Catatan
Metode ini concat()tidak mengubah array yang sudah ada. Metode ini selalu mengembalikan array baru.

Metode ini concat()dapat mengambil sejumlah argumen array.

Contoh (Penggabungan Tiga Array)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
Metode ini concat()juga dapat mengambil string sebagai argumen:

Contoh (Menggabungkan Array dengan Nilai)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
Salinan array dalam()
Metode ini copyWithin()menyalin elemen array ke posisi lain dalam array:

Contoh
Salin ke indeks 2, semua elemen dari indeks 0:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
Salin ke indeks 2, elemen dari indeks 0 hingga 2:

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
Catatan
Metode ini copyWithin()menimpa nilai yang ada.

Metode ini copyWithin()tidak menambahkan item ke dalam array.

Metode ini copyWithin()tidak mengubah panjang array.

Meratakan Array
Meratakan suatu array adalah proses mengurangi dimensionalitas suatu array.

Perataan berguna ketika Anda ingin mengubah array multidimensi menjadi array satu dimensi.

Array JavaScript datar()
ES2019 Memperkenalkan metode Array flat().

Metode ini flat()membuat array baru dengan elemen-elemen sub-array yang dirangkai hingga kedalaman tertentu.

Contoh
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
Dukungan Peramban
JavaScript Array flat()didukung di semua browser modern sejak Januari 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
Array JavaScript flatMap()
ES2019 menambahkan metode Array flatMap()ke JavaScript.

Metode ini flatMap()pertama-tama memetakan semua elemen suatu array, lalu membuat array baru dengan meratakan array tersebut.

Contoh
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
Dukungan Peramban
JavaScript Array flatMap()didukung di semua browser modern sejak Januari 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
Menyambung dan Mengiris Array
Metode ini splice()menambahkan item baru ke dalam suatu array.

Metode ini slice()mengiris bagian dari suatu array.

Sambungan Array JavaScript()
Metode ini splice()dapat digunakan untuk menambahkan item baru ke dalam array:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
Parameter pertama (2) mendefinisikan posisi di mana elemen baru harus ditambahkan (disambung).

Parameter kedua (0) menentukan berapa banyak elemen yang harus dihapus .

Parameter lainnya ("Lemon", "Kiwi") menentukan elemen baru yang akan ditambahkan .

Metode ini splice()mengembalikan array dengan item yang dihapus:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
Menggunakan splice() untuk Menghapus Elemen
Dengan pengaturan parameter yang cerdas, Anda dapat splice()menghapus elemen tanpa meninggalkan "lubang" dalam array:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
Parameter pertama (0) mendefinisikan posisi di mana elemen baru harus ditambahkan (disambung).

Parameter kedua (1) mendefinisikan berapa banyak elemen yang harus dihapus .

Parameter lainnya dihilangkan. Tidak ada elemen baru yang akan ditambahkan.

Array JavaScript untuk disambung()
ES2023 menambahkan metode Array toSpliced() sebagai cara aman untuk menyambung array tanpa mengubah array asli.

Perbedaan antara metode toSpliced() yang baru dan metode splice() yang lama adalah bahwa metode baru membuat array baru, dengan tetap menjaga array asli tidak berubah, sedangkan metode lama mengubah array asli.

Contoh
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
Irisan Array JavaScript()
Metode ini slice()mengiris bagian dari array menjadi array baru:

Contoh
Memotong bagian array dimulai dari elemen array 1 ("Oranye"):

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
Catatan
Metode ini slice()membuat array baru.

Metode ini slice()tidak menghapus elemen apa pun dari array sumber.

Contoh
Memotong bagian array dimulai dari elemen array 3 ("Apple"):

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
Metode ini slice()dapat mengambil dua argumen seperti slice(1, 3).

Metode tersebut kemudian memilih elemen dari argumen awal, dan hingga (tetapi tidak termasuk) argumen akhir.

Contoh
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
Jika argumen akhir dihilangkan, seperti pada contoh pertama, slice() metode akan memotong sisa array.

Contoh
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
toString() Otomatis
JavaScript secara otomatis mengonversi array menjadi string yang dipisahkan koma saat nilai primitif diharapkan.

Hal ini selalu terjadi saat Anda mencoba mengeluarkan suatu array.

Kedua contoh ini akan menghasilkan hasil yang sama:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
Catatan
Semua objek JavaScript memiliki metode toString()

Mencari Array
Pencarian array dibahas dalam bab berikutnya dari tutorial ini.

Mengurutkan Array
Pengurutan array mencakup metode yang digunakan untuk mengurutkan array.

Iterasi Array
Iterasi array mencakup metode yang beroperasi pada semua elemen array.