
Fitur Baru di JavaScript 2025
RegExp /v Bendera()
RegExp.escape()
Float16Array
Math.f16round()
Janji.coba()
Tetapkan gabungan()
Tetapkan persimpangan()
Tetapkan perbedaan()
Tetapkan perbedaan simetris()
Tetapkan isSubsetOf()
Tetapkan isSupersetOf()
Tetapkan isDisjointFrom()
Mengimpor Atribut
Peringatan
Fitur-fitur ini relatif baru.

Peramban lama mungkin memerlukan kode alternatif (Polyfill)

Bendera RegExp /v
Bendera v merupakan "peningkatan" pada bendera u .

Bendera u (unicode) memungkinkan dukungan Unicode penuh dalam ekspresi reguler.

Bendera v mengaktifkan lebih banyak fitur terkait Unicode.

Fitur-fitur barunya adalah:

Urutan escape \p mencocokkan string, bukan hanya karakter.
Kelas karakter ditingkatkan untuk memungkinkan sintaksis irisan, gabungan, dan pengurangan, serta pencocokan beberapa karakter Unicode.
Contoh
let text = "Hello 😄";

let pattern = /\p{RGI_Emoji}/v;
let result = pattern.test(text);
let text = "Hello 😄";

let pattern = /\p{RGI_Emoji}/;
let result = pattern.test(text);
/regexp/vdidukung di semua browser modern sejak Mei 2025:

Chrome 136	Edge 136	Firefox 134	Safari 18.2	Opera 121
Apr 2025	May 2025	Jan 2025	Des 2024	Jun 2025
Metode RegExp.escape()
Metode ini RegExp.escape()mengembalikan string yang karakternya termasuk dalam sintaks ekspresi reguler di-escape.

Hal ini memungkinkan untuk memperlakukan karakter seperti +, *, ?, ^, $, (, ), [, ], {, }, |, dan \ secara harfiah, dan bukan sebagai bagian dari ekspresi reguler.

Contoh
Buat ekspresi reguler yang cocok dengan string "[*]":

// Escape a text for to use as a regular expression
const safe = RegExp.escape("[*]");

// Build a new reglar expression
const regex = new RegExp(safe);

// Text to replace within
const oldText = "[*] is a web school.";

// Perform the replace
const newText = oldText.match(regex, "W3Schools");
RegExp.escape()didukung di semua browser modern sejak Mei 2025:

Chrome 136	Edge 136	Firefox 134	Safari 18.2	Opera 121
Apr 2025	May 2025	Jan 2025	Des 2024	Jun 2025
Metode Float16Array
A Float16Arrayadalah TypedArray yang menyimpan angka floating-point 16-bit (setengah presisi) dalam format setengah presisi IEEE 754.

Float16Array memerlukan setengah memori Float32Array dan seperempatnya Float64Array.

Contoh
const myArr = new Float16Array([1.5, 2.5, 3.5, 4.5]);

let bytes = myArr.BYTES_PER_ELEMENT;
let length = myArr.length;
Objek Float16Arrayini didukung di semua browser modern sejak Juni 2024:

Chrome 135	Edge 135	Firefox 129	Safari 18.2	Opera 120
Apr 2025	Apr 2025	Aug 2024	Des 2024	May 2025
Metode Math.f16round
Metode statis Math.f16round()mengembalikan representasi titik mengambang 16-bit terdekat dari suatu angka.

Contoh
let a = Math.f16round(2.60);
let b = Math.f16round(2.50);
let c = Math.f16round(2.49);
let d = Math.f16round(-2.60);
let e = Math.f16round(-2.50);
let f = Math.f16round(-2.49);
Metode ini Math.f16round()didukung di semua browser modern sejak Juni 2024:

Chrome 135	Edge 135	Firefox 129	Safari 18.2	Opera 120
Apr 2025	Apr 2025	Aug 2024	Des 2024	May 2025
Metode Promise.try()
Metode Promise.try() memulai rantai janji dari kemungkinan melempar kode sinkron.

Ini memastikan pengecualian ditangani dengan benar sebagai penolakan janji.

Contoh
function compute() {
  return Promise.try(() => {
    const v = mayThrowSync();
    return asyncFunc(v);
  });
}
JavaScript Atur union()
Metode ini union()mengembalikan gabungan dua set.

Metode ini union()mengembalikan himpunan baru yang berisi elemen-elemen yang ada dalam himpunan ini, atau dalam himpunan argumen, atau keduanya:

Serikat

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
Metode ini union()didukung di semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Atur persimpangan()
Metode ini intersection()mengembalikan perpotongan dua set.

Metode ini intersection()mengembalikan himpunan baru yang berisi elemen-elemen yang ada dalam himpunan ini dan dalam himpunan argumen:

Persimpangan

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.intersection(B);
Metode ini intersection()didukung di semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
Perbedaan Set JavaScript()
Metode ini difference()mengembalikan perbedaan antara dua set.

Metode ini difference()mengembalikan himpunan baru yang berisi elemen-elemen yang ada dalam himpunan ini tetapi tidak ada dalam himpunan argumen:

Perbedaan

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.difference(B);
Metode ini difference()didukung di semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Tetapkan symmetricDifference()
Metode ini symmetricDifference()mengembalikan perbedaan simetris antara dua set.

Metode ini symmetricDifference()mengembalikan himpunan baru yang berisi elemen-elemen yang ada di dalam himpunan ini atau di himpunan argumen, tetapi tidak di keduanya:

Perbedaan Simetris

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symetricDifference(B);
Metode ini symmetricDifference()didukung di semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
Set JavaScript adalahSubsetOf()
Metode ini isSubsetOf()mengembalikan nilai true jika semua elemen dalam set ini adalah elemen dalam set argumen:

Bagian

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSubsetOf(B);
Metode ini isSubsetOf()didukung di semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
Set JavaScript adalahSupersetOf()
Metode ini isSupersetOf()mengembalikan nilai truejika semua elemen dalam set argumen juga ada dalam set ini:

Superset

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSupersetOf(B);
Metode ini isSupersetOf()didukung di semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
Set JavaScript isDisjointFrom()
Metode ini isDisjointFrom()mengembalikan nilai true jika set ini tidak memiliki elemen yang sama dengan set argumen:

Menguraikan

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isDisjointFrom(B);
Metode ini Set.isDisjointFrom()didukung di semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
Catatan
Menggunakan kedua bendera (u dan v) mengakibatkan SyntaxError.

Modul dengan Atribut Impor
Sintaksis
import {names} from "module-name" with {key:"data"};
Contoh
import config from "config.json" with {type:"json"};

import styles from "styles.css" with {type:"css"};

import data from "data.json" with {type:"json"};