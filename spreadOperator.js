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
