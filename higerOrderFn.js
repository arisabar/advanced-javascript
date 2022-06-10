//todo ====== filter, map & reduce ===========

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//* ========== mencari angka >= 3 ===========

//* menggunakan for
const newAngka3 = [];
for (let i = 0; i < angka.length; i++) {
  //   console.log(angka[i]);
  if (angka[i] >= 3) {
    newAngka3.push(angka[i]);
  }
}

console.log(newAngka3);

//* menggunakan filter

const newAngka = angka.filter(function (o) {
  return o >= 3;
});

console.log(newAngka);

//* ======= mengkalikan semua angka dengan 2 =======

//* menggunakan map

const newMapAngka = newAngka.map((a) => {
  return a * 2;
});

const newMapAngka2 = newAngka.map((abc) => {
  return abc + "angka";
});

console.log(newMapAngka);
console.log(newMapAngka2);

//* ======= jumlahkan seluruh elemen pada array =======

//* menggunakan reduce

const newReduceAngka = angka.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(newReduceAngka);

//* ======= method chaining ===========
//* cari angka > 5
//* kalikan 3
//* jumlahkan

const methodChaining = angka
  .filter((a) => {
    return a > 5;
  })
  .map((a) => {
    return a * 3;
  })
  .reduce((acc, cur) => {
    return acc + cur;
  });

console.log(methodChaining);

//* versi 2

const hasil = angka
  .filter((a) => a >= 3)
  .map((a) => a * 2)
  .reduce((acc, cur) => acc + cur);

console.log(hasil);

//todo study casus

//* ambil semua elemen video
const video = Array.from(document.querySelectorAll("[data-angka]"));

// console.log(video);
//* pilih hanya yang 'JAVASCRIPT LANJUTAN'
let isiVideo = video
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //* ambil durasi masing2 video
  .map((item) => item.dataset.angka)

  // const isiVideo = video
  //   .filter((video) => {
  //     return video.textContent.includes("JAVASCRIPT LANJUTAN");
  //   })
  //   .map((item) => {
  //     return item.dataset.angka;
  //   });
  //* ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    //?10:30 -> [10,30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //* jumlahkan semua detik

  .reduce((total, detik) => total + detik);

//* ubah formatnya jadi jam menit detik
const jam = Math.floor(isiVideo / 3600);
isiVideo = isiVideo - jam * 3600;
const menit = Math.floor(isiVideo / 60);
const detik = isiVideo - menit * 60;

// console.log(isiVideo);
//* simpan di DOM
const totalDurasi = document.querySelector(".total-durasi");
const jumlahVideo = document.querySelector(".jumlah-video");
totalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideo = video.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

jumlahVideo.textContent = `${jmlVideo} video`;
