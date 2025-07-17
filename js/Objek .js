
Objek Kehidupan Nyata
Dalam kehidupan nyata, objek adalah hal-hal seperti: rumah, mobil, orang, hewan, atau subjek lainnya.

Berikut adalah contoh objek mobil :

Objek Mobil	Properti	Metode
	
nama.mobil = Fiat

model.mobil = 500

berat.mobil = 850kg

warna.mobil = putih	
mobil.mulai()

mobil.jalan()

mobil.rem()

mobil.berhenti()
Properti Objek
Mobil di dunia nyata memiliki properti seperti berat dan warna:

nama.mobil = Fiat, model.mobil = 500, berat.mobil = 850kg, warna.mobil = putih.

Objek mobil memiliki properti yang sama , tetapi nilainya berbeda dari mobil ke mobil.

Metode Objek
Mobil di dunia nyata memiliki metode seperti mulai dan berhenti:

mobil.mulai(), mobil.mengemudi(), mobil.rem(), mobil.berhenti().

Objek mobil memiliki metode yang sama , tetapi metode tersebut dilakukan pada waktu yang berbeda .

Variabel JavaScript
Variabel JavaScript adalah wadah untuk nilai data.

Kode ini menetapkan nilai sederhana (Fiat) ke variabel bernama mobil:

Contoh
let car = "Fiat";
Objek JavaScript
Objek juga merupakan variabel. Namun, objek dapat berisi banyak nilai.

Kode ini menetapkan banyak nilai (Fiat, 500, putih) ke objek bernama mobil:

Contoh
const car = {type:"Fiat", model:"500", color:"white"};
Catatan:
Merupakan praktik umum untuk mendeklarasikan objek dengan kata kunci const .

Pelajari lebih lanjut tentang penggunaan const dengan objek di bab: JS Const .

Definisi Objek JavaScript
Cara Mendefinisikan Objek JavaScript
Menggunakan Objek Literal
Menggunakan newKata Kunci
Menggunakan Konstruktor Objek
Objek Literal JavaScript
Literal objek adalah daftar pasangan nama:nilai di dalam kurung kurawal {} .

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
Catatan:
Pasangan nama:nilai juga disebut pasangan kunci:nilai .

literal objek juga disebut inisialisasi objek .

Membuat Objek JavaScript
Contoh berikut membuat objek JavaScript dengan 4 properti:

Contoh
// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Spasi dan jeda baris tidak penting. Sebuah inisialisasi objek dapat mencakup beberapa baris:

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
Contoh ini membuat objek JavaScript kosong, lalu menambahkan 4 properti:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Menggunakan Kata Kunci baru
Contoh ini membuat objek JavaScript baru menggunakan new Object(), lalu menambahkan 4 properti:

Contoh
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Catatan:
Contoh di atas melakukan hal yang persis sama.

Namun, tidak perlu menggunakan new Object().

Untuk keterbacaan, kesederhanaan dan kecepatan eksekusi, gunakan metode literal objek .

IKLAN

Properti Objek
Nilai yang diberi nama , dalam objek JavaScript, disebut properti .

Milik	Nilai
Nama Depan	Yohanes
Nama Belakang	Kelinci betina
usia	50
warna mata	biru
Objek yang ditulis sebagai pasangan nama nilai mirip dengan:

Array asosiatif dalam PHP
Kamus dalam Python
Tabel hash dalam C
Peta hash di Java
Hash dalam Ruby dan Perl
Mengakses Properti Objek
Anda dapat mengakses properti objek dengan dua cara:

objectName.propertyName
objectName["propertyName"]
Contoh
person.lastName;
person["lastName"];
Metode Objek JavaScript
Metode adalah tindakan yang dapat dilakukan pada objek.

Metode adalah definisi fungsi yang disimpan sebagai nilai properti .

Milik	Nilai Properti
Nama Depan	Yohanes
Nama Belakang	Kelinci betina
usia	50
warna mata	biru
nama lengkap	fungsi() {kembalikan this.namadepan + " " + this.namabelakang;}
Contoh
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
Dalam contoh di atas, thismengacu pada objek orang :

this.firstName berarti properti firstName dari person .

this.lastName berarti properti lastName dari person .

Dalam JavaScript, Objek adalah Raja.
Jika Anda Memahami Objek, Anda Memahami JavaScript.
Objek adalah wadah untuk Properti dan Metode .

Properti diberi nama Nilai .

Metode adalah Fungsi yang disimpan sebagai Properti .

Properti dapat berupa nilai primitif, fungsi, atau bahkan objek lainnya.

Dalam JavaScript, hampir "semuanya" adalah objek.

Objek adalah objek
Matematika adalah objek
Fungsi adalah objek
Tanggal adalah objek
Array adalah objek
Peta adalah objek
Set adalah objek
Semua nilai JavaScript, kecuali primitif, adalah objek.

Primitif JavaScript
Nilai primitif adalah nilai yang tidak memiliki properti atau metode.

3,14 adalah nilai primitif

Tipe data primitif adalah data yang memiliki nilai primitif.

JavaScript mendefinisikan 7 jenis tipe data primitif:

string
number
boolean
null
undefined
symbol
bigint
Kekal
Nilai primitif tidak dapat diubah (dikodekan secara kaku dan tidak dapat diubah).

jika x = 3,14, Anda dapat mengubah nilai x, tetapi Anda tidak dapat mengubah nilai 3,14.

Nilai	Jenis	Komentar
"Halo"	rangkaian	"Halo" selalu "Halo"
3.14	nomor	3,14 selalu 3,14
BENAR	Boolean	benar selalu benar
PALSU	Boolean	salah selalu salah
batal	null (objek)	null selalu null
belum diartikan	belum diartikan	undefined selalu undefined
Objek JavaScript dapat diubah
Objek dapat berubah: Objek dialamatkan melalui referensi, bukan melalui nilai.

Jika orang adalah suatu objek, pernyataan berikut tidak akan membuat salinan orang:

const x = person;
Objek x bukan salinan orang. Objek x adalah orang.

Objek x dan objek person berbagi alamat memori yang sama.

Setiap perubahan pada x juga akan mengubah orang:

Contoh
//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Try to create a copy
const x = person;

// This will change age in person:
x.age = 10;
