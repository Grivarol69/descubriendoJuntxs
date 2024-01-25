"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const server = (0, express_1.default)();
server.set('port', process.env.PORT || 3000); // configuracion del puerto
// middlewares prade
server.use((0, cors_1.default)()); // middleware que permite que el servidor reciba peticiones de otros servidores
server.use((0, helmet_1.default)()); // middleware que añade seguridad a las peticiones
server.use((0, compression_1.default)()); // middleware que comprime las peticiones
server.use(body_parser_1.default.urlencoded({ extended: false })); // middleware que transforma los req.body a un objeto de javascript
server.use(express_1.default.json()); // middleware que transforma  los req.body a  un json
server.use((0, morgan_1.default)('combined')); // middleware que muestra por consola las peticiones que se hacen al servidor (GET, POST, PUT, DELETE
// routes
server.get('/hola', (_req, res) => {
    res.send('Hello World');
});
exports.default = server;
