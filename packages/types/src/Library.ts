import { IBook } from '@ts-lerna/types/src/Book';

export interface ILibrary {
  _id: number;
  name: string;
  books: IBook[];
}
