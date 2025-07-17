
Metode JavaScript toString()mengubah variabel (atau nilai) menjadi string.

Ini adalah metode bawaan untuk banyak tipe data, termasuk angka, array, tanggal, dan objek.

Metode ini berguna untuk:

Mengonversi data ke format yang dapat dibaca untuk ditampilkan
Memastikan kompatibilitas tipe saat string diperlukan
Menyesuaikan objek antarmuka pengguna lainnya
Menyesuaikan objek untuk debugging
Array JavaScript toString()
Bila digunakan pada array, toString()mengembalikan elemen array sebagai string yang dipisahkan koma.

Contoh
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
Tanggal JavaScript keString()
Bila digunakan pada tanggal, toString()mengembalikan string tanggal dan waktu yang dapat dibaca manusia.

Contoh
Mengonversi objek tanggal menjadi string:

const d = new Date();

let text = d.toString();
Angka JavaScript toString()
Bila digunakan pada angka, toString()mengembalikan angka sebagai string.

Contoh
let x = 123;

let text = x.toString();
Ubah angka menjadi string, menggunakan basis 2 (biner):

Contoh
let x = 123;

let text = x.toString(2);
Fungsi JavaScript toString()
Bila digunakan pada suatu fungsi, toString()mengembalikan kode sumber fungsi sebagai string.

Objek JavaScript toString()
Bila digunakan pada suatu objek, toString()objek tersebut akan mengembalikan "[objek Objek]".

Untuk menyediakan representasi string yang bermakna, string tersebut dapat ditimpa dalam definisi objek:

Contoh
let person = {
  firstname: "John",
  lastname: "Doe",
}
let text = person.toString();