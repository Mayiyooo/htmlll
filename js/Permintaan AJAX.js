
Objek XMLHttpRequest digunakan untuk meminta data dari server.

Kirim Permintaan ke Server
Untuk mengirim permintaan ke server, kami menggunakan metode open() dan send() dari XMLHttpRequestobjek:

xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
Method	Description
open(method, url, async)	Specifies the type of request

method: the type of request: GET or POST
url: the server (file) location
async: true (asynchronous) or false (synchronous)
send()	Sends the request to the server (used for GET)
send(string)	Sends the request to the server (used for POST)
Url - Sebuah File di Server
Parameter url dari open()metode ini adalah alamat ke file di server:

xhttp.open("GET", "ajax_test.asp", true);
Berkasnya dapat berupa berkas apa pun, seperti .txt dan .xml, atau berkas skrip server seperti .asp dan .php (yang dapat melakukan tindakan pada server sebelum mengirimkan respons kembali).

Asinkron - Benar atau Salah?
Permintaan server harus dikirim secara asinkron.

Parameter async dari metode open() harus disetel ke true:

xhttp.open("GET", "ajax_test.asp", true);
Dengan mengirim secara asinkron, JavaScript tidak harus menunggu respons server, tetapi dapat:

mengeksekusi skrip lain sambil menunggu respons server
menangani respons setelah respons siap
Nilai default untuk parameter async adalah async = true.

Anda dapat dengan aman menghapus parameter ketiga dari kode Anda.

XMLHttpRequest Sinkron (async = false) tidak disarankan karena JavaScript akan berhenti dieksekusi hingga respons server siap. Jika server sibuk atau lambat, aplikasi akan hang atau berhenti.

DAPATKAN atau POST?
GETlebih sederhana dan cepat daripada POST, dan dapat digunakan dalam banyak kasus.

Namun, selalu gunakan permintaan POST ketika:

Berkas yang di-cache bukanlah suatu pilihan (memperbarui berkas atau basis data pada server).
Mengirim sejumlah besar data ke server (POST tidak memiliki batasan ukuran).
Mengirim masukan pengguna (yang dapat berisi karakter yang tidak dikenal), POST lebih kuat dan aman daripada GET.
Permintaan GET
Permintaan sederhana GET:

Contoh
xhttp.open("GET", "demo_get.asp");
xhttp.send();
Pada contoh di atas, Anda mungkin mendapatkan hasil yang di-cache. Untuk menghindari hal ini, tambahkan ID unik ke URL:

Contoh
xhttp.open("GET", "demo_get.asp?t=" + Math.random());
xhttp.send();
Jika Anda ingin mengirim informasi dengan GETmetode tersebut, tambahkan informasi ke URL:

Contoh
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
xhttp.send();
Bagaimana server menggunakan masukan dan bagaimana server menanggapi permintaan, dijelaskan dalam bab selanjutnya.

IKLAN

Permintaan POST
Permintaan sederhana POST:

Contoh
xhttp.open("POST", "demo_post.asp");
xhttp.send();
Untuk POST data seperti formulir HTML, tambahkan header HTTP dengan setRequestHeader(). Tentukan data yang ingin Anda kirim dalam send()metode ini:

Contoh
xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
Method	Description
setRequestHeader(header, value)	Adds HTTP headers to the request

header: specifies the header name
value: specifies the header value
Permintaan Sinkron
Untuk mengeksekusi permintaan sinkron, ubah parameter ketiga dalam open()metode menjadi false:

xhttp.open("GET", "ajax_info.txt", false);
Terkadang async = false digunakan untuk pengujian cepat. Anda juga akan menemukan permintaan sinkron dalam kode JavaScript lama.

Karena kode akan menunggu penyelesaian server, tidak diperlukan onreadystatechange fungsi:

Contoh
xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;
