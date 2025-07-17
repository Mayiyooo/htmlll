API Pengambilan JavaScript
Antarmuka Fetch API memungkinkan peramban web membuat permintaan HTTP ke server web.

😀 Tidak perlu XMLHttpRequest lagi.

Dukungan Peramban
Angka dalam tabel menentukan versi browser pertama yang sepenuhnya mendukung Fetch API:


Chrome 42	Edge 14	Firefox 40	Safari 10.1	Opera 29
Apr 2015	Aug 2016	Aug 2015	Mar 2017	Apr 2015
Contoh API Fetch
Contoh berikut mengambil sebuah berkas dan menampilkan isinya:

Contoh
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));
Karena Fetch didasarkan pada async dan await, contoh di atas mungkin lebih mudah dipahami seperti ini:

Contoh
async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}
Atau lebih baik lagi: Gunakan nama yang mudah dipahami, bukan x dan y:

Contoh
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}