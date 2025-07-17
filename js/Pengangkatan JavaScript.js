Pengangkatan JavaScript
Hoisting adalah perilaku default JavaScript untuk memindahkan deklarasi ke atas.

Deklarasi JavaScript Diangkat
Dalam JavaScript, suatu variabel dapat dideklarasikan setelah digunakan.

Dengan kata lain; suatu variabel dapat digunakan sebelum dideklarasikan.

Contoh 1 memberikan hasil yang sama dengan Contoh 2 :

Contoh 1
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
Contoh 2
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
Untuk memahami hal ini, Anda harus memahami istilah "pengangkatan".

Hoisting adalah perilaku default JavaScript untuk memindahkan semua deklarasi ke bagian atas cakupan saat ini (ke bagian atas skrip saat ini atau fungsi saat ini).

Kata kunci let dan const
Variabel yang didefinisikan dengan letdan constdiangkat ke atas blok, tetapi tidak diinisialisasi .

Artinya: Blok kode mengetahui variabel tersebut, tetapi tidak dapat digunakan hingga variabel tersebut dideklarasikan.

Menggunakan letvariabel sebelum dideklarasikan akan menghasilkan ReferenceError.

Variabel berada dalam "zona mati temporal" dari awal blok hingga dideklarasikan:

Contoh
Ini akan menghasilkan ReferenceError:
carName = "Volvo";
let carName;
Menggunakan constvariabel sebelum dideklarasikan merupakan kesalahan sintaksis sehingga kode tidak dapat dijalankan.

Contoh
Kode ini tidak akan berjalan.

carName = "Volvo";
const carName;
Baca selengkapnya tentang let dan const di JS Let / Const .


Inisialisasi JavaScript Tidak Diangkat
JavaScript hanya mengangkat deklarasi, bukan inisialisasi.

Contoh 1 tidak memberikan hasil yang sama dengan Contoh 2 :

Contoh 1
var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
Contoh 2
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y
Apakah masuk akal jika y tidak terdefinisi dalam contoh terakhir?

Hal ini karena hanya deklarasi (var y), bukan inisialisasi (=7) yang diangkat ke atas.

Karena pengangkatan, y telah dideklarasikan sebelum digunakan, tetapi karena inisialisasi tidak diangkat, nilai y tidak terdefinisi.

Contoh 2 sama dengan penulisan:

Contoh
var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y