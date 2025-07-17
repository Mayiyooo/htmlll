Array JavaScript
Contoh
const cars = ["Saab", "Volvo", "BMW"];
Array adalah tipe objek yang dirancang untuk menyimpan kumpulan data.

Karakteristik utama array JavaScript adalah:

Elemen : Array adalah daftar nilai, yang dikenal sebagai elemen.

Berurut : Elemen-elemen array diurutkan berdasarkan indeksnya.

Indeks nol : Elemen pertama berada pada indeks 0, elemen kedua pada indeks 1, dan seterusnya.

Ukuran dinamis : Array dapat tumbuh atau menyusut saat elemen ditambahkan atau dihapus.

Heterogen : Array dapat menyimpan elemen dengan tipe data yang berbeda (angka, string, objek, dan array lainnya).

Mengapa Menggunakan Array?
Jika Anda memiliki daftar item (daftar nama mobil, misalnya), menyimpan nama-nama tersebut dalam variabel tunggal dapat terlihat seperti ini:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
Namun, bagaimana jika Anda ingin menelusuri mobil-mobil tersebut dan menemukan satu mobil tertentu? Bagaimana jika Anda tidak memiliki 3 mobil, melainkan 300?

Solusinya adalah array!

Suatu array dapat menampung banyak nilai di bawah satu nama, dan Anda dapat mengakses nilai-nilai tersebut dengan merujuk ke nomor indeks.

Membuat Array
Menggunakan literal array adalah cara termudah untuk membuat Array JavaScript.

Sintaksis:

const array_name = [item1, item2, ...];      
Catatan
Merupakan praktik umum untuk mendeklarasikan array dengan kata kunci const .

Pelajari lebih lanjut tentang const dengan array di bab: JS Array Const .

Contoh
const cars = ["Saab", "Volvo", "BMW"];
Spasi dan jeda baris tidak penting. Sebuah deklarasi dapat mencakup beberapa baris:

Contoh
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
Anda juga dapat membuat array kosong, dan menyediakan elemen nanti:

Contoh
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
Menggunakan Kata Kunci JavaScript baru
Contoh berikut juga membuat Array, dan menetapkan nilai padanya:

Contoh
const cars = new Array("Saab", "Volvo", "BMW");
Catatan
Kedua contoh di atas melakukan hal yang persis sama.

Tidak perlu menggunakan new Array().

Untuk kesederhanaan, keterbacaan dan kecepatan eksekusi, gunakan metode literal array.

IKLAN

Mengakses Elemen Array
Anda mengakses elemen array dengan merujuk ke nomor indeks :

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
Catatan: Indeks array dimulai dengan 0.

[0] adalah elemen pertama. [1] adalah elemen kedua.

Mengubah Elemen Array
Pernyataan ini mengubah nilai elemen pertama dalam cars:

cars[0] = "Opel";
Contoh
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
Mengonversi Array ke String
Metode JavaScript toString()mengonversi array menjadi serangkaian nilai array (dipisahkan koma).

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Hasil:

Banana,Orange,Apple,Mango
Akses Seluruh Array
Dengan JavaScript, array lengkap dapat diakses dengan merujuk ke nama array:

Contoh
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
Array adalah Objek
Array adalah jenis objek khusus. typeofOperator dalam JavaScript mengembalikan "objek" untuk array.

Namun, array JavaScript paling baik dijelaskan sebagai array.

Array menggunakan angka untuk mengakses "elemen-elemennya". Dalam contoh ini, person[0] mengembalikan John:

Susunan:
const person = ["John", "Doe", 46];
Objek menggunakan nama untuk mengakses "anggotanya". Dalam contoh ini, person.firstName mengembalikan John:

Obyek:
const person = {firstName:"John", lastName:"Doe", age:46};
Elemen Array Dapat Menjadi Objek
Variabel JavaScript dapat berupa objek. Array adalah jenis objek khusus.

Karena itu, Anda dapat memiliki variabel dengan tipe berbeda dalam Array yang sama.

Anda dapat memiliki objek di dalam Array. Anda dapat memiliki fungsi di dalam Array. Anda dapat memiliki array di dalam Array:

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
Properti dan Metode Array
Kekuatan sesungguhnya dari array JavaScript adalah properti dan metode array bawaan:

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
Metode array dibahas dalam bab berikutnya.

Panjang Properti
Properti lengtharray mengembalikan panjang array (jumlah elemen array).

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
Properti lengthselalu lebih tinggi satu dari indeks array tertinggi.

Mengakses Elemen Array Pertama
Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
Mengakses Elemen Array Terakhir
Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
Elemen Array Perulangan
Salah satu cara untuk melakukan perulangan melalui suatu array adalah dengan menggunakan forloop:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
Anda juga dapat menggunakan Array.forEach()fungsi:

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
Menambahkan Elemen Array
Cara termudah untuk menambahkan elemen baru ke dalam array adalah dengan menggunakan push()metode:

Contoh
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
Elemen baru juga dapat ditambahkan ke array menggunakan lengthproperti:

Contoh
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
PERINGATAN !

Menambahkan elemen dengan indeks tinggi dapat menciptakan "lubang" yang tidak terdefinisi dalam sebuah array:

Contoh
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
Array Asosiatif
Banyak bahasa pemrograman mendukung array dengan indeks bernama.

Array dengan indeks bernama disebut array asosiatif (atau hash).

JavaScript tidak mendukung array dengan indeks bernama.

Dalam JavaScript, array selalu menggunakan indeks bernomor .  

Contoh
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
PERINGATAN!!
Jika Anda menggunakan indeks bernama, JavaScript akan mendefinisikan ulang array menjadi sebuah objek.

Setelah itu, beberapa metode dan properti array akan menghasilkan hasil yang salah .

 Contoh:
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
Perbedaan Antara Array dan Objek
Dalam JavaScript, array menggunakan indeks bernomor .  

Dalam JavaScript, objek menggunakan indeks bernama .

Array adalah jenis objek khusus, dengan indeks bernomor.

Kapan Menggunakan Array. Kapan Menggunakan Objek.
JavaScript tidak mendukung array asosiatif.
Anda harus menggunakan objek ketika Anda ingin nama elemen berupa string (teks) .
Anda harus menggunakan array ketika Anda ingin nama elemen berupa angka .
JavaScript baru Array()
JavaScript memiliki konstruktor array bawaan new Array().

Namun Anda dapat menggunakannya dengan aman []sebagai gantinya.

Kedua pernyataan berbeda ini keduanya membuat array kosong baru bernama poin:

const points = new Array();
const points = [];
Kedua pernyataan berbeda ini menciptakan array baru yang berisi 6 angka:

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
Kata newkunci dapat menghasilkan beberapa hasil yang tidak terduga:

// Create an array with three elements:
const points = new Array(40, 100, 1);
// Create an array with two elements:
const points = new Array(40, 100);
// Create an array with one element ???
const points = new Array(40);  
Kesalahan Umum
const points = [40];
tidak sama dengan:

const points = new Array(40);
// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const points = new Array(40);  
Cara Mengenali Array
Pertanyaan yang umum adalah: Bagaimana saya mengetahui apakah suatu variabel adalah array?

Masalahnya adalah operator JavaScript typeofmengembalikan " object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
Operator typeof mengembalikan objek karena array JavaScript adalah objek.

Solusi 1:
Untuk mengatasi masalah ini ECMAScript 5 (JavaScript 2009) mendefinisikan metode baru Array.isArray():

Array.isArray(fruits);
Solusi 2:
Operator instanceofmengembalikan true jika suatu objek dibuat oleh konstruktor tertentu:

const fruits = ["Banana", "Orange", "Apple"];

(fruits instanceof Array);
Array dan Objek Bersarang
Nilai dalam objek dapat berupa array, dan nilai dalam array dapat berupa objek:

Contoh
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
Untuk mengakses array di dalam array, gunakan loop for-in untuk setiap array:

Contoh
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
