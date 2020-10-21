import { IBook } from '@ts-lerna/types/src/Book';
import { library } from '@ts-lerna/db/src/library';
import { MathOperation } from '@ts-lerna/lib/src/math';


function setInnerHtml(elm: HTMLElement | null, value: string) {
  if (elm) {
    elm.innerHTML = value;
  }
}

function ShowBook(book: IBook) {

  if (!book) {
    throw new Error('Missing book');
  }

  const published: HTMLElement | null = document.getElementById('published')!;
  const id: HTMLElement | null = document.getElementById('id')!;
  const name: HTMLElement | null = document.getElementById('name')!;

  setInnerHtml(published, book.published);
  setInnerHtml(id, book._id.toString());
  setInnerHtml(name, book.name);
}


ShowBook(library.books[1]);
alert(MathOperation({operator1: 25, operator2: 30}).result);
