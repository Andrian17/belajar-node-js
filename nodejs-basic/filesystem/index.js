const fileSys = require("fs");
const path = require("path");

const bacaFile = (error, data) => {
  if (error) {
    console.log("tidak bisa membaca file");
  }
  console.log(data);
};

fileSys.readFile(path.resolve(__dirname, "notes.txt"), "utf-8", bacaFile);
