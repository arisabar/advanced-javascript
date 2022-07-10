//* Synchronous callback
// function halo(nama) {
//   alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("masukan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => {
//   alert(`Halo, ${nama}`);
// });

// const mhs = [
//   {
//     nama: "sabar subakti",
//     nim: "17101433",
//     email: "arisabar_subakti@yahoo.co.id",
//     jurusan: "Teknik Informatika",
//   },
//   {
//     nama: "wayan",
//     nim: "17101433",
//     email: "arisabar_subakti@yahoo.co.id",
//     jurusan: "Teknik Informatika",
//   },
//   {
//     nama: "made",
//     nim: "17101433",
//     email: "arisabar_subakti@yahoo.co.id",
//     jurusan: "Teknik Informatika",
//   },
//   {
//     nama: "nyoman",
//     nim: "17101433",
//     email: "arisabar_subakti@yahoo.co.id",
//     jurusan: "Teknik Informatika",
//   },
// ];

// console.log("mulai");
// mhs.forEach((mahasiswa) => {
//   for (let i = 1; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(mahasiswa.nama);
// });
// console.log("script selanjutnya");

//* Asynchronous callback
//* biasanya digunakan untuk memanggil data dari api
//todo javascript vanilla

function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  // ketika statenya sudah siap jalankan fungsi dibawah
  xhr.onreadystatechange = function () {
    //ketika melakukan request secara asynchronous
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
getDataMahasiswa(
  "data/mahasiswa.json",
  (results) => {
    // console.log(results);
    const tampil = JSON.parse(results);

    tampil.forEach((element) => {
      console.log(element.nama);
    });
  },
  () => {}
);
console.log("selesai");
