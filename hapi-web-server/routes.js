const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => `Homepage`,
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => `halaman tidak depat diakses dengan method`,
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => `About Page`,
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => `Halama gk bisa diakses bro...`,
  },
  {
    method: "GET",
    //path: "/users/{username}",
    //cara lain => unutuk username opsional atau boleh dikosongkan
    path: "/users/{username?}",
    handler: (req, h) => {
      //Response h cara 1
      const response = h.response("success");
      response.type("text/plain");
      response.header("X-Coba", "Some-value");
      //return response;
      //Cara 2 Chaining
      // return h
      //   .response("success")
      //   .type("type-plain")
      //   .header("X-Cusrom", "some-value");
      const { username = "BUKANSAYA" } = req.params;
      return `INI adalah user : ${username}`;
    },
  },
  {
    method: "GET",
    path: "/hello/{nama}",
    handler: (req, h) => {
      const { nama = "GK Punya nama" } = req.params;
      const { lang } = req.query;
      if (lang === "id") {
        return `Woy elu pada, ini request dengan query ${nama}  dan ${lang}`;
      }
      return `Hello ${nama}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, h) => `Halaman tidak dapat diakses..`,
  },
];

module.exports = routes;
