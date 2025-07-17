Set JavaScript
Set JavaScript adalah kumpulan nilai unik.

Setiap nilai hanya dapat muncul satu kali dalam satu Set.

Nilainya dapat berupa tipe apa pun, nilai primitif atau objek.

Cara Membuat Set
Anda dapat membuat Set JavaScript dengan:

Melewati array kenew Set()
Buat set kosong dan gunakan add()untuk menambahkan nilai
Metode Set() yang baru
Berikan array ke new Set()konstruktor:

Contoh
// Create a Set
const letters = new Set(["a","b","c"]);
Buat Set dan tambahkan nilai:

Contoh
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
Buat Set dan tambahkan variabel:

Contoh
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
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
IKLAN

Mencantumkan Elemen
Anda dapat mencantumkan semua elemen Set (nilai) dengan loop for..of :

Contoh
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
Set adalah Objek
typeofmengembalikan objek:

typeof letters;      // Returns object
instanceof Setmengembalikan nilai benar:

letters instanceof Set;  // Returns true
