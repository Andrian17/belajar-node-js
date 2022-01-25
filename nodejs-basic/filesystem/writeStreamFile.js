const fs = require("fs");

const path = require("path");

const writeFs = fs.createWriteStream(path.resolve(__dirname, "output.txt"));

writeFs.write("hai semua lo seua cakep \n");
writeFs.write("hai semua lo seua jelek \n");
writeFs.end("OK selesai");

const bacaOutput = fs.createReadStream(path.resolve(__dirname, "output.txt"), {
  highWaterMark: 18,
});

bacaOutput.on("readable", () => {
  try {
    process.stdout.write(`${bacaOutput.read()}`);
  } catch (e) {
    console.log(e);
  }
});

bacaOutput.on("end", () => {
  console.log("\n file telah dibaca");
});
