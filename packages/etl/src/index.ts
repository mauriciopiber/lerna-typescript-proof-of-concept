import { IBook } from '@ts-lerna/types/src/Book';
import { ILibrary } from '@ts-lerna/types/src/Library';
import { library } from '@ts-lerna/db/src/library';
import { MathOperation } from '@ts-lerna/lib/src/math';

function printBookInfo(book: IBook): void {

  console.log(`id is ${book._id}`);
  console.log(`name is ${book.name}`);
  console.log(`published in ${book.published}`);
}

function printBookInfoList(books: IBook[]): void {
  books.forEach(function(book) {
    printBookInfo(book);
  })
}

function printLibraryInfo(library: ILibrary) {

  console.log(`library id is ${library._id}`);
  console.log(`library name is ${library.name}`);
  printBookInfoList(library.books);
}

printLibraryInfo(library);
console.log(MathOperation({operator1: 254, operator2: 30}).result);
//console.log('index', Book1);
