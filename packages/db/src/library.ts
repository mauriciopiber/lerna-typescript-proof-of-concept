import { IBook } from '@ts-lerna/types/src/Book';
import { ILibrary } from '@ts-lerna/types/src/Library';

const Book1: IBook = {
  _id: 1,
  name: 'Assim falou zaratustra em Alemão',
  published: '1810'
}


const Book2: IBook = {
  _id: 2,
  name: 'Vontade de Potência 1',
  published: '1815'
}

const Book3: IBook = {
  _id: 3,
  name: 'Vontade de Potência 2',
  published: '1820'
}


const Book4: IBook = {
  _id: 4,
  name: 'Schopenhauer Educador',
  published: '1822'
}

const bookList: IBook[] = [
  Book1,
  Book2,
  Book3,
  Book4,
]

export const library: ILibrary = {
  name: 'PiberNetwork Library 2020',
  _id: 1,
  books: bookList,
}
