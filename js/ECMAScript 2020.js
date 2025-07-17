ECMAScript 2020
Fitur Baru di JavaScript 2020
BigInt
String cocokSemua()
Operator Penggabungan Nullish (??)
Operator Rantai Opsional (?.)
Operator Penugasan Logika AND (&&=)
Penugasan Logika ATAU (||=)
Penugasan Penggabungan Nullish (??=)
Promise.allSettled()
Impor Dinamis
JavaScript BigInt
Variabel JavaScript BigIntdigunakan untuk menyimpan nilai integer besar yang terlalu besar untuk direpresentasikan oleh JavaScript normal Number.

Bilangan bulat JavaScript hanya akurat hingga sekitar 15 digit.

Contoh Bilangan Bulat
let x = 999999999999999;
let y = 9999999999999999; // too big
Contoh BigInt
let x = 9999999999999999;
let y = 9999999999999999n;
Untuk membuat BigInt, tambahkan n di akhir bilangan bulat atau panggil BigInt():

Contoh
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
JavaScript typeofa BigIntadalah "bigint":

Contoh
let x = BigInt(999999999999999);
let type = typeof x;
BigIntdidukung di semua browser modern sejak September 2020:

Chrome 67	Edge 79	Firefox 68	Safari 14	Opera 54
May 2018	Jan 2020	Jul 2019	Sep 2020	Jun 2018
JavaScript String matchAll()
Sebelum ES2020 tidak ada metode string yang dapat digunakan untuk mencari semua kemunculan string dalam sebuah string.

Contoh
const iterator = text.matchAll("Cats");
Jika parameternya adalah ekspresi reguler, maka tanda global (g) harus ditetapkan, jika tidak maka TypeError akan dilemparkan.

Contoh
const iterator = text.matchAll(/Cats/g);
Jika Anda ingin melakukan pencarian tanpa memperhatikan huruf besar/kecil, tanda tidak memperhatikan huruf (i) harus ditetapkan:

Contoh
const iterator = text.matchAll(/Cats/gi);
Catatan
ES2021 memperkenalkan metode string replaceAll().

IKLAN

Operator Penggabungan Nullish (??)
Operator ??mengembalikan argumen pertama jika bukan nullish ( nullatau undefined).

Jika tidak, ia mengembalikan yang kedua.

Contoh
let name = null;
let text = "missing";
let result = name ?? text;
Operator nullish didukung di semua browser modern sejak Maret 2020:

Chrome 80	Edge 80	Firefox 72	Safari 13.1	Opera 67
Feb 2020	Feb 2020	Jan 2020	Mar 2020	Mar 2020
Operator Rantai Opsional (?.)
Operator Rantai Opsional mengembalikan undefinedjika suatu objek adalah undefinedatau null(alih-alih menimbulkan kesalahan).

Contoh
const car = {type:"Fiat", model:"500", color:"white"};
let name = car?.name;
Operator ini ?.=didukung di semua browser modern sejak Maret 2020:

Chrome 80	Edge 80	Firefox 74	Safari 13.1	Opera 67
Feb 2020	Feb 2020	Mar 2020	Mar 2020	Mar 2020
Operator &&=
Operator Penugasan Logika AND digunakan antara dua nilai.

Jika nilai pertama adalah true, nilai kedua ditetapkan.

Contoh Penugasan Logika AND
let x = 10;
x &&= 5;
Operator &&=didukung di semua browser modern sejak September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Mar 2020	Sep 2020	Sep 2020
Operator ||=
Operator Penugasan Logika OR digunakan antara dua nilai.

Jika nilai pertama adalah false, nilai kedua ditetapkan.

Contoh Penugasan Logika ATAU
let x = 10;
x ||= 5;
Operator ||=didukung di semua browser modern sejak September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Mar 2020	Sep 2020	Sep 2020
Operator ??=
Operator Penugasan Penggabungan Nullish digunakan antara dua nilai.

Jika nilai pertama adalah undefinedatau null, nilai kedua ditetapkan.

Contoh Tugas Penggabungan Nullish
let x;
x ??= 5;
Operator ??=didukung di semua browser modern sejak September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Mar 2020	Sep 2020	Sep 2020
Janji JavaScript.allSettled()
Metode ini Promise.allSettled()mengembalikan satu Promise dari daftar promise.

Contoh
// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise1, myPromise2]).then((results) =>
  results.forEach((x) => myDisplay(x.status)),
);