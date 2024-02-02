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
exports.getEventsByProgram = exports.deleteEvent = exports.updateEvent = exports.postEvent = exports.getEvent = exports.getEvents = void 0;
const error_handler_1 = require("../utils/error.handler");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getEvents = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield prisma.event.findMany();
        res.status(200).json(events);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_Events');
    }
});
exports.getEvents = getEvents;
const getEventsByProgram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { program } = req.query;
    try {
        const events = yield prisma.event.findMany({
            where: {
                programId: Number(program)
            }
        });
        res.status(200).json(events);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_Events');
    }
});
exports.getEventsByProgram = getEventsByProgram;
const getEvent = (req, res) => {
    const { id } = req.params;
    try {
        const event = prisma.event.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(event);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_EVENTS');
    }
};
exports.getEvent = getEvent;
const postEvent = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.postEvent = postEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const program = yield prisma.program.delete({
            where: {
                id: Number(id)
            },
        });
        res.status(200).json(program);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_DELETE_CATEGORY');
    }
});
exports.deleteEvent = deleteEvent;
