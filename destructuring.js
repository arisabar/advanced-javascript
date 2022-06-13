//todo ==== Destructuring variable //assigment

//* destructuring array

const perkenalan = ["halo", "nama", "saya", "sabar"];

const [satu, dua, tiga, empat] = perkenalan;

console.log(satu);
console.log(empat);

//* swap item
let a = 1,
  b = 2;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

//* return value pada function

function coba() {
  return [10, 30];
}

const [sepuluh, tigapuluh] = coba();
console.log(tigapuluh);

//* rest parameter
const [rest1, ...restNext] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(rest1);
console.log(restNext);
console.log(restNext[7]);

//* destructuring object

// const obMhs = {
//   nama: "Nama saya",
//   alamat: "alamat saya",
// };

// const { nama, alamat } = obMhs;
// document.write(nama, alamat);

//* assigment tanpa deklarasi

({ nama, alamat } = { nama: "ari sabar ", alamat: "alamat" });

document.write(nama, alamat);

//* assign ke variabel baru
// const obMhs = {
//   nama: " Nama saya",
//   alamat: "alamat saya",
// };

// const { nama: namabaru, alamat: almt } = obMhs;
// document.write(namabaru);

//* memberikan default value

const obMhs = {
  nama: "Nama saya",
  alamat: "alamat saya",
  email: "email@emailsaya.com",
};

const { email = "saya@email.com" } = obMhs;
console.log(email);

//* mengambil field object setelah mengembalikan parameter untuk function

const objectNama = {
  namasaya: "saya bernama",
  alamatSaya: "alamat saya di",
  noTelpn: 087876765454,
};

function getObjectNama({ noTelpn }) {
  return noTelpn;
}

console.log(getObjectNama(objectNama));

//todo ======= Destructuring function ===========

//* function dengan return array
function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}

const [tambah, kali] = penjumlahanPerkalian(a, b);
// console.log(tambah)
// console.log(kali)

function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

const [jumlah, kurang, ngali, bagi = "tidak ada"] = kalkulasi(6, 2);

console.log(bagi);

//* function dengan return object

function objectKalkulasi(a, b) {
  return {
    obTambah: a + b,
    obKurang: a - b,
    obKali: a * b,
    obBagi: a / b,
  };
}

const { obKali, obTambah } = objectKalkulasi(10, 2);
console.log(obKali);

//* destructing function arguments

const saya = {
  name: "Wayan sabar",
  saya: "manusia",
  kegiatan: {
    pagi: "ngoding javascript",
    siang: "istirahat",
    malam: "ngoding full stack",
  },
};

function cetakSaya({ name, saya, kegiatan: { pagi, siang, malam } }) {
  return `Halo, ${name} dan saya ${saya}, pagi ini saya lagi ${pagi}`;
}

console.log(cetakSaya(saya));
