const nama = ["wayan", "ari", "sabar", "subakti"];

//todo ============ for of ==========
//* cara munculkan array dengan for biasa
// for (let index = 0; index < nama.length; index++) {
//   const element = nama[index];
//   console.log(element);
// }

//* munculkan array dengan foreach
// nama.forEach((m) => console.log(m));

//* munculkan array dengan for of

// for (const m of nama) {
//   console.log(m);
// }

//* cara meluping string

const nama2 = "Subakti";

// for (const m of nama2) {
//   console.log(m);
// }

//* mengambil index dari array menggunakan foreach
// nama.forEach((m, i) => {
//   console.log(`${m} berada di index ke-${i}`);
// });

//* mengambil index dari array menggunakan for of

// for (const [i, m] of nama.entries()) {
//   console.log(`${m} berada di index ke-${i}`);
// }

//* Nodejs

const liNama = document.querySelectorAll(".nama");
console.log(liNama); //todo li-nya berbentuk nodelist bukan array

// liNama.forEach((m) => console.log(m.innerHTML));

for (const n of liNama) {
  //   console.log(n.innerHTML);
}

//* menggunakan for of untuk nge reduce Arguments

function jumlahAngka() {
  //   console.log(arguments); //ini bukan array
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5, 6));

//todo ======== for in ===========

const mhs = {
  nama: "sabar subakti",
  alamat: "br kelaci",
  pekerjaan: "web developer",
};

for (const key in mhs) {
  console.log(mhs[key]);
}
