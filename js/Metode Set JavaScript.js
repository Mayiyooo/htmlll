Metode Set JavaScript
Metode Set Dasar
new Set()
tambah()
hapus()
hapus()
entri()
untukSetiap()
memiliki()
kunci()
nilai()
Tetapkan Properti
ukuran

Metode Set() yang baru
Berikan array ke new Set()konstruktor:

Contoh
// Create a new Set
const letters = new Set(["a","b","c"]);
Metode add()
Contoh
letters.add("d");
letters.add("e");
Jika Anda menambahkan elemen yang sama, hanya elemen pertama yang akan disimpan:

Contoh
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
Catatan
Fitur utama objek Set adalah mereka hanya menyimpan nilai unik.

Jika ada percobaan untuk menambah suatu unsur yang sudah ada dalam himpunan, maka add()metode tersebut tidak akan memberikan pengaruh apa pun dan himpunan tersebut tidak akan berubah.

Ukuran Properti
Contoh
// Create a new Set
const mySet = new Set(["a","b","c"]);

// The number of elements are
mySet.size;
Mencantumkan Elemen Set
Anda dapat mencantumkan semua elemen Set (nilai) dengan loop for..of :

Contoh
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
Metode has()
Metode ini has()mengembalikan truenilai tertentu yang ada dalam satu set.

Contoh
// Create a Set
const letters = new Set(["a","b","c"]);

// Does the Set contain "d"?
answer = letters.has("d");
IKLAN

Metode forEach()
Metode ini forEach()memanggil fungsi untuk setiap elemen Set:

Contoh
// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})
Metode values()
Metode ini values()mengembalikan objek Iterator dengan nilai dalam Set:

Contoh 1
// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Values
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}
Contoh 2
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Values
let text = "";
for (const entry of letters.values()) {
  text += entry;
}
Metode kunci()
Metode ini keys()mengembalikan objek Iterator dengan nilai dalam Set:

Catatan
Suatu Set tidak memiliki kunci, sehingga keys()menghasilkan hasil yang sama dengan values().

Ini membuat Set kompatibel dengan Peta.

Contoh 1
// Create a Set
const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.keys();

// List all Elements
let text = "";
for (const x of myIterator) {
  text += x;
}
Contoh 2
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters.keys()) {
  text += x;
}
Metode entri()
Metode ini entries()mengembalikan Iterator dengan pasangan [nilai,nilai] dari suatu Set.

Catatan
Metode ini entries()seharusnya mengembalikan pasangan [kunci, nilai] dari suatu objek.

Suatu Set tidak memiliki kunci, jadi entries()metode mengembalikan [nilai,nilai].

Ini membuat Set kompatibel dengan Peta.

Contoh 1
// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}
Contoh 2
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Entries
let text = "";
for (const entry of letters.entries()) {
  text += entry;
}