Properti Angka JavaScript
Properti Angka
EPSILON
NILAI MAKS
NILAI MIN
INTEGER_MAKS_AMAN
INTEGER_MIN_AMAN
POSITIF_TIDAK TERBATAS
NEGATIF_TIDAK TERBATAS
NaN
Lihat Juga:
Tutorial Angka
Metode Angka
Referensi Angka
JavaScript EPSILON
Number.EPSILONadalah selisih antara bilangan floating point terkecil yang lebih besar dari 1 dan 1.

Contoh
let x = Number.EPSILON;
Catatan
Number.EPSILONadalah fitur ES6 .

Ini tidak berfungsi di Internet Explorer.

Nilai_MAKS JavaScript
Number.MAX_VALUEadalah konstanta yang mewakili angka terbesar yang mungkin dalam JavaScript.

Contoh
let x = Number.MAX_VALUE;
Properti Angka Tidak Dapat Digunakan pada Variabel
Properti angka termasuk dalam Objek Angka JavaScript .

Properti ini hanya dapat diakses sebagai Number.MAX_VALUE.

Menggunakan x.MAX_VALUE, di mana x adalah variabel atau nilai, akan mengembalikan undefined:

Contoh
let x = 6;
x.MAX_VALUE
Nilai_MIN JavaScript
Number.MIN_VALUEadalah konstanta yang mewakili angka terendah yang mungkin dalam JavaScript.

Contoh
let x = Number.MIN_VALUE;
JavaScript MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGERmewakili bilangan bulat aman maksimum dalam JavaScript.

Number.MAX_SAFE_INTEGERadalah (2 53 - 1).

Contoh
let x = Number.MAX_SAFE_INTEGER;
JavaScript MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGERmewakili bilangan bulat minimum yang aman dalam JavaScript.

Number.MIN_SAFE_INTEGERadalah -(2 53 - 1).

Contoh
let x = Number.MIN_SAFE_INTEGER;
Catatan
MAX_SAFE_INTEGERdan MIN_SAFE_INTEGERmerupakan fitur ES6 .

Mereka tidak berfungsi di Internet Explorer.


JavaScript POSITIF_TIDAK TERBATAS
Contoh
let x = Number.POSITIVE_INFINITY;
POSITIVE_INFINITYdikembalikan saat luapan:

let x = 1 / 0;
JavaScript NEGATIF_TIDAK TERBATAS
Contoh
let x = Number.NEGATIVE_INFINITY;
NEGATIVE_INFINITYdikembalikan saat luapan:

let x = -1 / 0;
JavaScript NaN - Bukan Angka
NaNadalah kata khusus JavaScript untuk angka yang bukan angka resmi.

Contoh
let x = Number.NaN;
Mencoba melakukan aritmatika dengan string non-numerik akan menghasilkan NaN(Bukan Angka):

let x = 100 / "Apple";

