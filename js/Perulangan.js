
Perulangan For Of
Pernyataan JavaScript for ofmengulang nilai-nilai suatu objek yang dapat diulang.

Memungkinkan Anda melakukan pengulangan pada struktur data yang dapat diulang seperti Array, String, Maps, NodeList, dan banyak lagi:

Sintaksis
for (variable of iterable) {
  // code block to be executed
}
variabel - Untuk setiap iterasi, nilai properti berikutnya ditetapkan ke variabel. Variabel dapat dideklarasikan dengan const, let, atau var.

dapat diulang - Objek yang memiliki properti yang dapat diulang.

Dukungan Peramban
For/of ditambahkan ke JavaScript pada tahun 2015 ( ES6 )

Safari 7 adalah browser pertama yang mendukung:

Chrome 38	Edge 12	Firefox 51	Safari 7	Opera 25
Oct 2014	Jul 2015	Oct 2016	Oct 2013	Oct 2014
Untuk/dari tidak didukung di Internet Explorer.

Perulangan pada Array
Contoh
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
Melakukan Looping pada String
Contoh
let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}