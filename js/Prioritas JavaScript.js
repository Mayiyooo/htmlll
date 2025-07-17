Prioritas Operator JavaScript
Prioritas operator menggambarkan urutan pelaksanaan operasi dalam ekspresi aritmatika.

Perkalian ( *) dan pembagian ( /) mempunyai prioritas lebih tinggi daripada penjumlahan ( +) dan pengurangan ( -).

Seperti dalam matematika tradisional, perkalian dilakukan terlebih dahulu:

let x = 100 + 50 * 3;
Saat menggunakan tanda kurung, operasi di dalam tanda kurung dihitung terlebih dahulu:

let x = (100 + 50) * 3;
Operasi dengan prioritas yang sama (seperti * dan /) dihitung dari kiri ke kanan:

let x = 100 / 50 * 3;
Nilai Prioritas Operator
Ekspresi dalam tanda kurung dihitung sebelum ekspresi lainnya.
Fungsi dieksekusi sebelum hasilnya digunakan di ekspresi lainnya.
Nilai	Operator	Keterangan	Contoh
18	( )	Pengelompokan Ekspresi	(100 + 50) * 3
17	.	Anggota Dari	nama orang
17	[]	Anggota Dari	orang["nama"]
17	?.	Rantai Opsional ES2020	x ?. y
17	()	Panggilan Fungsi	fungsi saya()
17	baru	Baru dengan Argumen	new Date("5 Juni 2022")
16	baru	Baru tanpa Argumen	new Date()
Operator Increment
Increment postfix dieksekusi sebelum increment prefix
15	++	Peningkatan Postfix	i++
15	--	Penurunan Postfix	Saya--
14	++	Peningkatan Awalan	++saya
14	--	Penurunan Awalan	--Saya
Operator NOT
14	!	Logika TIDAK	!(x==y)
14	~	Bitwise TIDAK	~x
Operator Unary
14	+	Unary Plus	+x
14	-	Unary Minus	-X
14	jenis	Tipe Data	tipe x
14	ruang kosong	Evaluasi Kekosongan	batal(0)
14	menghapus	Hapus Properti	hapus myCar.color
Operator Aritmatika
Perpangkatan dilakukan sebelum perkalian
Perkalian dan pembagian dilakukan sebelum penjumlahan dan pengurangan
13	**	Eksponen ES2016	10 ** 2
12	*	Perkalian	10 * 5
12	/	Divisi	10 / 5
12	%	Sisa Pembagian	10% 5
11	+	Tambahan	10 + 5
11	-	Pengurangan	10 - 5
11	+	Rangkaian	"John" + "Doe"
Operator Shift
10	<<	Geser ke Kiri	x << 2
10	>>	Geser Kanan (ditandatangani)	x >> 2
10	>>>	Geser Kanan (tanpa tanda tangan)	x >>> 2
Operator Relasional
9	di dalam	Properti dalam Objek	"PI" dalam Matematika
9	contoh	Contoh Objek	x instanceof Array
Operator Perbandingan
9	<	Kurang dari	x < y 
9	<=	Kurang dari atau sama dengan	x <= y
9	>	Lebih besar dari	x > y
9	>=	Lebih besar dari atau sama dengan	x >= Susunan
8	==	Setara	x == y
8	===	Ketat sama	x === y
8	!=	Tidak setara	x != y
8	!==	Ketat tidak setara	x !== y
Operator Bitwise
7	&	Bitwise DAN	x dan y
6	^	Bitwise XOR	x ^ y
5	Bahasa Indonesia: |	Bitwise ATAU	x | y
Operator Logika
4	&&	Logika DAN	x dan y
3	||	Logika ATAU	x || y
3	??	Nullish Coalescing ES2020	x ?? y
Operator Kondisional (terner)
2	? :	Kondisi	? "ya" : "tidak"
Operator Penugasan
Penugasan dieksekusi setelah operasi lainnya
2	=	Tugas Sederhana	x = y
2	:	Penugasan Titik Dua	x: 5
2	+=	Tugas Penjumlahan	x += y
2	-=	Tugas Pengurangan	x -= y
2	*=	Tugas Perkalian	x * = y
2	**=	Tugas Eksponen	x**= y
2	/=	Penugasan Divisi	x /= y
2	%=	Penugasan Sisa	x %= y
2	<<=	Penugasan Shift Kiri	x <<= y
2	>>=	Penugasan Shift Kanan	x >>= y
2	>>>=	Shift Kanan Tanpa Tanda	x >>>= y
2	&=	Penugasan Bitwise AND	x dan = y
2	|=	Penugasan Bitwise ATAU	x |= y
2	^=	Penugasan Bitwise XOR	x^= y
2	&&=	Penugasan Logika AND	x dan y
2	||=	Penugasan Logika ATAU	x ||= y
2	=>	Anak panah	x => y
2	menghasilkan	Jeda / Lanjutkan	hasil x
2	menghasilkan*	Melimpahkan	hasil* x
2	...	Menyebar	... X
1	,	Koma	x, y