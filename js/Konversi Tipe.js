
Mengonversi String ke Angka
Mengonversi Angka ke String
Mengonversi Tanggal ke Angka
Mengonversi Angka ke Tanggal
Mengonversi Boolean ke Angka
Mengonversi Angka ke Boolean
Konversi Tipe JavaScript
Variabel JavaScript dapat dikonversi ke variabel baru dan tipe data lain:

Dengan menggunakan fungsi JavaScript
Secara otomatis oleh JavaScript itu sendiri
Mengonversi String ke Angka
Metode global Number()mengubah variabel (atau nilai) menjadi angka.

Rangkaian angka (seperti "3.14") diubah menjadi angka (seperti 3.14).

String kosong (seperti "") diubah menjadi 0.

String non numerik (seperti "John") diubah menjadi NaN(Bukan Angka).

Contoh
Ini akan mengonversi:

Number("3.14")
Number(Math.PI)
Number(" ")
Number("")
Ini tidak akan mengonversi:

Number("99 88")
Number("John")
Metode Angka
Dalam bab Metode Angka , Anda akan menemukan lebih banyak metode yang dapat digunakan untuk mengubah string menjadi angka:

Method	Description
Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer
Operator Unary +
Operator unary + dapat digunakan untuk mengubah variabel menjadi angka:

Contoh
let y = "5";      // y is a string
let x = + y;      // x is a number
Jika variabel tidak dapat dikonversi, variabel tersebut akan tetap menjadi angka, tetapi dengan nilai NaN (Bukan Angka):

Contoh
let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)
IKLAN

Mengonversi Angka ke String
Metode global String()dapat mengubah angka menjadi string.

Dapat digunakan pada semua jenis angka, literal, variabel, atau ekspresi:

Contoh
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression
Metode Number toString()melakukan hal yang sama.

Contoh
x.toString()
(123).toString()
(100 + 23).toString()
Metode Lainnya
Dalam bab Metode Angka , Anda akan menemukan lebih banyak metode yang dapat digunakan untuk mengubah angka menjadi string:

Method	Description
toExponential()	Returns a string, with a number rounded and written using exponential notation.
toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	Returns a string, with a number written with a specified length
Mengonversi Tanggal ke Angka
Metode global Number()dapat digunakan untuk mengubah tanggal menjadi angka.

d = new Date();
Number(d)          // returns 1404568027739
Metode tanggal getTime() melakukan hal yang sama.

d = new Date();
d.getTime()        // returns 1404568027739
Mengonversi Tanggal ke String
Metode global String()dapat mengubah tanggal menjadi string.

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
Metode Tanggal toString()melakukan hal yang sama.

Contoh
Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
Dalam bab Metode Tanggal , Anda akan menemukan lebih banyak metode yang dapat digunakan untuk mengonversi tanggal menjadi string:

Method	Description
getDate()	Get the day as a number (1-31)
getDay()	Get the weekday a number (0-6)
getFullYear()	Get the four digit year (yyyy)
getHours()	Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	Get the minutes (0-59)
getMonth()	Get the month (0-11)
getSeconds()	Get the seconds (0-59)
getTime()	Get the time (milliseconds since January 1, 1970)
Mengonversi Boolean ke Angka
Metode global Number()juga dapat mengubah boolean menjadi angka.

Number(false)     // returns 0
Number(true)      // returns 1
Mengonversi Boolean ke String
Metode global String()dapat mengubah boolean menjadi string.

String(false)      // returns "false"
String(true)       // returns "true"
Metode Boolean toString()melakukan hal yang sama.

false.toString()   // returns "false"
true.toString()    // returns "true"
Konversi Tipe Otomatis
Saat JavaScript mencoba beroperasi pada tipe data yang "salah", ia akan mencoba mengubah nilai tersebut ke tipe yang "benar".

Hasilnya tidak selalu seperti yang Anda harapkan:

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
Konversi String Otomatis
JavaScript secara otomatis memanggil fungsi variabel toString()ketika Anda mencoba "mengeluarkan" suatu objek atau variabel:

document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
Angka dan boolean juga dikonversi, tetapi ini tidak terlalu terlihat:

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"
Tabel Konversi Tipe JavaScript
Tabel ini menunjukkan hasil konversi berbagai nilai JavaScript menjadi Angka, String, dan Boolean:

Original
Value	Converted
to Number	Converted
to String	Converted
to Boolean	Try it
false	0	"false"	false	
true	1	"true"	true	
0	0	"0"	false	
1	1	"1"	true	
"0"	0	"0"	true	
"000"	0	"000"	true	
"1"	1	"1"	true	
NaN	NaN	"NaN"	false	
Infinity	Infinity	"Infinity"	true	
-Infinity	-Infinity	"-Infinity"	true	
""	0	""	false	
"20"	20	"20"	true	
"twenty"	NaN	"twenty"	true	
[ ]	0	""	true	
[20]	20	"20"	true	
[10,20]	NaN	"10,20"	true	
["twenty"]	NaN	"twenty"	true	
["ten","twenty"]	NaN	"ten,twenty"	true	
function(){}	NaN	"function(){}"	true	
{ }	NaN	"[object Object]"	true	
null	0	"null"	false	
undefined	NaN	"undefined"	false	
Nilai dalam tanda kutip menunjukkan nilai string.

Nilai merah menunjukkan nilai yang (beberapa) tidak diharapkan oleh programmer.