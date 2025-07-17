
Perulangan dapat mengeksekusi suatu blok kode selama suatu kondisi yang ditentukan bernilai benar.

Perulangan While
Perulangan tersebut whileakan terus berlanjut melalui blok kode selama kondisi yang ditentukan masih berlaku.

Sintaksis
while (condition) {
  // code block to be executed
}
Contoh
Dalam contoh berikut, kode dalam loop akan berjalan, berulang-ulang, selama variabel (i) kurang dari 10:

Contoh
while (i < 10) {
  text += "The number is " + i;
  i++;
}
Jika Anda lupa menambah variabel yang digunakan dalam kondisi tersebut, loop tidak akan pernah berakhir. Ini akan menyebabkan peramban Anda macet.

Perulangan Do While
Perulangan ini do whilemerupakan varian dari perulangan while. Perulangan ini akan mengeksekusi blok kode satu kali, sebelum memeriksa apakah kondisinya benar, lalu akan mengulangi perulangan tersebut selama kondisinya benar.

Sintaksis
do {
  // code block to be executed
}
while (condition);
Contoh
Contoh di bawah ini menggunakan do whileperulangan. Perulangan akan selalu dieksekusi setidaknya sekali, meskipun kondisinya salah, karena blok kode dieksekusi sebelum kondisinya diuji:

Contoh
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
Jangan lupa untuk menambah variabel yang digunakan dalam kondisi, jika tidak, loop tidak akan pernah berakhir!

IKLAN

Membandingkan For dan While
Jika Anda telah membaca bab sebelumnya, tentang perulangan for, Anda akan menemukan bahwa perulangan while hampir sama dengan perulangan for, dengan pernyataan 1 dan pernyataan 3 dihilangkan.

Perulangan dalam contoh ini menggunakan forperulangan untuk mengumpulkan nama mobil dari array mobil:

Contoh
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}
Perulangan dalam contoh ini menggunakan whileperulangan untuk mengumpulkan nama mobil dari array mobil:

Contoh
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}