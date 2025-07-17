Pewarisan Kelas JavaScript
Pewarisan Kelas
Untuk membuat pewarisan kelas, gunakan extends kata kunci.

Kelas yang dibuat dengan pewarisan kelas mewarisi semua metode dari kelas lain:

Contoh
Buat kelas bernama "Model" yang akan mewarisi metode dari kelas "Mobil":

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();

Metode super()mengacu pada kelas induk.

Dengan memanggil super()metode dalam metode konstruktor, kita memanggil metode konstruktor induk dan mendapatkan akses ke properti dan metode induk.

Pewarisan berguna untuk penggunaan ulang kode: menggunakan kembali properti dan metode kelas yang ada saat Anda membuat kelas baru.

ADVERTISEMENT

Getter dan Setter
Kelas juga memungkinkan Anda menggunakan getter dan setter.

Akan lebih bijak jika menggunakan getter dan setter untuk properti Anda, terutama jika Anda ingin melakukan sesuatu yang khusus dengan nilai tersebut sebelum mengembalikannya, atau sebelum Anda mengaturnya.

Untuk menambahkan getter dan setter dalam kelas, gunakan kata kunci getdan set.

Contoh
Buat getter dan setter untuk properti "carname":

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cnam;

Catatan: meskipun getter adalah suatu metode, Anda tidak menggunakan tanda kurung saat ingin mendapatkan nilai properti.

Nama metode getter/setter tidak boleh sama dengan nama properti, dalam kasus ini carname.


Banyak programmer menggunakan karakter garis bawah _ sebelum nama properti untuk memisahkan getter/setter dari properti sebenarnya:

Contoh
Anda dapat menggunakan karakter garis bawah untuk memisahkan getter/setter dari properti sebenarnya:

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;

Untuk menggunakan setter , gunakan sintaksis yang sama seperti saat Anda menetapkan nilai properti, tanpa tanda kurung:

Contoh
Gunakan setter untuk mengubah nama mobil menjadi "Volvo":

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;

Pengangkatan
Tidak seperti fungsi dan deklarasi JavaScript lainnya, deklarasi kelas tidak diangkat.

Itu berarti Anda harus mendeklarasikan kelas sebelum Anda dapat menggunakannya:

Contoh
//You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
const myCar = new Car("Ford")