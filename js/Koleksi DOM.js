TML DOM
Objek Koleksi HTML
Metode ini getElementsByTagName()mengembalikan sebuah HTMLCollectionobjek.

Objek HTMLCollectionadalah daftar (kumpulan) elemen HTML yang menyerupai larik.

Kode berikut memilih semua <p>elemen dalam dokumen:

Contoh
const myCollection = document.getElementsByTagName("p");
Elemen-elemen dalam koleksi dapat diakses berdasarkan nomor indeks.

Untuk mengakses elemen <p> kedua Anda dapat menulis:

myCollection[1]
Catatan: Indeks dimulai dari 0.

Panjang Koleksi HTML HTML
Properti ini lengthmenentukan jumlah elemen dalam HTMLCollection:

Contoh
myCollection.length
Properti lengthini berguna ketika Anda ingin melakukan pengulangan pada elemen-elemen dalam suatu koleksi:

Contoh
Ubah warna teks semua elemen <p>:

const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}
HTMLCollection BUKAN sebuah array!

HTMLCollection mungkin terlihat seperti array, tetapi sebenarnya bukan.

Anda dapat mengulang daftar tersebut dan merujuk elemen-elemennya dengan angka (seperti array).

Namun, Anda tidak dapat menggunakan metode array seperti valueOf(), pop(), push(), atau join() pada HTMLCollection.