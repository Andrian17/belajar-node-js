const namaSaya = (nama) => {
  return `Nama Saya : ${nama}`;
};

namaSaya("Cimen");

//console.log(namaSaya("Cimen"));

// const server = new server({
//   host: process.env.NODE_ENV !== "Production" ? "localhost" : "dicoding.com",
// });

const moment = require("moment");
const waktu = moment().format("DD MMM YY");

console.log(waktu);
