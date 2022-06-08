//todo Cara membuat object javascript
//* ======= Object Literal ==========

// let mahasiswa = {
//   nama: "sabar subakti",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     // console.log(`selamat makan ${this.nama}, selamat makan`);
//   },
// };

//* ======= Function Declaration ==========

// function Mahasiswa(nama, energi) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.energi = energi;

//   mhs.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}, selamat makan`);
//   };

//   mhs.main = function (jam) {
//     this.energi -= jam;
//     console.log(`selamat makan ${this.energi}, selamat makan`);
//   };

//   return mhs;
// }

// let sabar = Mahasiswa("sabar subakti", 10);
// let subakti = Mahasiswa("subakti", 30);

//* ======= Constructor Function ==========

// function Mahasiswa(nama, energi) {
//   //   let mhs = {};
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}, selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`selamat makan ${this.energi}, selamat makan`);
//   };
// }

// let sabar = new Mahasiswa("sabar subakti", 10);
// let subakti = new Mahasiswa("subakti", 30);

//* ======= Object.create ==========

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}, selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`selamat makan ${this.energi}, selamat makan`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//   },
// };

// function mahasiswa(nama, energi) {
//   let mhs = Object.create(methodMahasiswa);
//   //   let mhs = {};
//   mhs.nama = nama;
//   mhs.energi = energi;

//   //? tanpa object create
//   //   mhs.makan = methodMahasiswa.makan;
//   //   mhs.main = methodMahasiswa.main;
//   //   mhs.tidur = methodMahasiswa.tidur;
//   return mhs;
// }

// let sbr = mahasiswa("sabar subakti", 10);
// // let subakti = Mahasiswa("subakti", 30);

//* ======= prototype inheritance ==========

// function Mahasiswa(nama, energi) {
//   //   let mhs = {};
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
// };

// let sabar = new Mahasiswa("sabar subakti", 10);
// let subakti = new Mahasiswa("subakti", 30);

//* ======= prototype inheritance class version ==========

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan = function (porsi) {
    this.energi += porsi;
  };

  main = function (jam) {
    this.energi -= jam;
  };

  tidur = function (jam) {
    this.energi += jam * 2;
  };
}

let sabar = new Mahasiswa("sabar subakti", 10);
let ari = new Mahasiswa("ari sabar", 100);
