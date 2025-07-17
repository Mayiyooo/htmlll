Tugas JavaScript
Operator Penugasan JavaScript
Operator penugasan menetapkan nilai ke variabel JavaScript.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
Operator Penugasan Shift
Operator	Example	Same As
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y
Operator Penugasan Bitwise
Operator	Example	Same As
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
Operator Penugasan Logika
Operator	Example	Same As
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y)
Catatan
Operator penugasan logika adalah ES2020 .

Operator =
Operator Penugasan Sederhana menetapkan nilai ke suatu variabel.

Contoh Tugas Sederhana
let x = 10;
let x = 10 + y;
Operator +=
Operator Penugasan Penjumlahan menambahkan nilai ke suatu variabel.

Contoh Tugas Penjumlahan
let x = 10;
x += 5;
let text = "Hello"; text += " World";
Operator -=
Operator Penugasan Pengurangan mengurangi suatu nilai dari suatu variabel.

Contoh Tugas Pengurangan
let x = 10;
x -= 5;
Operator *=
Operator Penugasan Perkalian mengalikan suatu variabel.

Contoh Tugas Perkalian
let x = 10;
x *= 5;
Operator **=
Operator Penugasan Eksponen menaikkan suatu variabel ke pangkat operan.

Contoh Tugas Eksponen
let x = 10;
x **= 5;
Operator /=
Operator Penugasan Pembagian membagi suatu variabel.

Contoh Penugasan Pembagian
let x = 10;
x /= 5;
Operator %=
Operator Penetapan Sisa menetapkan sisa pada suatu variabel.

Contoh Penugasan Sisa
let x = 10;
x %= 5;
IKLAN

Operator <<=
Operator Penugasan Shift Kiri menggeser variabel ke kiri.

Contoh Penugasan Shift Kiri
let x = -100;
x <<= 5;
Operator >>=
Operator Penugasan Pergeseran Kanan menggeser variabel ke kanan (bertanda).

Contoh Penugasan Shift Kanan
let x = -100;
x >>= 5;
Operator >>>=
Operator Penugasan Pergeseran Kanan Tak Bertanda menggeser variabel ke kanan (tak bertanda).

Contoh Penugasan Shift Kanan Tanpa Tanda
let x = -100;
x >>>= 5;
Operator &=
Operator Penugasan Bitwise AND melakukan operasi bitwise AND pada dua operan dan menetapkan hasilnya ke variabel.

Contoh Penugasan Bitwise AND
let x = 10;
x &= 5;
Operator |=
Operator Penugasan Bitwise OR melakukan operasi bitwise OR pada dua operan dan menetapkan hasilnya ke variabel.

Contoh Penugasan Bitwise OR
let x = 10;
x |= 5;
Operator ^=
Operator Penugasan Bitwise XOR melakukan operasi XOR bitwise pada dua operan dan menetapkan hasilnya ke variabel.

Contoh Penugasan Bitwise XOR
let x = 10;
x ^= 5;
Operator &&=
Operator penugasan logika AND digunakan antara dua nilai.

Jika nilai pertama benar, nilai kedua ditetapkan.

Contoh Penugasan Logika AND
let x = 10;
x &&= 5;
Operator &&=adalah fitur ES2020 .

Operator ||=
Operator penugasan Logika OR digunakan antara dua nilai.

Jika nilai pertama salah, nilai kedua ditetapkan.

Contoh Penugasan Logika ATAU
let x = 10;
x ||= 5;
Operator ||=adalah fitur ES2020 .

Operator ??=
Operator penugasan penggabungan Nullish digunakan antara dua nilai.

Jika nilai pertama tidak terdefinisi atau null, nilai kedua ditetapkan.

Contoh Tugas Penggabungan Nullish
let x;
x ??= 5;