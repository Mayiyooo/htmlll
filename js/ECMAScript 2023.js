ECMAScript 2023
Fitur Baru di JavaScript 2023
Temukan array terakhir()
Temukan Indeks Terakhir() pada array
Array toReversed()
Array yang akan diurutkan()
Array yang akan disambung()
Array dengan()
#! (Sembunyi)
Metode JavaScript Array findLast()
ES2023 menambahkan metode findLast() yang akan dimulai dari akhir array dan mengembalikan nilai elemen pertama yang memenuhi suatu kondisi.

Contoh
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
Metode JavaScript Array findLastIndex()
Metode findLastIndex() menemukan indeks elemen terakhir yang memenuhi suatu kondisi.

Contoh
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
Metode JavaScript Array toReversed()
ES2023 menambahkan metode Array toReversed() sebagai cara aman untuk membalikkan array tanpa mengubah array asli.

Perbedaan antara metode toReversed() yang baru dan metode reverse() yang lama adalah bahwa metode baru membuat array baru, dengan tetap menjaga array asli tidak berubah, sedangkan metode lama mengubah array asli.

Contoh
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
Metode Array JavaScript toSorted()
ES2023 menambahkan metode Array toSorted() sebagai cara aman untuk mengurutkan array tanpa mengubah array asli.

Perbedaan antara metode toSorted() yang baru dan metode sort() yang lama adalah bahwa metode baru membuat array baru, dengan tetap menjaga array asli tidak berubah, sedangkan metode lama mengubah array asli.

Contoh
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
Metode JavaScript Array toSpliced()
ES2023 menambahkan metode Array toSpliced() sebagai cara aman untuk menyambung array tanpa mengubah array asli.

Perbedaan antara metode toSpliced() yang baru dan metode splice() yang lama adalah bahwa metode baru membuat array baru, dengan tetap menjaga array asli tidak berubah, sedangkan metode lama mengubah array asli.

Contoh
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
IKLAN

Array JavaScript dengan Metode()
ES2023 menambahkan metode Array with() sebagai cara aman untuk memperbarui elemen dalam array tanpa mengubah array asli.

Contoh
const months = ["Januar", "Februar", "Mar", "April"];
const new = months.with(2, "March");
#! JavaScript Shebang
Shebang adalah tanda angka dan tanda seru (#!) di awal naskah:

#!/usr/bin/env node