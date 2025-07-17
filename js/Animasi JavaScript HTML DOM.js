Animasi JavaScript HTML DOM
Pelajari cara membuat animasi HTML menggunakan JavaScript.

Halaman Web Dasar
Untuk mendemonstrasikan cara membuat animasi HTML dengan JavaScript, kami akan menggunakan halaman web sederhana:

Contoh
<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript Animation</h1>

<div id="animation">My animation will go here</div>

</body>
</html>
Membuat Wadah Animasi
Semua animasi harus relatif terhadap elemen wadah.

Contoh
<div id ="container">
  <div id ="animate">My animation will go here</div>
</div>
Gaya Elemen
Elemen kontainer harus dibuat dengan gaya = " position: relative".

Elemen animasi harus dibuat dengan gaya = " position: absolute".

Contoh
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background: red;
}
ADVERTISEMENT

Kode Animasi
Animasi JavaScript dilakukan dengan memprogram perubahan bertahap dalam gaya suatu elemen.

Perubahan ini dipicu oleh pengatur waktu. Ketika interval pengatur waktu pendek, animasi akan terlihat berkelanjutan.

Kode dasarnya adalah:

Contoh
id = setInterval(frame, 5);

function frame() {
  if (/* test for finished */) {
    clearInterval(id);
  } else {
    /* code to change the element style */ 
  }
}
Membuat Animasi Penuh Menggunakan JavaScript
Contoh
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}