Dokumen JavaScript HTML DOM
Objek dokumen HTML DOM adalah pemilik semua objek lain di halaman web Anda.

Objek Dokumen HTML DOM
Objek dokumen mewakili halaman web Anda.

Jika Anda ingin mengakses elemen apa pun di halaman HTML, Anda selalu memulai dengan mengakses objek dokumen.

Berikut adalah beberapa contoh bagaimana Anda dapat menggunakan objek dokumen untuk mengakses dan memanipulasi HTML.

Menemukan Elemen HTML
Method	Description
document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name
Mengubah Elemen HTML
Property	Description
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element
Menambahkan dan Menghapus Elemen
Method	Description
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream
IKLAN

Menambahkan Penanganan Peristiwa
Method	Description
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
Menemukan Objek HTML
HTML DOM Level 1 pertama (1998) mendefinisikan 11 objek HTML, koleksi objek, dan properti. Ini masih berlaku di HTML5.

Kemudian, pada HTML DOM Level 3, lebih banyak objek, koleksi, dan properti ditambahkan.

Property	Description	DOM
document.anchors	Deprecated. Do not use it.	1
document.applets	Deprecated. Do not use it.	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Deprecated. Do not use it.	1
document.domConfig	Deprecated. Do not use it.	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document	1
