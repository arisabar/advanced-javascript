//todo spread operator
//todo memecah iterables menjadi single element

// const saya = ["sabar", "wayan", "ari"];
// const kamu = ["wintari", "made", "iwin"];
// const gabung = [...saya, "bersama", ...kamu];
// console.log(gabung);

//todo mengcopy array
// const saya = ["sabar", "wayan", "ari"];
// const saya1 = [...saya];
// saya1[0] = "wintari";
// console.log(saya1);

const liSaya = document.querySelectorAll("li");
const liAku = [...liSaya].map((m) => m.textContent);
console.log(liAku);

const judul = document.querySelector(".judul");

const huruf = [...judul.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
judul.innerHTML = huruf;

//todo ======= rest Parameter ===========

function myFun(a, b, ...args) {
  return `${a}${b}${args} `;
}

console.log(myFun(1, 2, 3, 4, 5, 6, 7, 8));

//* array destructing

const kelompok1 = ["sabar", "subakti", "wayan", "made", "ketut"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota); //["wayan,"made","ketut"]

//* object destructuring

const team = {
  pm: "sabar",
  frontEnd1: "ari",
  frontEnd2: "juli",
  backEnd: "nanda",
  ux: "hendra",
  devOps: "mere",
};

const { pm, ...myTeam } = team;
console.log(myTeam); //{"frontEnd1": "ari","frontEnd2": "juli","backEnd": "nanda","ux": "hendra", "devOps": "mere"}

//* filtering

function filtering(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filtering("number", 4, 5, "sabar", "subakti", false, true, 90)); //[4,5,90]
console.log(filtering("string", 4, 5, "sabar", "subakti", false, true, 90)); //["sabar","subakti"]
console.log(filtering("boolean", 4, 5, "sabar", "subakti", false, true, 90)); //[false, true]
