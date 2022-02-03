const book = require("./bookshelf");

const { nanoid } = require("nanoid");

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  let finished = false;

  if (pageCount === readPage) {
    finished = true;
  }

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  if (!name || name == "") {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.code(400);
    return response;
  } else {
    book.push(newBook);
    const isSuccess = book.filter((book) => book.id === id).length > 0;
    if (isSuccess) {
      const response = h.response({
        status: "success",
        message: "Buku berhasil ditambahkan",
        data: {
          bookId: id,
        },
      });
      response.code(201);
      return response;
    }
  }

  const response = h.response({
    status: "error",
    message: "Buku Gagal ditambahkan",
  });

  response.code(500);
  return response;
};

const getAllBooksHandler = (req, h) => {
  let books = [];
  books = book.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  return h.response({
    status: "success",
    data: {
      books,
    },
  });
};
const getBookByIdHandler = (req, h) => {
  const { id } = req.params;
  const book1 = book.filter((n) => n.id === id)[0];

  if (book1 !== undefined) {
    return {
      status: "success",
      data: {
        book1,
      },
    };
  }

  const response = h.response({
    status: "fail",
    message: "Catatan tidak ditemukan",
  });

  response.code(404);
  return response;
};

const editBookHandler = (req, h) => {
  const { id } = req.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.payload;
  const updatedAt = new Date().toISOString();
  const index = book.findIndex((b) => b.id === id);

  let finished = false;

  if (pageCount === readPage) {
    finished = true;
  }

  if (!name || name == "") {
    const response = h.response({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.code(400);
    return response;
  } else if (index < 0) {
    const response = h.response({
      status: "fail",
      message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
    response.code(404);
    return response;
  } else {
    if (index !== -1) {
      book[index] = {
        ...book[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        updatedAt,
      };

      const response = h.response({
        status: "success",
        message: "Buku berhasil diperbarui",
      });
      response.code(200);
      return response;
    }
  }

  const response = h.response({
    status: "fail",
    message: "Gagal memperbarui buku. Id tidak ditemukan",
  });

  response.code(404);
  return response;
};

const deleteBookById = (req, h) => {
  const { id } = req.params;
  const index = book.findIndex((b) => b.id === id);
  console.log(id);
  console.log(index);
  if (index !== 1) {
    book.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Catatan Telah Dihapus",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Catatan Gagal dihapus, Id tidak Valid",
  });
  response.code(404);
  return response;
};

module.exports = {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  editBookHandler,
  deleteBookById,
};
