Operasi Bitwise JavaScript
Operator Bitwise JavaScript
Operator	Name	Description
&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
Contoh
Operation	Result	Same as	Result
5 & 1	1	0101 & 0001	 0001
5 | 1	5	0101 | 0001	 0101
~ 5	10	 ~0101	 1010
5 << 1	10	0101 << 1	 1010
5 ^ 1	4	0101 ^ 0001	 0100
5 >> 1	2	0101 >> 1	 0010
5 >>> 1	2	0101 >>> 1	 0010
JavaScript Menggunakan Operand Bitwise 32 bit
JavaScript menyimpan angka sebagai angka floating point 64 bit, tetapi semua operasi bitwise dilakukan pada angka biner 32 bit.

Sebelum operasi bitwise dilakukan, JavaScript mengubah angka menjadi bilangan bulat bertanda 32 bit.

Setelah operasi bitwise dilakukan, hasilnya diubah kembali menjadi angka JavaScript 64 bit.

Contoh di atas menggunakan bilangan biner tak bertanda 4 bit. Oleh karena itu, ~5 menghasilkan 10.

Karena JavaScript menggunakan bilangan bulat bertanda 32 bit, ia tidak akan mengembalikan 10. Ia akan mengembalikan -6.

000000000000000000000000000000101 (5)

1111111111111111111111111111111010 (~5 = -6)

Bilangan bulat bertanda menggunakan bit paling kiri sebagai tanda minus.

JavaScript Bitwise DAN
Bila AND bitwise dilakukan pada sepasang bit, ia akan mengembalikan nilai 1 jika kedua bit bernilai 1.

Contoh kecilnya:
Operasi	Hasil
0 dan 0	0
0 dan 1	0
1 dan 0	0
1 & 1	1
Contoh 4 bit:
Operasi	Hasil
1111 dan 0000	0000
1111 dan 0001	0001
1111 dan 0010	0010
1111 dan 0100	0100
JavaScript Bitwise ATAU
Ketika OR bitwise dilakukan pada sepasang bit, ia mengembalikan 1 jika salah satu bitnya adalah 1:

Contoh kecilnya:
Operasi	Hasil
0 | 0	0
0 | 1	1 
1 | 0	1
1 | 1	1
Contoh 4 bit:
Operasi	Hasil
1111 | 0000	1111
1111 | 0001	1111
1111 | 0010	1111
1111 | 0100	1111
JavaScript Bitwise XOR
Ketika XOR bitwise dilakukan pada sepasang bit, ia mengembalikan 1 jika bitnya berbeda:

Contoh kecilnya:
Operasi	Hasil
0 ^ 0	0
0 ^ 1	1 
1^0	1
1 ^ 1	0 
Contoh 4 bit:
Operasi	Hasil
1111 ^ 0000	1111
1111 ^ 0001	tahun 1110
1111 ^ 0010	1101
1111 ^ 0100	1011
JavaScript Bitwise DAN (&)
Bitwise AND mengembalikan 1 hanya jika kedua bit bernilai 1:

Desimal	Biner
5	000000000000000000000000000000101
1	0000000000000000000000000000000001
5 & 1	0000000000000000000000000000000001 (1)
Contoh
let x = 5 & 1;
JavaScript Bitwise ATAU (|)
Bitwise OR mengembalikan 1 jika salah satu bitnya adalah 1:

Desimal	Biner
5	000000000000000000000000000000101
1	0000000000000000000000000000000001
5 | 1	000000000000000000000000000000101 (5)
Contoh
let x = 5 | 1;
JavaScript Bitwise XOR (^)
Bitwise XOR mengembalikan 1 jika bitnya berbeda:

Desimal	Biner
5	000000000000000000000000000000101
1	0000000000000000000000000000000001
5^1	000000000000000000000000000000100 (4)
Contoh
let x = 5 ^ 1;
JavaScript Bitwise TIDAK (~)
Desimal	Biner
5	000000000000000000000000000000101
~5	1111111111111111111111111111111010 (-6)
Contoh
let x = ~5;
JavaScript (Isi Nol) Shift Kiri Bitwise (<<)
Ini adalah pergeseran kiri pengisian nol. Satu atau lebih bit nol didorong masuk dari kanan, dan bit paling kiri dihilangkan:

Desimal	Biner
5	000000000000000000000000000000101
5 << 1	00000000000000000000000000001010 (10)
Contoh
let x = 5 << 1;
JavaScript (Mempertahankan Tanda) Pergeseran Kanan Bitwise (>>)
Ini adalah tanda yang mempertahankan pergeseran ke kanan. Salinan bit paling kiri didorong masuk dari kiri, dan bit paling kanan jatuh:

Desimal	Biner
-5	1111111111111111111111111111111011
-5 >> 1	1111111111111111111111111111111101 (-3)
Contoh
let x = -5 >> 1;
JavaScript (Isi Nol) Shift Kanan (>>>)
Ini adalah pergeseran kanan pengisian nol. Satu atau lebih bit nol didorong masuk dari kiri, dan bit paling kanan dihilangkan:

Desimal	Biner
5	000000000000000000000000000000101
5 >>> 1	000000000000000000000000000000010 (2)
Contoh
let x = 5 >>> 1;
Bilangan Biner
Angka biner dengan hanya satu set bit mudah dipahami:

Representasi Biner	Nilai desimal
0000000000000000000000000000000001	1
0000000000000000000000000000000010	2
000000000000000000000000000000100	4
000000000000000000000000000001000	8
000000000000000000000000000010000	16
000000000000000000000000000100000	32
000000000000000000000000001000000	64
Menetapkan beberapa bit tambahan akan mengungkap pola biner:

Representasi Biner	Nilai desimal
000000000000000000000000000000101	5 (4 + 1)
000000000000000000000000000001101	13 (8 + 4 + 1)
000000000000000000000000000101101	45 (32 + 8 + 4 + 1)
Angka biner JavaScript disimpan dalam format komplemen dua.

Ini berarti bahwa angka negatif adalah NOT bitwise dari angka tersebut ditambah 1:

Representasi Biner	Nilai desimal
000000000000000000000000000000101	5
1111111111111111111111111111111011	-5
000000000000000000000000000000110	6
1111111111111111111111111111111010	-6
000000000000000000000000000101000	40
111111111111111111111111111011000	-40
Candaan:
Hanya ada 10 tipe orang di dunia: mereka yang mengerti biner dan mereka yang tidak.

Mengonversi Desimal ke Biner
Contoh
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
Mengonversi Biner ke Desimal
Contoh
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}