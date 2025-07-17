AJAX - Objek XMLHttpRequest
Kunci utama AJAX adalah objek XMLHttpRequest.

Buat objek XMLHttpRequest
Tentukan fungsi panggilan balik
Buka objek XMLHttpRequest
Kirim Permintaan ke server
Objek XMLHttpRequest
Semua peramban modern mendukung XMLHttpRequestobjek tersebut.

Objek ini XMLHttpRequestdapat digunakan untuk bertukar data dengan server web di balik layar. Artinya, Anda dapat memperbarui bagian-bagian halaman web tanpa perlu memuat ulang seluruh halaman.

Membuat Objek XMLHttpRequest
Semua peramban modern (Chrome, Firefox, IE, Edge, Safari, Opera) memiliki objek bawaan XMLHttpRequest.

Sintaks untuk membuat XMLHttpRequestobjek:

variable = new XMLHttpRequest();
Tentukan Fungsi Panggilan Balik
Fungsi panggilan balik adalah fungsi yang dilewatkan sebagai parameter ke fungsi lain.

Dalam kasus ini, fungsi panggilan balik harus berisi kode yang akan dieksekusi saat respons siap.

xhttp.onload = function() {
  // What to do when the response is ready
}
Kirim Permintaan
Untuk mengirim permintaan ke server, Anda dapat menggunakan metode open() dan send() dari XMLHttpRequestobjek:

xhttp.open("GET", "ajax_info.txt");
xhttp.send();
Contoh
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
Akses Lintas Domain
Karena alasan keamanan, peramban modern tidak mengizinkan akses lintas domain.

Artinya, halaman web dan berkas XML yang coba dimuat harus berada pada server yang sama.

Contoh pada W3Schools semuanya membuka berkas XML yang terletak pada domain W3Schools.

Jika Anda ingin menggunakan contoh di atas pada salah satu halaman web Anda sendiri, file XML yang Anda muat harus berada di server Anda sendiri.

IKLAN

Metode Objek XMLHttpRequest
Method	Description
new XMLHttpRequest()	Creates a new XMLHttpRequest object
abort()	Cancels the current request
getAllResponseHeaders()	Returns header information
getResponseHeader()	Returns specific header information
open(method, url, async, user, psw)	Specifies the request

method: the request type GET or POST
url: the file location
async: true (asynchronous) or false (synchronous)
user: optional user name
psw: optional password
send()	Sends the request to the server
Used for GET requests
send(string)	Sends the request to the server.
Used for POST requests
setRequestHeader()	Adds a label/value pair to the header to be sent
Properti Objek XMLHttpRequest
Property	Description
onload	Defines a function to be called when the request is received (loaded)
onreadystatechange	Defines a function to be called when the readyState property changes
readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
responseText	Returns the response data as a string
responseXML	Returns the response data as XML data
status	Returns the status-number of a request
200: "OK"
403: "Forbidden"
404: "Not Found"
For a complete list go to the Http Messages Reference
statusText	Returns the status-text (e.g. "OK" or "Not Found")
Properti onload
Dengan XMLHttpRequestobjek tersebut Anda dapat menentukan fungsi panggilan balik yang akan dijalankan saat permintaan menerima jawaban.

Fungsi ini didefinisikan dalam onloadproperti objek XMLHttpRequest:

Contoh
xhttp.onload = function() {
  document.getElementById("demo").innerHTML = this.responseText;
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
Beberapa Fungsi Panggilan Balik
Jika Anda memiliki lebih dari satu tugas AJAX di sebuah situs web, Anda harus membuat satu fungsi untuk mengeksekusi XMLHttpRequestobjek, dan satu fungsi panggilan balik untuk setiap tugas AJAX.

Panggilan fungsi harus berisi URL dan fungsi apa yang harus dipanggil saat respons siap.

Contoh
loadDoc("url-1", myFunction1);

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}
Properti onreadystatechange
Properti ini readyStatememegang status XMLHttpRequest.

Properti ini onreadystatechangemendefinisikan fungsi panggilan balik yang akan dieksekusi saat readyState berubah.

Properti statusdan statusTextproperti memegang status objek XMLHttpRequest.

Property	Description
onreadystatechange	Defines a function to be called when the readyState property changes
readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
status	200: "OK"
403: "Forbidden"
404: "Page not found"
For a complete list go to the Http Messages Reference
statusText	Returns the status-text (e.g. "OK" or "Not Found")
Fungsi ini onreadystatechangedipanggil setiap kali readyState berubah.

Jika readyStatenilainya 4 dan statusnya 200, responsnya siap:

Contoh
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}