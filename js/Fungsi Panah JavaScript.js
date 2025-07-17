Fungsi Panah JavaScript
Fungsi panah diperkenalkan di ES6.

Fungsi panah memungkinkan kita menulis sintaksis fungsi yang lebih pendek:

let myFunction = (a, b) => a * b;

Sebelum Arrow:
hello = function() {
  return "Hello World!";
}

Dengan Fungsi Panah:
hello = () => {
  return "Hello World!";
}

Ini akan semakin pendek! Jika fungsi hanya memiliki satu pernyataan, dan pernyataan tersebut mengembalikan nilai, Anda dapat menghapus tanda kurung dan kata returnkunci:

Fungsi Panah Mengembalikan Nilai Secara Default:
hello = () => "Hello World!";

Catatan: Ini hanya berfungsi jika fungsi hanya memiliki satu pernyataan.

Jika Anda memiliki parameter, Anda meneruskannya di dalam tanda kurung:

Fungsi Panah Dengan Parameter:
hello = (val) => "Hello " + val;

Faktanya, jika Anda hanya memiliki satu parameter, Anda juga dapat melewati tanda kurung:

Fungsi Panah Tanpa Tanda Kurung:
hello = val => "Hello " + val;

IKLAN

Bagaimana dengan this?
Penanganannya thisjuga berbeda pada fungsi panah dibandingkan dengan fungsi biasa.

Singkatnya, dengan fungsi panah tidak ada pengikatan this.

Dalam fungsi biasa, thiskata kunci mewakili objek yang memanggil fungsi tersebut, yang bisa berupa jendela, dokumen, tombol, atau apa pun.

Dengan fungsi panah, thiskata kunci selalu mewakili objek yang mendefinisikan fungsi panah.

Mari kita lihat dua contoh untuk memahami perbedaannya.

Kedua contoh memanggil metode dua kali, pertama saat halaman dimuat, dan sekali lagi saat pengguna mengklik tombol.

Contoh pertama menggunakan fungsi biasa, dan contoh kedua menggunakan fungsi panah.

Hasilnya menunjukkan bahwa contoh pertama mengembalikan dua objek berbeda (jendela dan tombol), dan contoh kedua mengembalikan objek jendela dua kali, karena objek jendela adalah "pemilik" fungsi tersebut.

Contoh
Dengan fungsi reguler thismewakili objek yang memanggil fungsi tersebut:

// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

Contoh
Dengan fungsi panah thismewakili pemilik fungsi:

// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

Ingatlah perbedaan-perbedaan ini saat Anda bekerja dengan fungsi. Terkadang, perilaku fungsi biasa sudah sesuai dengan yang Anda inginkan, jika tidak, gunakan fungsi panah.

Dukungan Peramban
Tabel berikut mendefinisikan versi browser pertama dengan dukungan penuh untuk Fungsi Panah di JavaScript:

Chrome 45	Edge 12	Firefox 22	Safari 10	Opera 32
Sep, 2015	Jul, 2015	May, 2013	Sep, 2016	Sep, 2015
Latihan
?
Manakah dari berikut ini merupakan fungsi panah JavaScript yang benar?


greeting => 'Hello World!';
greeting = return => 'Hello World!';
greeting = () => 'Hello World!';