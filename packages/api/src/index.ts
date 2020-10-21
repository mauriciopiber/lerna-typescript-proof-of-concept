import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { library } from '@ts-lerna/db/src/library';
import { ILibraryApi } from '@ts-lerna/types/src/LibraryApi';

const app: Express = express();

const PORT = 3000;

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// simple route
app.get('/', (req: Request, res: Response) : void => {

  const result: ILibraryApi = { message: 'Welcome to OMEGA API.', library };
  res.json(result);
});

app.listen(PORT);
