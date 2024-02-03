"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const error_handler_1 = require("../utils/error.handler");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.status(200).json(users);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_USERS');
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    try {
        const user = prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(user);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_USER');
    }
};
exports.getUser = getUser;
const postUser = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, surName, identification, phone, dateIn, dateOut, description, linkedin, languaje, position, role } = body;
    try {
        const newUser = yield prisma.user.create({
            data: {
                email: email,
                name: name,
                surName: surName,
                identification: identification,
                phone: phone,
                dateIn: dateIn,
                dateOut: dateOut,
                description: description,
                linkedin: linkedin,
                languaje: languaje,
                position: position,
                role: role
            }
        });
        res.status(200).json(newUser);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_POST_USER');
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { email, name, surName, identification, phone, dateIn, dateOut, description, linkedin, languaje, position, role } = req.body;
    try {
        const updatedUser = yield prisma.user.update({
            where: { id: Number(id) },
            data: {
                email: email && email,
                name: name && name,
                surName: surName && surName,
                identification: identification && identification,
                phone: phone && phone,
                dateIn: dateIn && dateIn,
                dateOut: dateOut && dateOut,
                description: description && description,
                linkedin: linkedin && linkedin,
                languaje: languaje && languaje,
                position: position && position,
                role: role && role
            }
        });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_UPDATE_USER');
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield prisma.user.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(user);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_DELETE_USER');
    }
});
exports.deleteUser = deleteUser;
