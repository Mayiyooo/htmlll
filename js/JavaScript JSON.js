JavaScript JSON
JSON adalah format untuk menyimpan dan memindahkan data.

JSON sering digunakan saat data dikirim dari server ke halaman web.

Apa itu JSON?
JSON adalah singkatan dari Java Script Object Notation​
JSON adalah format pertukaran data yang ringan
JSON bersifat independen terhadap bahasa *
JSON bersifat "menggambarkan dirinya sendiri" dan mudah dipahami
* Sintaks JSON berasal dari sintaksis notasi objek JavaScript, tetapi format JSON hanya berupa teks. Kode untuk membaca dan menghasilkan data JSON dapat ditulis dalam bahasa pemrograman apa pun.

Contoh JSON
Sintaks JSON ini mendefinisikan objek karyawan: larik berisi 3 rekaman karyawan (objek):

Contoh JSON
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}
Format JSON Dievaluasi menjadi Objek JavaScript
Format JSON secara sintaksis identik dengan kode untuk membuat objek JavaScript.

Karena kesamaan ini, program JavaScript dapat dengan mudah mengubah data JSON menjadi objek JavaScript asli.

Aturan Sintaks JSON
Data ada dalam pasangan nama/nilai
Data dipisahkan dengan koma
Tanda kurung kurawal menahan objek
Tanda kurung siku menahan array
IKLAN

Data JSON - Nama dan Nilai
Data JSON ditulis sebagai pasangan nama/nilai, seperti properti objek JavaScript.

Pasangan nama/nilai terdiri dari nama bidang (dalam tanda kutip ganda), diikuti oleh titik dua, diikuti oleh nilai:

"firstName":"John"
Nama JSON memerlukan tanda kutip ganda. Nama JavaScript tidak.

Objek JSON
Objek JSON ditulis dalam kurung kurawal.

Sama seperti dalam JavaScript, objek dapat berisi beberapa pasangan nama/nilai:

{"firstName":"John", "lastName":"Doe"}
Array JSON
Array JSON ditulis dalam tanda kurung siku.

Sama seperti dalam JavaScript, sebuah array dapat berisi objek:

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
Dalam contoh di atas, objek "karyawan" adalah sebuah array. Array ini berisi tiga objek.

Setiap objek adalah catatan seseorang (dengan nama depan dan nama belakang).

Mengonversi Teks JSON ke Objek JavaScript
Penggunaan umum JSON adalah untuk membaca data dari server web, dan menampilkan data di halaman web.

Untuk menyederhanakannya, hal ini dapat ditunjukkan menggunakan string sebagai input.

Pertama, buat string JavaScript yang berisi sintaks JSON:

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
Kemudian, gunakan fungsi bawaan JavaScript JSON.parse()untuk mengubah string menjadi objek JavaScript:

const obj = JSON.parse(text);
Terakhir, gunakan objek JavaScript baru di halaman Anda:

Contoh
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>
