API Web - Pendahuluan
API Web adalah impian pengembang.

Ini dapat memperluas fungsionalitas browser
Ini dapat sangat menyederhanakan fungsi yang kompleks
Ini dapat memberikan sintaksis yang mudah untuk kode yang kompleks
Apa itu Web API?
API adalah singkatan dari Application P rogramming Interface .

Web API adalah antarmuka pemrograman aplikasi untuk Web.

API Browser dapat memperluas fungsionalitas browser web.

API Server dapat memperluas fungsionalitas server web.

API Peramban
Semua browser memiliki seperangkat API Web bawaan untuk mendukung operasi yang kompleks, dan untuk membantu mengakses data.

Misalnya, API Geolokasi dapat mengembalikan koordinat lokasi browser.

Contoh
Dapatkan lintang dan bujur posisi pengguna:

const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
