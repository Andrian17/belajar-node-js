//console.log(`Hallo nama Saya Andrian`);

const hapi = require("@hapi/hapi");

const routes = require("./routes");

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: "localhost",
  });

  //cara 1 routing
  //   server.route({
  //     method: "GET",
  //     path: "/",
  //     handler: (req, h) => {
  //       return `Hello World`;
  //     },
  //   });
  //cara 2 routing
  //   server.route([
  //     {
  //       method: "GET",
  //       path: "/",
  //       handler: (req, h) => `Hello Bro`,
  //     },
  //     {
  //       method: "GET",
  //       path: "/about",
  //       handler: (req, h) => `Hello Bro ini about`,
  //     },
  //   ]);

  //cara 3 import module route dari file lainnya...
  server.route(routes);

  await server.start();
  console.log(`Server berjalan ${server.info.uri}`);
};

init();
