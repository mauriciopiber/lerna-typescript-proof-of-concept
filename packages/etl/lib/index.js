"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@ts-lerna/db/src/library");
var math_1 = require("@ts-lerna/lib/src/math");
function printBookInfo(book) {
    console.log("id is " + book._id);
    console.log("name is " + book.name);
    console.log("published in " + book.published);
}
function printBookInfoList(books) {
    books.forEach(function (book) {
        printBookInfo(book);
    });
}
function printLibraryInfo(library) {
    console.log("library id is " + library._id);
    console.log("library name is " + library.name);
    printBookInfoList(library.books);
}
printLibraryInfo(library_1.library);
console.log(math_1.MathOperation({ operator1: 254, operator2: 30 }).result);
//console.log('index', Book1);
