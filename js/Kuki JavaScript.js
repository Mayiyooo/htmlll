Kuki JavaScript
Cookie memungkinkan Anda menyimpan informasi pengguna di halaman web.

Apa itu Cookie?
Cookie adalah data yang disimpan dalam file teks kecil di komputer Anda.

Ketika server web telah mengirim halaman web ke browser, koneksi dimatikan, dan server melupakan semua hal tentang pengguna.

Cookie diciptakan untuk memecahkan masalah "bagaimana mengingat informasi tentang pengguna":

Saat pengguna mengunjungi halaman web, namanya dapat disimpan dalam cookie.
Saat pengguna berikutnya mengunjungi halaman tersebut, cookie akan "mengingat" namanya.
Cookie disimpan dalam pasangan nama-nilai seperti:

username = John Doe
Ketika peramban meminta halaman web dari server, kuki milik halaman tersebut akan ditambahkan ke permintaan tersebut. Dengan demikian, server mendapatkan data yang diperlukan untuk "mengingat" informasi tentang pengguna.

Tidak satu pun contoh di bawah ini akan berfungsi jika browser Anda menonaktifkan dukungan cookie lokal.

Buat Cookie dengan JavaScript
JavaScript dapat membuat, membaca, dan menghapus cookie dengan document.cookie properti.

Dengan JavaScript, cookie dapat dibuat seperti ini:

document.cookie = "username=John Doe";
Anda juga dapat menambahkan tanggal kedaluwarsa (dalam waktu UTC). Secara default, kuki akan dihapus saat peramban ditutup:

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
Dengan parameter jalur, Anda dapat memberi tahu peramban jalur tempat kuki tersebut berada. Secara default, kuki tersebut berada di halaman saat ini.

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

Membaca Cookie dengan JavaScript
Dengan JavaScript, cookie dapat dibaca seperti ini:

let x = document.cookie;
document.cookieakan mengembalikan semua cookie dalam satu string seperti: cookie1=nilai; cookie2=nilai; cookie3=nilai;

Mengubah Cookie dengan JavaScript
Dengan JavaScript, Anda dapat mengubah cookie dengan cara yang sama seperti Anda membuatnya:

document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
Cookie lama ditimpa.

Hapus Cookie dengan JavaScript
Menghapus cookie sangatlah mudah.

Anda tidak perlu menentukan nilai cookie saat menghapus cookie.

Tetapkan saja parameter kedaluwarsa ke tanggal lampau:

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
Anda harus menentukan jalur cookie untuk memastikan bahwa Anda menghapus cookie yang tepat.

Beberapa browser tidak akan mengizinkan Anda menghapus cookie jika Anda tidak menentukan jalurnya.

Tali Kue
Properti ini document.cookietampak seperti string teks biasa. Padahal sebenarnya tidak.

Bahkan jika Anda menulis seluruh string cookie ke document.cookie, saat Anda membacanya lagi, Anda hanya dapat melihat pasangan nama-nilainya.

Jika Anda menetapkan kuki baru, kuki lama tidak akan tertimpa. Kuki baru akan ditambahkan ke document.cookie, jadi jika Anda membaca document.cookie lagi, Anda akan mendapatkan hasil seperti ini:

cookie1 = nilai; cookie2 = nilai;

Tampilkan Semua Cookie  Buat Cookie 1  Buat Cookie 2 Hapus Cookie 1  Hapus Cookie 2

Jika Anda ingin menemukan nilai dari satu cookie yang ditentukan, Anda harus menulis fungsi JavaScript yang mencari nilai cookie dalam string cookie.

Contoh Cookie JavaScript
Dalam contoh berikut, kita akan membuat cookie yang menyimpan nama pengunjung.

Saat pertama kali pengunjung mengunjungi halaman web, ia akan diminta untuk mengisi namanya. Nama tersebut kemudian disimpan dalam cookie.

Saat pengunjung berikutnya tiba di halaman yang sama, ia akan mendapat pesan selamat datang.

Untuk contoh ini kita akan membuat 3 fungsi JavaScript:

Fungsi untuk mengatur nilai cookie
Fungsi untuk mendapatkan nilai cookie
Fungsi untuk memeriksa nilai cookie
Fungsi untuk Mengatur Cookie
Pertama, kita membuat functionyang menyimpan nama pengunjung dalam variabel cookie:

Contoh
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
Contoh dijelaskan:

Parameter fungsi di atas adalah nama cookie (cname), nilai cookie (cvalue), dan jumlah hari hingga cookie harus kedaluwarsa (exdays).

Fungsi ini menetapkan cookie dengan menambahkan nama cookie, nilai cookie, dan string kedaluwarsa.

Fungsi untuk Mendapatkan Cookie
Kemudian, kami membuat functionyang mengembalikan nilai cookie tertentu:

Contoh
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
Fungsi dijelaskan:

Ambil nama cookie sebagai parameter (cname).

Buat variabel (nama) dengan teks yang akan dicari (cname + "=").

Dekode string cookie, untuk menangani cookie dengan karakter khusus, misalnya '$'

Pisahkan document.cookie pada titik koma menjadi sebuah array bernama ca (ca = decodedCookie.split(';')).

Lakukan loop melalui array ca (i = 0; i < ca.length; i++), dan baca setiap nilai c = ca[i]).

Jika cookie ditemukan (c.indexOf(name) == 0), kembalikan nilai cookie (c.substring(name.length, c.length).

Jika cookie tidak ditemukan, kembalikan "".

Fungsi untuk Memeriksa Cookie
Terakhir, kita membuat fungsi yang memeriksa apakah cookie telah ditetapkan.

Jika cookie disetel, maka akan menampilkan ucapan selamat.

Jika cookie tidak disetel, maka akan ditampilkan kotak prompt, menanyakan nama pengguna, dan menyimpan cookie nama pengguna selama 365 hari, dengan memanggil setCookiefungsi:

Contoh
function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
Semua Bersama Sekarang
Contoh
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}