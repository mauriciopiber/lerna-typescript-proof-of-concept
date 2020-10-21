"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var library_1 = require("@ts-lerna/db/src/library");
var app = express_1.default();
var PORT = 3000;
var corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors_1.default(corsOptions));
// parse requests of content-type - application/json
app.use(body_parser_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// simple route
app.get('/', function (req, res) {
    var result = { message: 'Welcome to OMEGA API.', library: library_1.library };
    res.json(result);
});
app.listen(PORT);
