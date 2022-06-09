//todo ====== arrow function =========
const tampilName = (nama) => {
  return `Halo, ${nama}`;
};
console.log("ari sabar");

//todo ======= implisit return =============
const tampilNama = (nama) => `Halo, ${nama}`;
console.log("sabar subakti");

//todo ========= memetakan function ke dalam array (map) =====

let mahasiswa = ["sabar subakti", "ari sabar", "wayan ari"];

//* memetakan array kedalam function
let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});

console.log(jumlahHuruf);

//* map array with arrow function
let jumlah = mahasiswa.map((nama) => nama.length);
console.log(jumlah);

//* map array with object
let objectJumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jml: nama.length,
}));
console.table(objectJumlahHuruf);

//todo ========== arrow function in costructor function =======

const Mahasiswa = function () {
  this.nama = "sabar";
  this.umur = 22;
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };
  return this.sayHello();
};

const sabar = new Mahasiswa();

//todo ========== use object literal ===============

// const mhs1 = {
//   nama: "sabar",
//   umur: 22,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   },
// };

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size",
    dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
