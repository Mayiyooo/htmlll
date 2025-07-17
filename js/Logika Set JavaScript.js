Logika Set JavaScript
Metode Logika
Dalam JavaScript 2025, 7 metode logika baru ditambahkan ke objek Set:

union()
perbedaan()
persimpangan()
adalahDisjointFrom()
adalahSubsetOf()
adalahSupersetOf()
perbedaansimetris()
Metode Set baru didukung semua browser modern sejak Juni 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
Metode union()
Metode ini union()mengembalikan gabungan dua set.

Metode ini union()mengembalikan himpunan baru yang berisi elemen-elemen yang ada dalam himpunan ini, atau dalam himpunan argumen, atau keduanya:

Serikat

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
Metode interseksi()
Metode ini intersection()mengembalikan perpotongan dua set.

Metode ini intersection()mengembalikan himpunan baru yang berisi elemen-elemen yang ada dalam himpunan ini dan dalam himpunan argumen:

Persimpangan

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.intersection(B);
Metode perbedaan()
Metode ini difference()mengembalikan perbedaan antara dua set.

Metode ini difference()mengembalikan himpunan baru yang berisi elemen-elemen yang ada dalam himpunan ini tetapi tidak ada dalam himpunan argumen:

Perbedaan

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.difference(B);
Metode symmetricDifference()
Metode ini symmetricDifference()mengembalikan perbedaan simetris antara dua set.

Metode ini symmetricDifference()mengembalikan himpunan baru yang berisi elemen-elemen yang ada di dalam himpunan ini atau di himpunan argumen, tetapi tidak di keduanya:

Perbedaan Simetris

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symetricDifference(B);
IKLAN

Metode isSubsetOf()
Metode ini isSubsetOf()mengembalikan nilai truejika semua elemen dalam set ini juga merupakan elemen dalam set argumen:

Bagian

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSubsetOf(B);
Metode isSupersetOf()
Metode ini isSupersetOf()mengembalikan nilai truejika semua elemen dalam set argumen juga ada dalam set ini:

Superset

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSupersetOf(B);
Metode isDisjointFrom()
Metode ini isDisjointFrom()mengembalikan nilai true jika set ini tidak memiliki elemen yang sama dengan set argumen:

Menguraikan

Contoh
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isDisjointFrom(B);