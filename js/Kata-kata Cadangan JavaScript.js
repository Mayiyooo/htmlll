Kata-kata Cadangan JavaScript
Dalam JavaScript Anda tidak dapat menggunakan kata-kata khusus ini sebagai variabel, label, atau nama fungsi:
abstract	arguments	await*	boolean
break	byte	case	catch
char	class*	const*	continue
debugger	default	delete	do
double	else	enum*	eval
export*	extends*	false	final
finally	float	for	function
goto	if	implements	import*
in	instanceof	int	interface
let*	long	native	new
null	package	private	protected
public	return	short	static
super*	switch	synchronized	this
throw	throws	transient	true
try	typeof	var	void
volatile	while	with	yield
Kata-kata yang ditandai dengan* merupakan kata baru di ECMAScript 5 dan ECMAScript 6 .
Anda dapat membaca lebih lanjut tentang berbagai versi JavaScript di bab Versi JS .

Menghapus Kata Cadangan
Kata-kata yang dicadangkan berikut telah dihapus dari standar ECMAScript 5/6:
abstract	boolean	byte	char
double	final	float	goto
int	long	native	short
synchronized	throws	transient	volatile
Jangan gunakan kata-kata ini sebagai variabel. ECMAScript 5/6 tidak memiliki dukungan penuh di semua peramban.

IKLAN

Objek, Properti, dan Metode JavaScript
Anda juga harus menghindari penggunaan nama objek, properti, dan metode bawaan JavaScript:
Array	Date	eval	function
hasOwnProperty	Infinity	isFinite	isNaN
isPrototypeOf	length	Math	NaN
name	Number	Object	prototype
String	toString	undefined	valueOf
Kata-kata Cadangan Java
JavaScript sering digunakan bersama Java. Anda sebaiknya menghindari penggunaan beberapa objek dan properti Java sebagai pengenal JavaScript:
getClass	java	JavaArray	javaClass
JavaObject	JavaPackage		
Kata-kata Cadangan Lainnya
JavaScript dapat digunakan sebagai bahasa pemrograman di banyak aplikasi.

Anda juga harus menghindari penggunaan nama objek dan properti HTML dan Window:
alert	all	anchor	anchors
area	assign	blur	button
checkbox	clearInterval	clearTimeout	clientInformation
close	closed	confirm	constructor
crypto	decodeURI	decodeURIComponent	defaultStatus
document	element	elements	embed
embeds	encodeURI	encodeURIComponent	escape
event	fileUpload	focus	form
forms	frame	innerHeight	innerWidth
layer	layers	link	location
mimeTypes	navigate	navigator	frames
frameRate	hidden	history	image
images	offscreenBuffering	open	opener
option	outerHeight	outerWidth	packages
pageXOffset	pageYOffset	parent	parseFloat
parseInt	password	pkcs11	plugin
prompt	propertyIsEnum	radio	reset
screenX	screenY	scroll	secure
select	self	setInterval	setTimeout
status	submit	taint	text
textarea	top	unescape	untaint
window			
Penanganan Peristiwa HTML
Selain itu Anda harus menghindari penggunaan nama semua pengendali peristiwa HTML.

Contoh:
onblur	onclick	onerror	onfocus
onkeydown	onkeypress	onkeyup	onmouseover
onload	onmouseup	onmousedown	onsubmit
