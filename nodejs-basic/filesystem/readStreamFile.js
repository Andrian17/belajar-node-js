const fs = require("fs");
const path = require("path");

//membaca file js
const bacaFileStream = fs.createReadStream(
  path.resolve(__dirname, "./artikel.txt"),
  {
    //memebaca file setiap sepuluh karakter
    highWaterMark: 10,
  }
);

bacaFileStream.on("readable", () => {
  try {
    process.stdout.write(`[${bacaFileStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

bacaFileStream.on("end", () => {
  console.log("Done");
});
