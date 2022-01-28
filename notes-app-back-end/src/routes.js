const { addNoteHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  // {
  //   method: "GET",
  //   path: "/notes",
  //   handler: () => `Hello Gays`,
  // },
];

module.exports = routes;
