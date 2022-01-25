//console.log("Coba node JS OKOKO");

const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader("X-Powered-By", "NodeJS");

  //routing request
  const { url, method } = request;
  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      //bisa menggunakan cara 1
      //response.write("<h2>Nama Saya Andrian</h2>");
      //response.end(`<h1>INI ADALAH HOMEPAGE</h1>`);
      //response JSON
      response.end(
        JSON.stringify({
          pesan: `Hai Gay ini adalah url ${url} dan method ${method}`,
        })
      );
    } else {
      response.statusCode = 404;
      //Cara 2
      //response.end(`Halaman tidak dapat diakses dengan ${method} request`);
      //respose dalam bentuk JSON
      response.end(
        JSON.stringify({
          pesan: "Halaman Tidak Ditemukan pada ",
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      //response.end(`Halo! Ini adalah halaman about`);
      response.end(
        JSON.stringify({
          pesan: `INI ADALAH URL ${url} METHOD ${method}`,
        })
      );
    } else if (method === "POST") {
      response.statusCode = 200;
      let body = [];
      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(
          JSON.stringify({
            pesan: `INI ADALAH URL ${url} METHOD ${method} dan Bodi nya ${name}`,
          })
        );
      });
    } else {
      response.statusCode = 404;
      response.end(
        JSON.stringify({
          pesan: `INI ADALAH URL ${url} METHOD ${method}`,
        })
      );
    }
  } else if (url === "/home") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          pesan: `INI ADALAH URL ${url} METHOD ${method} `,
        })
      );
    } else if (method === "POST") {
      response.statusCode = 200;
      let body = [];
      request.on("data", (chunk) => {
        body.push(chunk);
      });
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(
          JSON.stringify({
            pesan: `INI ADALAH URL ${url} METHOD ${method} dan Bodi nya ${name}`,
          })
        );
      });
    } else {
      response.statusCode = 404;
      response.end(
        JSON.stringify({
          pesan: `INI ADALAH URL ${url} METHOD ${method} `,
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        pesan: "Halaman Tidak Ditemukan pada " + url + "ini",
      })
    );
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const localhost = "localhost";

server.listen(port, localhost, () => {
  console.log(`Server berjalan http://${localhost}:${port}`);
});
