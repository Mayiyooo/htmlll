Jenis JavaScript
Jenis Operator
Operator typeof mengembalikan tipe data variabel JavaScript.

Tipe Data Primitif
Dalam JavaScript, nilai primitif adalah nilai tunggal tanpa properti atau metode.

JavaScript memiliki 7 tipe data primitif:

rangkaian
nomor
Boolean
bigint
simbol
batal
belum diartikan
Operator typeofmengembalikan tipe variabel atau ekspresi.

Contoh
typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined
typeof null           // Returns object
Catatan:
Dalam JavaScript, nullini adalah nilai primitif. Namun, typeofmengembalikan "objek".

Ini adalah bug yang terkenal dalam JavaScript dan memiliki alasan historis.

Tipe Data Kompleks
Tipe data kompleks dapat menyimpan beberapa nilai dan/atau tipe data berbeda bersama-sama.

JavaScript memiliki satu tipe data yang kompleks:

obyek
Semua tipe kompleks lainnya seperti array, fungsi, himpunan, dan peta hanyalah tipe objek yang berbeda.

Operator typeofhanya mengembalikan dua tipe:

obyek
fungsi
Contoh
typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object

typeof function (){}   // Returns function
Catatan:
Operator typeofmengembalikan objek untuk semua jenis objek:

benda-benda
susunan
set
peta
Anda tidak dapat menggunakannya typeofuntuk menentukan apakah suatu objek JavaScript merupakan array atau tanggal.

Cara Mengenali Array
Bagaimana cara mengetahui apakah suatu variabel adalah array?

ECMAScript 5 (2009) mendefinisikan metode baru untuk ini Array.isArray():

Contoh
// Create an Array
const fruits = ["apples", "bananas", "oranges"];
Array.isArray(fruits);
Operator instanceof
Operator instanceofmengembalikan true jika suatu objek merupakan contoh dari tipe objek tertentu:

Contoh
// Create a Date
const time = new Date();

(time instanceof Date);
// Create an Array
const fruits = ["apples", "bananas", "oranges"];

(fruits instanceof Array);
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

(fruits instanceof Map);
// Create a Set
const fruits = new Set(["apples", "bananas", "oranges"]);

(fruits instanceof Set);
Variabel Tidak Terdefinisi
Nilai typeofdari variabel yang tidak terdefinisi adalah undefined.

Contoh
typeof car;
Nilai typeofdari variabel tanpa nilai adalah undefined. Nilainya juga undefined.

Contoh
let car;
typeof car;
Variabel apa pun dapat dikosongkan, dengan menetapkan nilainya ke undefined.

Tipenya juga akan menjadi undefined.

Contoh
let car = "Volvo";
car = undefined;
Nilai Kosong
Nilai kosong tidak ada hubungannya dengan undefined.

Suatu string kosong memiliki nilai legal dan tipe.

Contoh
let car = "";
typeof car;
Batal
Dalam JavaScript null, "nothing" adalah "tidak ada". Seharusnya itu adalah sesuatu yang tidak ada.

Sayangnya, dalam JavaScript, tipe data nulladalah objek.

Anda dapat mengosongkan objek dengan mengaturnya ke null:

Contoh
// Create an Object
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

person = null;
// Now value is null, but type is still an object
Anda juga dapat mengosongkan objek dengan mengaturnya ke undefined:

Contoh
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

person = undefined;
// Now both value and type is undefined
Perbedaan Antara Tidak Terdefinisi dan Null
undefineddan nullsama nilainya tetapi berbeda jenisnya:

typeof undefined      // undefined
typeof null           // object

null === undefined    // false
null == undefined     // true
Konstruktor Properti
Properti constructormengembalikan fungsi konstruktor untuk semua variabel JavaScript.

Contoh
// Returns function Object() {[native code]}:
{name:'John',age:34}.constructor

// Returns function Array() {[native code]}:
[1,2,3,4].constructor

// Returns function Date() {[native code]}:
new Date().constructor

// Returns function Set() {[native code]}:
new Set().constructor

// Returns function Map() {[native code]}:
new Map().constructor

// Returns function Function() {[native code]}:
function () {}.constructor

Dengan konstruktor, Anda dapat memeriksa apakah suatu objek adalah Array :

Contoh
(myArray.constructor === Array);

Dengan konstruktor, Anda dapat memeriksa apakah suatu objek adalah Date :

Contoh
(myDate.constructor === Date);

Bersama
typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
typeof x               // Returns "undefined"
typeof null            // Returns "object"