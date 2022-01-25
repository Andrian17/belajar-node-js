// const server = new Server({
//   host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
// });

// const server = new Server({
//   host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
// });

const cpuInformation = process.memoryUsage();
console.log(cpuInformation);

let firstName = process.argv[2]; //"Andrian";
let lastName = process.argv[3]; //"Cimen";

console.log(`hello ${firstName}, ${lastName}`);
