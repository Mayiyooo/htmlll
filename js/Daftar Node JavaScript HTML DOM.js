Daftar Node JavaScript HTML DOM
Objek HTML DOM NodeList
Objek NodeListadalah daftar (kumpulan) simpul yang diekstrak dari suatu dokumen.

Sebuah NodeListobjek hampir sama dengan sebuah HTMLCollectionbenda.

Beberapa browser (lama) mengembalikan objek NodeList alih-alih HTMLCollection untuk metode seperti getElementsByClassName().

Semua browser mengembalikan objek NodeList untuk properti childNodes. 

Sebagian besar peramban mengembalikan objek NodeList untuk metode tersebut querySelectorAll().

Kode berikut memilih semua <p>node dalam dokumen:

Contoh
const myNodeList = document.querySelectorAll("p");
Elemen-elemen dalam NodeList dapat diakses berdasarkan nomor indeks.

Untuk mengakses simpul <p> kedua Anda dapat menulis:

myNodeList[1]
Catatan: Indeks dimulai dari 0.

Panjang Daftar Node HTML DOM
Properti ini lengthmenentukan jumlah node dalam daftar node:

Contoh
myNodelist.length
Properti lengthini berguna ketika Anda ingin melakukan pengulangan melalui node dalam daftar node:

Contoh
Ubah warna semua elemen <p> dalam daftar node:

const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
}
IKLAN

Perbedaan Antara HTMLCollection dan NodeList
NodeList dan HTMLcollection pada dasarnya adalah hal yang sama .

Keduanya merupakan koleksi (daftar) node (elemen) mirip array yang diekstrak dari sebuah dokumen. Node-node tersebut dapat diakses berdasarkan nomor indeks. Indeks dimulai dari 0.

Keduanya memiliki properti panjang yang mengembalikan jumlah elemen dalam daftar (koleksi).

HTMLCollection adalah kumpulan elemen dokumen .

NodeList adalah kumpulan node dokumen (node elemen, node atribut, dan node teks).

Item HTMLCollection dapat diakses berdasarkan nama, id, atau nomor indeksnya.

Item NodeList hanya dapat diakses berdasarkan nomor indeksnya.

HTMLCollection selalu merupakan koleksi yang aktif . Contoh: Jika Anda menambahkan elemen <li> ke sebuah daftar di DOM, daftar di HTMLCollection juga akan berubah.

NodeList biasanya berupa koleksi statis . Contoh: Jika Anda menambahkan elemen <li> ke sebuah daftar di DOM, daftar di NodeList tidak akan berubah.

Metode getElementsByClassName()dan getElementsByTagName() mengembalikan HTMLCollection langsung.

Metode ini querySelectorAll()mengembalikan NodeList statis.

Properti childNodesmengembalikan NodeList yang aktif.