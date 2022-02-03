const {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  editBookHandler,
  deleteBookById,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookHandler,
  },
  {
    method: "DELETE",
    path: "/{id}",
    handler: deleteBookById,
  },
];

module.exports = routes;
