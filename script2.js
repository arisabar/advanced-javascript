//todo Execution context, hoisting & scope

// console.log(nama);
// var nama = "sabar";
// console.log(nama);

//? ====== creation phase pada Global Context ========
//? nama var = undefined
//? nama function = fn()
//? hoisting
//? window = global object
//? this = window

//? ======= Execution phase ========

// var nama = "sabar subakti";
// var umur = 17;

// console.log(sayHello());

// function sayHello() {
//   //   console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

//? function membuat local Execution Context
//? yang di dalamnya terdapat creation dan execution phase
//? window
//? arguments
//? hoisting local

//* =========== contoh 1 ========

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

//* =========== contoh 2 ========

// function satu() {
//   var nama = "sabar";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "subakti";
// satu();
// dua("wayan");
// console.log(nama);

//todo === closure ==========

// function init() {
//   //   let nama = "sabar";
//   //   function tampilNama(nama) {
//   //     console.log(nama);
//   //   }
//   //   return tampilNama;

//   return function (nama) {
//     console.log(nama);
//   };
// }
// init();

// let panggilNama = init();
// panggilNama("ari");
// panggilNama("ari");

//? ========= Function Factories ========

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu} semoga harimu Menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// console.dir(selamatSiang);
// selamatPagi("Sabar");
// selamatMalam("Ari");

//? ========= Private Method ========

// function a() {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// }
// let add = a();
//* function ekspresion
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

//* ini tidak mengganggu closure
counter = 100;

console.log(add());
console.log(add());
console.log(add());

//? ========= Closures in a loop ========

for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s): " + index);
  }, index * 1000);
}

//* === using the IIFE solution ======

for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log("using IIFE " + index + " second(s): " + index);
    }, index * 1000);
  })(index);
}

//* === using let keyword in ES6 ======
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("using let " + index + " second(s): " + index);
  }, index * 1000);
}
