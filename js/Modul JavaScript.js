Modul JavaScript
Modul
Modul JavaScript memungkinkan Anda memecah kode menjadi file terpisah.

Hal ini memudahkan pemeliharaan basis kode.

Modul diimpor dari file eksternal dengan importpernyataan.

Modul juga bergantung type="module"pada tag <script>.

Contoh
<script type="module">
import message from "./message.js";
</script>

Ekspor
Modul dengan fungsi atau variabel dapat disimpan dalam berkas eksternal apa pun.

Ada dua jenis ekspor: Ekspor Bernama dan Ekspor Default .

Ekspor Bernama
Mari kita buat file bernama person.js, dan isi dengan hal-hal yang ingin kita ekspor.

Anda dapat membuat ekspor bernama dengan dua cara: secara inline, satu per satu, atau sekaligus di bagian bawah.

Sejajar secara individual:
person.js

export const name = "Jesse";
export const age = 40;
Sekaligus di bagian bawah:
person.js

const name = "Jesse";
const age = 40;

export {name, age};
Ekspor Default
Mari kita buat file lain, bernama message.js, dan gunakan untuk mendemonstrasikan ekspor default.

Anda hanya dapat memiliki satu ekspor default dalam satu berkas.

Contoh
message.js

const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
IKLAN

Impor
Anda dapat mengimpor modul ke dalam berkas dengan dua cara, berdasarkan apakah modul tersebut diberi nama ekspor atau ekspor default.

Ekspor bernama dibuat menggunakan kurung kurawal. Ekspor default tidak.

Impor dari ekspor bernama
Impor ekspor bernama dari file person.js:

import { name, age } from "./person.js";

Impor dari ekspor default
Impor ekspor default dari file message.js:

import message from "./message.js";