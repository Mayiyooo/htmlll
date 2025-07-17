Layar Jendela JavaScript
Objek window.screen berisi informasi tentang layar pengguna.

Layar Jendela
Objek window.screendapat ditulis tanpa awalan jendela.

Properti:

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth
Lebar Layar Jendela
Properti screen.widthmengembalikan lebar layar pengunjung dalam piksel.

Contoh
Menampilkan lebar layar dalam piksel:

document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;
Hasilnya akan menjadi:

Screen Width: 1366
Tinggi Layar Jendela
Properti screen.heightmengembalikan tinggi layar pengunjung dalam piksel.

Contoh
Menampilkan tinggi layar dalam piksel:

document.getElementById("demo").innerHTML =
"Screen Height: " + screen.height;
Hasilnya akan menjadi:

Screen Height: 768
IKLAN

Lebar Layar Jendela yang Tersedia
Properti screen.availWidthmengembalikan lebar layar pengunjung, dalam piksel, dikurangi fitur antarmuka seperti Bilah Tugas Windows.

Contoh
Menampilkan lebar layar yang tersedia dalam piksel:

document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;
Hasilnya akan menjadi:

Available Screen Width: 1366
Ketinggian Layar Jendela yang Tersedia
Properti screen.availHeightmengembalikan tinggi layar pengunjung, dalam piksel, dikurangi fitur antarmuka seperti Bilah Tugas Windows.

Contoh
Menampilkan tinggi layar yang tersedia dalam piksel:

document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;
Hasilnya akan menjadi:

Available Screen Height: 720
Kedalaman Warna Layar Jendela
Properti screen.colorDepthmengembalikan jumlah bit yang digunakan untuk menampilkan satu warna.

Semua komputer modern menggunakan perangkat keras 24 bit atau 32 bit untuk resolusi warna:

24 bit = 16.777.216 "Warna Asli" yang berbeda
32 bit = 4.294.967.296 "Warna Dalam" yang berbeda
Komputer lama menggunakan 16 bit: 65.536 resolusi "Warna Tinggi" yang berbeda.

Komputer yang sangat tua dan telepon seluler lama menggunakan 8 bit: 256 "warna VGA" yang berbeda.

Contoh
Menampilkan kedalaman warna layar dalam bit:

document.getElementById("demo").innerHTML =
"Screen Color Depth: " + screen.colorDepth;
Hasilnya akan menjadi:

Screen Color Depth: 24
Nilai #rrggbb (rgb) yang digunakan dalam HTML mewakili "Warna Sejati" (16.777.216 warna berbeda)

Kedalaman Piksel Layar Jendela
Properti screen.pixelDepthmengembalikan kedalaman piksel layar.

Contoh
Menampilkan kedalaman piksel layar dalam bit:

document.getElementById("demo").innerHTML =
"Screen Pixel Depth: " + screen.pixelDepth;
Hasilnya akan menjadi:

Screen Pixel Depth: 24