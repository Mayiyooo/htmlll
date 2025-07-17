Bagaimana Cara Penggunaannya
Operator perbandingan dapat digunakan dalam pernyataan kondisional untuk membandingkan nilai dan mengambil tindakan tergantung pada hasilnya:

if (age < 18) text = "Too young to buy alcohol";
Anda akan mempelajari lebih lanjut tentang penggunaan pernyataan kondisional di bab berikutnya dari tutorial ini.

Operator Logika
Operator logika digunakan untuk menentukan logika antara variabel atau nilai.

Mengingat x = 6dan y = 3, tabel di bawah ini menjelaskan operator logika:

Operator	Description	Example	Try it
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true	
Operator Kondisional (Terner)
JavaScript juga berisi operator kondisional yang menetapkan nilai ke variabel berdasarkan beberapa kondisi.

Sintaksis
variablename = (condition) ? value1:value2 
Contoh
let voteable = (age < 18) ? "Too young":"Old enough";
Jika variabel usia bernilai di bawah 18 tahun, nilai variabel yang dapat dipilih akan menjadi "Terlalu muda", jika tidak, nilai yang dapat dipilih akan menjadi "Cukup umur".

Membandingkan Berbagai Jenis
Membandingkan data berbagai jenis dapat memberikan hasil yang tidak diharapkan.

Saat membandingkan string dengan angka, JavaScript akan mengonversi string tersebut menjadi angka saat melakukan perbandingan. String kosong dikonversi menjadi 0. String non-numerik dikonversi menjadi , NaNyang selalu bernilai false.

Case	Value	Try
2 < 12	true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false	
Saat membandingkan dua string, "2" akan lebih besar daripada "12", karena (berdasarkan abjad) 1 lebih kecil daripada 2.

Untuk mendapatkan hasil yang tepat, variabel harus dikonversi ke tipe yang tepat sebelum perbandingan:

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
Operator Penggabungan Nullish (??)
Operator ??mengembalikan argumen pertama jika bukan nullish ( nullatau undefined).

Jika tidak, ia mengembalikan argumen kedua.

Contoh
let name = null;
let text = "missing";
let result = name ?? text;
Operator nullish didukung di semua browser sejak Maret 2020:

Chrome 80	Edge 80	Firefox 72	Safari 13.1	Opera 67
Feb 2020	Feb 2020	Jan 2020	Mar 2020	Mar 2020
Operator Rantai Opsional (?.)
Operator ?.mengembalikan undefinedjika suatu objek adalah undefinedatau null(bukannya menimbulkan kesalahan).

Contoh
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;Bagaimana Cara Penggunaannya
Operator perbandingan dapat digunakan dalam pernyataan kondisional untuk membandingkan nilai dan mengambil tindakan tergantung pada hasilnya:

if (age < 18) text = "Too young to buy alcohol";
Anda akan mempelajari lebih lanjut tentang penggunaan pernyataan kondisional di bab berikutnya dari tutorial ini.

Operator Logika
Operator logika digunakan untuk menentukan logika antara variabel atau nilai.

Mengingat x = 6dan y = 3, tabel di bawah ini menjelaskan operator logika:

Operator	Description	Example	Try it
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true	
Operator Kondisional (Terner)
JavaScript juga berisi operator kondisional yang menetapkan nilai ke variabel berdasarkan beberapa kondisi.

Sintaksis
variablename = (condition) ? value1:value2 
Contoh
let voteable = (age < 18) ? "Too young":"Old enough";
Jika variabel usia bernilai di bawah 18 tahun, nilai variabel yang dapat dipilih akan menjadi "Terlalu muda", jika tidak, nilai yang dapat dipilih akan menjadi "Cukup umur".

Membandingkan Berbagai Jenis
Membandingkan data berbagai jenis dapat memberikan hasil yang tidak diharapkan.

Saat membandingkan string dengan angka, JavaScript akan mengonversi string tersebut menjadi angka saat melakukan perbandingan. String kosong dikonversi menjadi 0. String non-numerik dikonversi menjadi , NaNyang selalu bernilai false.

Case	Value	Try
2 < 12	true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false	
Saat membandingkan dua string, "2" akan lebih besar daripada "12", karena (berdasarkan abjad) 1 lebih kecil daripada 2.

Untuk mendapatkan hasil yang tepat, variabel harus dikonversi ke tipe yang tepat sebelum perbandingan:

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
Operator Penggabungan Nullish (??)
Operator ??mengembalikan argumen pertama jika bukan nullish ( nullatau undefined).

Jika tidak, ia mengembalikan argumen kedua.

Contoh
let name = null;
let text = "missing";
let result = name ?? text;
Operator nullish didukung di semua browser sejak Maret 2020:

Chrome 80	Edge 80	Firefox 72	Safari 13.1	Opera 67
Feb 2020	Feb 2020	Jan 2020	Mar 2020	Mar 2020
Operator Rantai Opsional (?.)
Operator ?.mengembalikan undefinedjika suatu objek adalah undefinedatau null(bukannya menimbulkan kesalahan).

Contoh
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;