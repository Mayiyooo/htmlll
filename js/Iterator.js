
Objek Iterator
Iterator adalah objek yang menyediakan cara standar untuk mengakses elemen secara berurutan .

Suatu Iterator harus mematuhi Protokol Iterator : Ia harus mempunyai metode next() .

Metode next()
Metode next() mengembalikan objek dengan dua properti:

Properti nilai menampung nilai berikutnya dalam urutan iterasi.
Properti done akan dikembalikan falsejika ada lebih banyak elemen yang diulang, jika tidak maka akan dikembalikan true.
Perulangan For Of
Pernyataan JavaScript for..ofmengulang elemen-elemen objek yang dapat diulang.

Sintaksis
for (variable of iterable) {
  // code block to be executed
}
Catatan
Secara teknis, iterable harus mengimplementasikan Symbol.iteratormetode tersebut.

Dalam JavaScript, berikut ini adalah yang dapat diulang:

Tali
Susunan
Array yang diketik
Set
Peta
Karena objek prototipe mereka memiliki Symbol.iteratormetode:

Iterator menyediakan cara terkendali untuk bekerja dengan rangkaian data, memungkinkan logika iterasi khusus untuk berbagai struktur data.

Mereka sangat berguna untuk menangani aliran data, perhitungan nilai yang lambat, dan membangun struktur data khusus dengan perilaku iterasi yang ditentukan.

Fungsi Pembantu
JavaScript 2025 (ECMAScript 2025) secara resmi menyetujui serangkaian metode Iterator Helper baru yang secara signifikan meningkatkan fungsionalitas iterator dalam JavaScript.

Metode ini menyediakan cara yang lebih fungsional dan efisien untuk bekerja dengan objek yang dapat diulang, termasuk generator, dengan memungkinkan manipulasi dan transformasi langsung tanpa terlebih dahulu mengubahnya menjadi array:

Fungsi	Keterangan
menjatuhkan()	Mengembalikan iterator yang melewati sejumlah elemen tertentu sebelum menghasilkan sisanya
setiap()	Mengembalikan truejika semua elemen memenuhi fungsi pengujian
menyaring()	Mengembalikan iterator yang berisi elemen yang memenuhi fungsi filter
menemukan()	Mengembalikan elemen pertama yang memenuhi fungsi pengujian
peta datar()	Mengembalikan iterator dengan memetakan setiap elemen dan kemudian meratakan hasilnya
untukSetiap()	Menjalankan fungsi satu kali untuk setiap elemen dalam iterator.
dari()	membuat objek iterator dari objek yang dapat diulang
peta()	Mengembalikan iterator dengan semua elemen yang ditransformasikan oleh fungsi peta
mengurangi()	Menerapkan fungsi pereduksi terhadap setiap elemen untuk menguranginya menjadi satu nilai
beberapa()	Mengembalikan truejika setidaknya satu elemen memenuhi fungsi pengujian
mengambil()	Mengembalikan iterator yang menghasilkan sejumlah elemen tertentu
Metode Iterator.from()
Membuat Iterator.from() objek iterator dari objek iterable atau objek iterator yang sudah ada.

Contoh
// Create an iterator
const myIterator = Iterator.from([1, 2, 3]);

// Iterate over the elements
let text = "";
for (const x of myIterator) {
  text += x;
}
Metode filter()
Metode ini filter()mengembalikan iterator baru berisi elemen yang memenuhi fungsi filter.

Contoh
// Create an iterator
const myIterator = Iterator.from([32, 33, 16, 40]);

// Filter the iterator
const filteredIterator = myIterator.filter(x => x > 18);
Metode map()
Metode ini map()mengembalikan iterator baru dengan semua elemen ditransformasikan oleh fungsi peta.

Contoh
// Create an iterator
const myIterator = Iterator.from("123456789");

// Now you can use the map method
const mappedIterator = myIterator.map(x => x * 2);
Metode flatMap()
Metode ini flatMap()mengembalikan iterator baru dengan memetakan setiap elemen lalu meratakan hasilnya menjadi satu iterator.

Contoh
// Create an iterator
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// Map the Iterator
const mappedIterator = myIterator.flatMap(x => [x, x * 10]);
Metode take()
Metode ini take()mengembalikan iterator baru yang menghasilkan paling banyak sejumlah elemen tertentu.

Contoh
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// Take the first five elements
const firstFive = myIterator.take(5);
Metode drop()
Metode ini drop()mengembalikan iterator baru yang melewati sejumlah elemen tertentu sebelum menghasilkan sisanya.

Contoh
// Create an iterator
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// Remove the first five
const firstFive = myIterator.drop(5);
Metode find()
Metode ini find(fn)mengembalikan elemen pertama yang memenuhi fungsi pengujian.

Contoh
// Create an iterator
const myIterator = Iterator.from([3, 10, 18, 30, 20]);

// Find first greater than 18
let result = myIterator.find(x => x > 18);
Metode reduce()
Metode ini reduce()menerapkan fungsi pereduksi terhadap akumulator dan setiap elemen untuk menguranginya menjadi satu nilai tunggal.

Contoh
// Create an Iterator
const myIterator = Iterator.from([175, 50, 25]);

// Reduce the Iterator
let result = myIterator.reduce(myFunc);
Metode every()
Metode ini every(fn)mengembalikan truejika semua elemen dalam iterator memenuhi fungsi pengujian yang disediakan.

Contoh
// Create an Iterator
const myIterator = Iterator.from("123456789");

// Is every Element greater than 7?
let result = myIterator.every(x => x > 7);
Metode some()
Metode ini some()mengembalikan nilai truejika setidaknya satu elemen dalam iterator memenuhi fungsi pengujian yang disediakan.

Contoh
// Create an Iterator
const myIterator = Iterator.from("123456789");

// Is some Element greater than 7?
let result = myIterator.some(x => x > 7);
Metode forEach()
Metode ini forEach()mengeksekusi fungsi yang disediakan satu kali untuk setiap elemen dalam iterator.

Contoh
// Create an iterator
const myIterator = Iterator.from("123456789");

// Iterate over all elements
let text = "";
myIterator.forEach (x => text += x);
