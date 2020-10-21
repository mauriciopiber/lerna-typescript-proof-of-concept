"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.library = void 0;
var Book1 = {
    _id: 1,
    name: 'Assim falou zaratustra',
    published: '1810'
};
var Book2 = {
    _id: 2,
    name: 'Vontade de Potência 1',
    published: '1815'
};
var Book3 = {
    _id: 3,
    name: 'Vontade de Potência 2',
    published: '1820'
};
var Book4 = {
    _id: 4,
    name: 'Schopenhauer Educador',
    published: '1822'
};
var bookList = [
    Book1,
    Book2,
    Book3,
    Book4,
];
exports.library = {
    name: 'PiberNetwork Library 2020',
    _id: 1,
    books: bookList,
};
