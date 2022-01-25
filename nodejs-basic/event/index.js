const { EventEmitter } = require("events");
const myEventEmitter = new EventEmitter();

const ulangTahun = ({ name }) => {
  console.log(`Selamat ualng tahun ${name}`);
};

myEventEmitter.on("ulang-tahun", ulangTahun);

myEventEmitter.emit("ulang-tahun", { name: "Andrian" });
