Operator JavaScript
Operator Javascript digunakan untuk melakukan berbagai jenis perhitungan matematika dan logika.

Contoh:
Operator Penugasan = menetapkan nilai

Operator Penjumlahan + menambahkan nilai

Operator Perkalian * mengalikan nilai

Operator Perbandingan > membandingkan nilai

Tugas JavaScript
Operator Penugasan ( =) menetapkan nilai ke variabel:

Contoh Tugas
let x = 10;
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
Penambahan JavaScript
Operator Penjumlahan ( +) menambahkan angka:

Menambahkan
let x = 5;
let y = 2;
let z = x + y;
Perkalian JavaScript
Operator Perkalian ( *) mengalikan angka:

Mengalikan
let x = 5;
let y = 2;
let z = x * y;
Jenis-jenis Operator JavaScript
Ada berbagai jenis operator JavaScript:

Operator Aritmatika
Operator Penugasan
Operator Perbandingan
Operator String
Operator Logika
Operator Bitwise
Operator Terner
Operator Tipe
Operator Aritmatika JavaScript
Operator Aritmatika digunakan untuk melakukan aritmatika pada angka:

Contoh Operator Aritmatika
let a = 3;
let x = (100 + 50) * a;
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
Catatan
Operator aritmatika dijelaskan sepenuhnya dalam bab Aritmatika JS .

Operator Penugasan JavaScript
Operator penugasan menetapkan nilai ke variabel JavaScript.

Operator Penugasan Penjumlahan ( +=) menambahkan nilai ke suatu variabel.

Penugasan
let x = 10;
x += 5;
Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
Catatan
Operator penugasan dijelaskan sepenuhnya dalam bab Penugasan JS .

Operator Perbandingan JavaScript
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
Catatan
Operator perbandingan dijelaskan sepenuhnya dalam bab Perbandingan JS .

Perbandingan String JavaScript
Semua operator perbandingan di atas juga dapat digunakan pada string:

Contoh
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
Perhatikan bahwa string dibandingkan berdasarkan abjad:

Contoh
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
Penambahan String JavaScript
Dapat +juga digunakan untuk menambahkan (menggabungkan) string:

Contoh
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
Operator +=penugasan juga dapat digunakan untuk menambahkan (menggabungkan) string:

Contoh
let text1 = "What a very ";
text1 += "nice day";
Hasil dari text1 akan menjadi:

What a very nice day
Catatan
Bila digunakan pada string, operator + disebut operator penggabungan.

Menambahkan String dan Angka
Menambahkan dua angka akan menghasilkan hasil berupa angka, seperti 5 + 5 = 10.

Menambahkan angka dan string akan mengembalikan hasil penjumlahan sebagai string yang dirangkai seperti 5 + "5" = "55".

Contoh
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
Hasil dari x , y , dan z adalah:

10
55
Hello5
Catatan
Jika Anda menambahkan angka dan string, hasilnya akan menjadi string!

Operator Logika JavaScript
Operator	Description
&&	logical and
||	logical or
!	logical not
Catatan
Operator logika dijelaskan sepenuhnya dalam bab Perbandingan JS .

Operator Tipe JavaScript
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
Catatan
Operator tipe dijelaskan sepenuhnya dalam bab Konversi Tipe JS .

Operator Bitwise JavaScript
Operator bit bekerja pada angka 32 bit.

Setiap operan numerik dalam operasi ini diubah menjadi angka 32-bit. Hasilnya diubah kembali menjadi angka JavaScript.
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2
Contoh di atas menggunakan 4 bit unsigned. Namun, JavaScript menggunakan angka bertanda 32-bit.
Oleh karena itu, dalam JavaScript, ~5 tidak akan mengembalikan 10. Ia akan mengembalikan -6.
~00000000000000000000000000000101 akan mengembalikan 111111111111111111111111111111010