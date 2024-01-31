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
exports.getProgramsByCategory = exports.updateProgram = exports.postProgram = exports.getProgram = exports.getPrograms = void 0;
const error_handler_1 = require("../utils/error.handler");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPrograms = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const programs = yield prisma.program.findMany({
            where: {
                state: "Activo"
            }
        });
        res.status(200).json(programs);
    }
    catch (error) {
        console.log(error);
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_Programs');
    }
});
exports.getPrograms = getPrograms;
const getProgramsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    try {
        const programs = yield prisma.program.findMany({
            where: {
                state: "Activo",
                categoryId: Number(categoryId)
            }
        });
        res.status(200).json(programs);
    }
    catch (error) {
        console.log(error);
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_Programs');
    }
});
exports.getProgramsByCategory = getProgramsByCategory;
const getProgram = (req, res) => {
    const { id } = req.params;
    try {
        const program = prisma.program.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(program);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_CATEGORYS');
    }
};
exports.getProgram = getProgram;
const postProgram = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, amount, state, category } = body;
    try {
        const newProgram = yield prisma.program.create({
            data: {
                name: name,
                description: description,
                amount: amount,
                state: state,
                categoryId: category
            }
        });
        res.status(200).json(newProgram);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_POST_CATEGORY');
    }
});
exports.postProgram = postProgram;
const updateProgram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, amount, state, category } = req.body;
    try {
        const updatedProgram = yield prisma.program.update({
            where: { id: Number(id) },
            data: {
                name: name && name,
                description: description && description,
                amount: amount && amount,
                state: state && state,
                categoryId: category && category
            }
        });
        res.status(200).json(updatedProgram);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_UPDATE_CATEGORY');
    }
});
exports.updateProgram = updateProgram;
