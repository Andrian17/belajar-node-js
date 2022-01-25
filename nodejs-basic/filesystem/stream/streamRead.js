const fs = require("fs");
const path = require("path");

//read file
const ReadFs = fs.createReadStream(path.resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});

//write file
const writeFs = fs.createWriteStream(path.resolve(__dirname, "output.txt"));

ReadFs.on("readable", () => {
  try {
    let msg = `${ReadFs.read()} \n`;

    writeFs.write(`${msg}`);
    process.stdout.write(`${msg}`);
  } catch (e) {
    //console.log(e);
  }
});
// ReadFs.on("readable", () => {
//   try {
//     writeFs.write(`${ReadFs.read()} \n`);
//   } catch (e) {
//     console.log(e);
//   }
// });

//writeFs.write(`${ReadFs.read()} \n`);

ReadFs.on("end", () => {
  console.log("\n Proses Selesai");
});
