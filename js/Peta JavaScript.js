Peta JavaScript
Objek Peta
Objek Peta menampung pasangan kunci-nilai yang kuncinya dapat berupa tipe data apa pun.

Peta juga mengingat urutan penyisipan kunci asli.

Cara Membuat Peta
Anda dapat membuat Peta JavaScript dengan:

Melewati Array kenew Map()
Buat Peta dan gunakanMap.set()
Metode Map() yang baru
Anda dapat membuat Peta dengan meneruskan Array ke new Map()konstruktor:

Contoh
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
Metode set()
Anda dapat menambahkan elemen ke Peta dengan set()metode:

Contoh
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
Metode ini set()juga dapat digunakan untuk mengubah nilai Peta yang ada:

Contoh
fruits.set("apples", 200);
Metode get()
Metode ini get()mendapatkan nilai kunci dalam Peta:

Contoh
fruits.get("apples");    // Returns 500
IKLAN

Peta adalah Objek
typeofmengembalikan objek:

Contoh
// Returns object:
typeof fruits;
instanceofPeta mengembalikan nilai benar:

Contoh
// Returns true:
fruits instanceof Map;
Objek JavaScript vs Peta
Perbedaan antara Objek dan Peta JavaScript:
Obyek	Peta
Tidak dapat diulang secara langsung	Dapat diulang secara langsung
Tidak memiliki properti ukuran	Memiliki properti ukuran
Kunci harus berupa String (atau Simbol)	Kunci dapat berupa tipe data apa pun
Kunci tidak tersusun dengan baik	Kunci diurutkan berdasarkan penyisipan
Memiliki kunci default	Tidak memiliki kunci default