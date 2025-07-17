Metode Statis JavaScript
Metode kelas statis didefinisikan pada kelas itu sendiri.

Anda tidak dapat memanggil staticmetode pada suatu objek, hanya pada kelas objek.

Contoh
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

Jika Anda ingin menggunakan objek myCar di dalam staticmetode, Anda dapat mengirimkannya sebagai parameter:

Contoh
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);