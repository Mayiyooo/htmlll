Respons Server
Properti Respons Server
Property	Description
responseText	get the response data as a string
responseXML	get the response data as XML data
Properti responseText
Properti responseTextmengembalikan respons server sebagai string JavaScript, dan Anda dapat menggunakannya sebagaimana mestinya:

Contoh
document.getElementById("demo").innerHTML = xhttp.responseText;
Properti responseXML
Objek XMLHttpRequest memiliki parser XML bawaan.

Properti responseXMLmengembalikan respons server sebagai objek DOM XML.

Dengan menggunakan properti ini Anda dapat mengurai respons sebagai objek DOM XML:

Contoh
Minta file cd_catalog.xml dan parsing responsnya:

const xmlDoc = xhttp.responseXML;
const x = xmlDoc.getElementsByTagName("ARTIST");

let txt = "";
for (let i = 0; i < x.length; i++) {
  txt += x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = txt;

xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
ADVERTISEMENT

Metode Respons Server
Method	Description
getResponseHeader()	Returns specific header information from the server resource
getAllResponseHeaders()	Returns all the header information from the server resource
Metode getAllResponseHeaders()
Metode ini getAllResponseHeaders()mengembalikan semua informasi header dari respons server.

Contoh
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
Metode getResponseHeader()
Metode ini getResponseHeader()mengembalikan informasi header spesifik dari respons server.

Contoh
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();