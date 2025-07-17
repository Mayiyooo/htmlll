
API Penyimpanan Web adalah sintaksis sederhana untuk menyimpan dan mengambil data di peramban. Sangat mudah digunakan:

Contoh
localStorage.setItem("name", "John Doe");
localStorage.getItem("name");
API Penyimpanan Web didukung di semua browser:

Chrome	IE/Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
Objek Penyimpanan Lokal
Objek localStorage menyediakan akses ke penyimpanan lokal untuk Situs Web tertentu. Objek ini memungkinkan Anda menyimpan, membaca, menambah, mengubah, dan menghapus item data untuk domain tersebut.

Data disimpan tanpa tanggal kedaluwarsa, dan tidak akan dihapus saat browser ditutup.

Data akan tersedia selama berhari-hari, berminggu-minggu, dan bertahun-tahun.

Metode setItem()
Metode localStorage.setItem() menyimpan item data dalam penyimpanan.

Dibutuhkan nama dan nilai sebagai parameter:

Contoh
localStorage.setItem("name", "John Doe");
Metode getItem()
Metode localStorage.getItem() mengambil item data dari penyimpanan.

Dibutuhkan nama sebagai parameter:

Contoh
localStorage.getItem("name");
IKLAN

Objek sessionStorage
Objek sessionStorage identik dengan objek localStorage.

Perbedaannya adalah objek sessionStorage menyimpan data untuk satu sesi.

Data terhapus saat browser ditutup.

Contoh
sessionStorage.getItem("name");
Metode setItem()
Metode sessionStorage.setItem() menyimpan item data dalam penyimpanan.

Dibutuhkan nama dan nilai sebagai parameter:

Contoh
sessionStorage.setItem("name", "John Doe");
Metode getItem()
Metode sessionStorage.getItem() mengambil item data dari penyimpanan.

Dibutuhkan nama sebagai parameter:

Contoh
sessionStorage.getItem("name");
Properti dan Metode Objek Penyimpanan
Property/Method	Description
key(n)	Returns the name of the nth key in the storage
length	Returns the number of data items stored in the Storage object
getItem(keyname)	Returns the value of the specified key name
setItem(keyname, value)	Adds a key to the storage, or updates a key value (if it already exists)
removeItem(keyname)	Removes that key from the storage
clear()	Empty all key out of the storage
Halaman Terkait untuk Web Storage API
Property	Description
window.localStorage	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
window.sessionStorage	Allows to save key/value pairs in a web browser. Stores the data for one session
