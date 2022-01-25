//membaca file txt menggunakan js

const fs = require("fs");

const path = require("path");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal Membaca Berkas");
  }
  console.log(data);
};

fs.readFile(path.resolve(__dirname, "coba.txt"), "UTF-8", fileReadCallback);
