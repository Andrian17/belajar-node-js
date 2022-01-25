const { Console } = require("console");
const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffe = ({ name }) => {
  console.log(`Kopi ${name}, telah dibuat `);
};

//set event
myEventEmitter.on("coffee-order", makeCoffe);

//get event
myEventEmitter.emit("coffee-order", { name: "Kapal Api" });

const namaSiswa = ({ name }) => {
  console.log(`nama Saya ${name}, haiiii`);
};

const alamatSiswa = ({ alamat }) => {
  console.log(`alama saya ${alamat}, okkkk...`);
};

const dataMahasiswa = ({ name, alamat }) => {
  namaSiswa(name);
  alamatSiswa(alamat);
};

myEventEmitter.on("data-siswa", dataMahasiswa);
myEventEmitter.emit("data-siswa", { name: "Andrian", alamat: "Bima NTB" });
