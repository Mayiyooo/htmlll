API Geolokasi Web
Temukan Posisi Pengguna
API Geolokasi HTML digunakan untuk mendapatkan posisi geografis pengguna.

Karena hal ini dapat membahayakan privasi, posisi tersebut tidak tersedia kecuali pengguna menyetujuinya.


Catatan
Geolokasi paling akurat untuk perangkat dengan GPS, seperti telepon pintar.

Dukungan Peramban
API Geolokasi didukung di semua browser:

Yes	Yes	Yes	Yes	Yes
Catatan
API Geolokasi hanya akan berfungsi pada konteks aman seperti HTTPS.

Jika situs Anda dihosting di sumber yang tidak aman (seperti HTTP), permintaan untuk mendapatkan lokasi pengguna tidak akan berfungsi lagi.

Menggunakan API Geolokasi
Metode ini getCurrentPosition()digunakan untuk mengembalikan posisi pengguna.

Contoh berikut mengembalikan lintang dan bujur posisi pengguna:

Contoh
<script>
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>
Contoh dijelaskan:

Periksa apakah Geolokasi didukung
Jika didukung, jalankan metode getCurrentPosition(). Jika tidak, tampilkan pesan kepada pengguna.
Jika metode getCurrentPosition() berhasil, ia mengembalikan objek koordinat ke fungsi yang ditentukan dalam parameter (showPosition)
Fungsi showPosition() menghasilkan Lintang dan Bujur
Contoh di atas adalah skrip Geolokasi yang sangat mendasar, tanpa penanganan kesalahan.


Penanganan Kesalahan dan Penolakan
Parameter kedua dari getCurrentPosition()metode ini digunakan untuk menangani kesalahan. Parameter ini menentukan fungsi yang akan dijalankan jika gagal mendapatkan lokasi pengguna:

Contoh
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
Menampilkan Hasil dalam Peta
Untuk menampilkan hasilnya di peta, Anda memerlukan akses ke layanan peta, seperti Google Maps.

Dalam contoh di bawah, lintang dan bujur yang dikembalikan digunakan untuk menunjukkan lokasi di Google Map (menggunakan gambar statis):

Contoh
function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
Informasi Spesifik Lokasi
Halaman ini telah menunjukkan cara menampilkan posisi pengguna pada peta.

Geolokasi juga sangat berguna untuk informasi spesifik lokasi, seperti:

Informasi lokal terkini
Menampilkan Tempat Menarik di Dekat Pengguna
Navigasi belokan demi belokan (GPS)
Metode getCurrentPosition() - Mengembalikan Data
Metode ini getCurrentPosition()mengembalikan objek jika berhasil. Properti lintang, bujur, dan akurasi selalu dikembalikan. Properti lainnya dikembalikan jika tersedia:

Property	Returns
coords.latitude	The latitude as a decimal number (always returned)
coords.longitude	The longitude as a decimal number (always returned)
coords.accuracy	The accuracy of position (always returned)
coords.altitude	The altitude in meters above the mean sea level (returned if available)
coords.altitudeAccuracy	The altitude accuracy of position (returned if available)
coords.heading	The heading as degrees clockwise from North (returned if available)
coords.speed	The speed in meters per second (returned if available)
timestamp	The date/time of the response (returned if available)
Objek Geolokasi - Metode menarik lainnya
Objek Geolokasi juga memiliki metode menarik lainnya:

watchPosition()- Mengembalikan posisi pengguna saat ini dan terus mengembalikan posisi yang diperbarui saat pengguna bergerak (seperti GPS di mobil).
clearWatch()- Menghentikan watchPosition()metode tersebut.
Contoh di bawah ini menunjukkan watchPosition()metodenya. Anda memerlukan perangkat GPS yang akurat untuk mengujinya (seperti ponsel pintar):

Contoh
<script>
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>