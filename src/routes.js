const {
    addBooksHandler,
    getBooksAllHandler,
    getBooksIdHandler,
    editBooksHandler,
    deleteBooksHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },

    {
        method: 'GET',
        path: '/books',
        handler: getBooksAllHandler,
    },

    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksIdHandler,
    },

    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksHandler,
    },

    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksHandler,
    },
];

module.exports = routes;
