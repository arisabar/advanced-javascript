//todo ===== template literal / template string ========

// const nama = "sabar";
// const alamat = "marga";

// console.log(`Halo, nama saya ${nama} asal ${alamat}`);

// console.log(`${alert("Halo")}`);

const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

//* ======= HTML Fragments =============

const mhs = {
  nama: "sabar",
  alamat: "marga",
  pekerjaan: "web developer",
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="jobs">${mhs.pekerjaan}</span>
</div>`;

// console.log(el);
// document.write(el);
// document.body.innerHTML = el;

//* ======= Exercise ===========
//* menggunakan teknik looping

const mhs2 = [
  {
    nama: "I Wayan Ari Sabar Subakti",
    email: "arisabar_subakti@yahoo.co.id",
  },
  {
    nama: "Ni Made Dela Puspitayani",
    email: "made.dela@gmail.com",
  },
  {
    nama: "Anya Foreger",
    email: "anyakawai99@gmail.com",
  },
];

const tampilMhs2 = `<div class="mhs">
${mhs2
  .map(
    (m) => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
</ul>`
  )
  .join(" ")}
</div>`;

const templateliteral = document.querySelector(".templateLiteral");

//* ======== Conditional =======
//* ternary

const lagu = {
  judul: "nyapa kadi aku",
  band: "Tak berotak",
};

const tampilLagu = `<div class="lagu">
<ul>
    <li>${lagu.band}</li>
    <li>${lagu.judul} ${lagu.tahun ? `(tahun ${lagu.tahun})` : " "}</li>
</ul>
</div>`;

let child = document.createElement("div");
child.innerHTML = tampilMhs2;
let child2 = document.createElement("div");
child2.innerHTML = tampilLagu;
// let child2 = (document.createElement("div").innerHTML = tampilLagu);
templateliteral.appendChild(child);
templateliteral.appendChild(child2);

//* ====== HTML Fragments Bersarang
//* Nested

const sabar = {
  namaLengkap: "I Wayan Ari Sabar Subakti",
  umur: 23,
  hobby: ["Musik", "Ngoding", "Jalan - jalan"],
};

//? cara satu
// const tampilSabar = `<div class="sabar">
//     <h2>${sabar.namaLengkap}</h2>
//     <span class="umur"> Umur : ${sabar.umur}</span>
//     <h4>Hobby: </h4>
//     ${sabar.hobby.map((jabarkanhoby) => `<li>${jabarkanhoby}</li>`).join("")}
// </div>`;

//? cara dua
function cetakHoby(jabarkanhoby) {
  return `
    <ol>
        ${jabarkanhoby.map((hoby) => `<li>${hoby}</li>`).join("")}
    </ol>
    `;
}

const tampilSabar = `<div class="sabar">
    <h2>${sabar.namaLengkap}</h2>
    <span class="umur"> Umur : ${sabar.umur}</span>
    <h4>Hobby: </h4>
    ${cetakHoby(sabar.hobby)}
</div>`;

let child3 = document.createElement("div");
child3.innerHTML = tampilSabar;
templateliteral.appendChild(child3);

//* ====== tagged template

const a = "sabar subakti",
  b = "web developer";

function coba(string, ...value) {
  //   let result = "";
  //   string.forEach((str, i) => {
  //     result += `${str}${value[i] || ""}`;
  //   });
  //   return result;

  return string.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${value[i] || ""}</span>`,
    ""
  );
}
const str = coba`Halo saya ${a}, saya seorang ${b} terima kasih`;
document.write(str);

//* implementasi lain untuk tagged template
/*
escaping html tags / sanitize
translation & internationalization
styled components
*/
