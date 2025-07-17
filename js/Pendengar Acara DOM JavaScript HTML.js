Pendengar Acara DOM JavaScript HTML
Metode addEventListener()
Contoh
Tambahkan pendengar peristiwa yang aktif saat pengguna mengklik tombol:

document.getElementById("myBtn").addEventListener("click", displayDate);
Metode ini addEventListener()melampirkan penangan peristiwa ke elemen yang ditentukan.

Metode ini addEventListener()melampirkan penangan peristiwa ke suatu elemen tanpa menimpa penangan peristiwa yang sudah ada.

Anda dapat menambahkan banyak pengendali peristiwa ke satu elemen.

Anda dapat menambahkan banyak pengendali peristiwa berjenis sama ke satu elemen, misalnya dua peristiwa "klik".

Anda dapat menambahkan pendengar peristiwa ke objek DOM mana pun, bukan hanya elemen HTML, misalnya objek jendela.

Metode ini addEventListener()memudahkan pengendalian bagaimana peristiwa bereaksi terhadap gelembung.

Saat menggunakan addEventListener()metode ini, JavaScript dipisahkan dari markup HTML, untuk keterbacaan yang lebih baik dan memungkinkan Anda menambahkan pendengar peristiwa bahkan saat Anda tidak mengontrol markup HTML.

Anda dapat dengan mudah menghapus pendengar acara dengan menggunakan removeEventListener()metode tersebut.

Sintaksis
element.addEventListener(event, function, useCapture);
Parameter pertama adalah jenis peristiwa (seperti " click" atau " " atau Peristiwa HTML DOMmousedown lainnya .)

Parameter kedua adalah fungsi yang ingin kita panggil saat peristiwa terjadi.

Parameter ketiga adalah nilai boolean yang menentukan apakah akan menggunakan event bubbling atau event capture. Parameter ini bersifat opsional.

Perhatikan bahwa Anda tidak menggunakan awalan "on" untuk kejadian tersebut; gunakan " click" sebagai ganti " onclick".

Tambahkan Penangan Peristiwa ke Elemen
Contoh
Peringatan "Halo Dunia!" saat pengguna mengklik suatu elemen:

element.addEventListener("click", function(){ alert("Hello World!"); });
Anda juga dapat merujuk ke fungsi "bernama" eksternal:

Contoh
Peringatan "Halo Dunia!" saat pengguna mengklik suatu elemen:

element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
IKLAN

Tambahkan Banyak Penangan Peristiwa ke Elemen yang Sama
Metode ini addEventListener()memungkinkan Anda menambahkan banyak peristiwa ke elemen yang sama, tanpa menimpa peristiwa yang sudah ada:

Contoh
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);
Anda dapat menambahkan peristiwa berbagai jenis ke elemen yang sama:

Contoh
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
Tambahkan Penangan Peristiwa ke Objek jendela
Metode ini addEventListener()memungkinkan Anda untuk menambahkan pendengar peristiwa pada objek HTML DOM apa pun seperti elemen HTML, dokumen HTML, objek jendela, atau objek lain yang mendukung peristiwa, seperti xmlHttpRequestobjek.

Contoh
Tambahkan pendengar peristiwa yang diaktifkan saat pengguna mengubah ukuran jendela:

window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
});
Melewati Parameter
Saat meneruskan nilai parameter, gunakan "fungsi anonim" yang memanggil fungsi yang ditentukan dengan parameter:

Contoh
element.addEventListener("click", function(){ myFunction(p1, p2); });
Peristiwa yang Menggelembung atau Peristiwa yang Menangkap?
Ada dua cara penyebaran peristiwa dalam HTML DOM, yaitu bubbling dan caught.

Propagasi peristiwa adalah cara untuk menentukan urutan elemen ketika suatu peristiwa terjadi. Jika Anda memiliki elemen <p> di dalam elemen <div>, dan pengguna mengklik elemen <p>, peristiwa "klik" elemen mana yang harus ditangani terlebih dahulu?

Dalam penggelembungan, peristiwa elemen paling dalam ditangani terlebih dahulu, kemudian peristiwa elemen luar: peristiwa klik elemen <p> ditangani terlebih dahulu, kemudian peristiwa klik elemen <div>.

Dalam menangkap peristiwa elemen terluar akan ditangani terlebih dahulu, kemudian peristiwa bagian dalam: peristiwa klik elemen <div> akan ditangani terlebih dahulu, kemudian peristiwa klik elemen <p>.

Dengan metode addEventListener() Anda dapat menentukan jenis propagasi dengan menggunakan parameter "useCapture":

addEventListener(event, function, useCapture);
Nilai defaultnya adalah false, yang akan menggunakan propagasi bubbling, bila nilainya ditetapkan ke true, peristiwa tersebut menggunakan propagasi penangkapan.

Contoh
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);
Metode removeEventListener()
Metode ini removeEventListener()menghapus pengendali peristiwa yang telah dilampirkan dengan metode addEventListener():

Contoh
element.removeEventListener("mousemove", myFunction);
