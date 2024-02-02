import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getEvents = async (_req: Request, res: Response) => {
    try {
        const events = await prisma.event.findMany();
        res.status(200).json(events);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_Events')
    }
}

const getEventsByProgram = async (req: Request, res: Response) => {
    const { program } = req.query;

    try {
        const events = await prisma.event.findMany({
            where: {
                programId: Number(program)
            }
        });

        res.status(200).json(events);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_Events')
    }

}

const getEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const event = prisma.event.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(event);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_EVENTS')
    }
}

const postEvent = async ({ body }: Request, res: Response) => {

    const { name, description, amount, state, category, objective, syllabus } = body;

    try {
        const newProgram = await prisma.program.create({
            data: {
                name: name,
                description: description,
                amount: amount,
                state: state,
                categoryId: category,
                objective: objective,
                syllabus: syllabus,
                category: category
            }
        });

        res.status(200).json(newProgram);

    } catch (error) {
        handleHttp(res, 'ERROR_POST_CATEGORY')
    }

}

const updateEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { name, description, amount, state, category } = req.body;

    try {

        const updatedProgram = await prisma.program.update({
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

    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_CATEGORY')
    }

}

const deleteEvent = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const program = await prisma.program.delete({
            where: {
                id: Number(id)
            },
        });
        res.status(200).json(program);

    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_CATEGORY')
    }

}

export {
    getEvents,
    getEvent,
    postEvent,
    updateEvent,
    deleteEvent,
    getEventsByProgram
}