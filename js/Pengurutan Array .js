
Urutkan Berdasarkan Abjad
Array sort()
Array reverse ()
Array toSorted()
Array toReversed()
Mengurutkan Objek
Urutkan Numerik
Urutkan Numerik
Urutkan Acak
Math.min()
Math.max()
Buatan sendiri Min()
Buatan sendiri Max()
Lihat Juga
Tutorial Array
Metode Dasar Array
Metode Pencarian
Array Metode Iterasi
Array Referensi Array
Mengurutkan Array
Metode ini sort()mengurutkan array berdasarkan abjad:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
Membalikkan Array
Metode ini reverse()membalikkan elemen dalam array:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
Dengan menggabungkan sort()dan reverse(), Anda dapat mengurutkan array dalam urutan menurun:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
Metode Array JavaScript toSorted()
ES2023 menambahkan toSorted()metode ini sebagai cara aman untuk mengurutkan array tanpa mengubah array asli.

Perbedaan antara toSorted()dan sort() adalah bahwa metode pertama membuat array baru, dengan tetap mempertahankan array asli tidak berubah, sedangkan metode terakhir mengubah array asli.

Contoh
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
Metode Array JavaScript toReversed()
ES2023 menambahkan toReversed()metode ini sebagai cara aman untuk membalikkan array tanpa mengubah array asli.

Perbedaan antara toReversed()dan reverse()adalah bahwa metode pertama membuat array baru, dengan tetap mempertahankan array asli tidak berubah, sedangkan metode terakhir mengubah array asli.

Contoh
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
Urutkan Numerik
Secara default, sort()fungsi mengurutkan nilai sebagai string .

Ini berfungsi baik untuk string ("Apple" muncul sebelum "Banana").

Jika angka diurutkan sebagai string, "25" lebih besar dari "100", karena "2" lebih besar dari "1".

Oleh karena itu, sort()metode ini akan menghasilkan hasil yang salah saat mengurutkan angka.

Anda dapat memperbaikinya dengan menyediakan fungsi perbandingan :

Contoh
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
Gunakan trik yang sama untuk mengurutkan array secara menurun:

Contoh
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
IKLAN

Fungsi Bandingkan
Tujuan fungsi pembandingan adalah untuk menentukan tatanan sortir alternatif.

Fungsi perbandingan harus mengembalikan nilai negatif, nol, atau positif, tergantung pada argumennya:

function(a, b){return a - b}
Saat sort()fungsi membandingkan dua nilai, fungsi tersebut mengirimkan nilai tersebut ke fungsi pembanding, dan mengurutkan nilai berdasarkan nilai yang dikembalikan (negatif, nol, positif).

Jika hasilnya negatif, adiurutkan sebelum b.

Jika hasilnya positif, bdiurutkan sebelum a.

Jika hasilnya 0, tidak ada perubahan yang dilakukan pada urutan sortir kedua nilai tersebut.

Contoh:

Fungsi pembanding membandingkan semua nilai dalam array, dua nilai dalam satu waktu (a, b).

Saat membandingkan 40 dan 100, sort()metode tersebut memanggil fungsi pembanding (40, 100).

Fungsi menghitung 40 - 100 (a - b), dan karena hasilnya negatif (-60), fungsi sortir akan mengurutkan 40 sebagai nilai yang lebih rendah dari 100.

Anda dapat menggunakan cuplikan kode ini untuk bereksperimen dengan pengurutan secara numerik dan alfabet:

<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
Mengurutkan Array dalam Urutan Acak
Dengan menggunakan fungsi sort, seperti yang dijelaskan di atas, Anda dapat mengurutkan array numerik dalam urutan acak

Contoh
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

Metode Fisher Yates
Metode points.sort() pada contoh di atas tidak akurat. Metode ini akan mengutamakan beberapa angka daripada angka lainnya.

Metode yang benar dan paling populer disebut shuffle Fisher Yates, dan diperkenalkan dalam ilmu data sejak tahun 1938!

Dalam JavaScript, metode ini dapat diterjemahkan menjadi ini:

Contoh
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

Temukan Nilai Array Terendah (atau Tertinggi)
Tidak ada fungsi bawaan untuk menemukan nilai maksimum atau minimum dalam suatu array.

Untuk menemukan nilai terendah atau tertinggi, Anda memiliki 3 pilihan:

Urutkan array dan baca elemen pertama atau terakhir
Gunakan Math.min() atau Math.max()
Tulis fungsi buatan sendiri
Temukan Min atau Max dengan sort()
Setelah Anda mengurutkan suatu array, Anda dapat menggunakan indeks untuk memperoleh nilai tertinggi dan terendah.

Urutkan Menaik:
Contoh
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
Urutkan Menurun:
Contoh
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
Catatan
Mengurutkan seluruh array adalah metode yang sangat tidak efisien jika Anda hanya ingin menemukan nilai tertinggi (atau terendah).

Menggunakan Math.min() pada Array
Anda dapat menggunakan Math.min.applyuntuk menemukan angka terendah dalam suatu array:

Contoh
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

Math.min.apply(null, [1, 2, 3])setara dengan Math.min(1, 2, 3).

Menggunakan Math.max() pada Array
Anda dapat menggunakan Math.max.applyuntuk menemukan angka tertinggi dalam suatu array:

Contoh
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

Math.max.apply(null, [1, 2, 3])setara dengan Math.max(1, 2, 3).

Metode Minimum Array JavaScript
Tidak ada fungsi bawaan untuk menemukan nilai terendah dalam array JavaScript.

Kode tercepat untuk menemukan angka terendah adalah dengan menggunakan metode buatan sendiri .

Fungsi ini melakukan pengulangan melalui suatu array dan membandingkan setiap nilai dengan nilai terendah yang ditemukan:

Contoh (Temukan Min)
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

Metode Maksimum Array JavaScript
Tidak ada fungsi bawaan untuk menemukan nilai tertinggi dalam array JavaScript.

Kode tercepat untuk menemukan angka tertinggi adalah dengan menggunakan metode buatan sendiri .

Fungsi ini melakukan pengulangan melalui suatu array dan membandingkan setiap nilai dengan nilai tertinggi yang ditemukan:

Contoh (Temukan Maks)
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

Mengurutkan Array Objek
Array JavaScript sering kali berisi objek:

Contoh
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
Bahkan jika objek memiliki properti dengan tipe data yang berbeda, sort()metode ini dapat digunakan untuk mengurutkan array.

Solusinya adalah menulis fungsi pembanding untuk membandingkan nilai properti:

Contoh
cars.sort(function(a, b){return a.year - b.year});
Membandingkan properti string sedikit lebih rumit:

Contoh
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
Sort() Array Stabil
ES2019 merevisi metode Array sort().

Sebelum tahun 2019, spesifikasi tersebut memperbolehkan algoritma pengurutan yang tidak stabil seperti QuickSort.

Setelah ES2019, browser harus menggunakan algoritma pengurutan yang stabil:

Saat mengurutkan elemen berdasarkan suatu nilai, elemen-elemen tersebut harus mempertahankan posisi relatifnya terhadap elemen lain dengan nilai yang sama.

Contoh
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
Pada contoh di atas, saat mengurutkan berdasarkan harga, hasilnya tidak boleh keluar dengan nama-nama di posisi relatif lain seperti ini:

X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110