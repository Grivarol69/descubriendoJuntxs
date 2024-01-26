import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getUsers = async (_req:Request, res:Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_USERS')
    }
}

const getUser = (req:Request, res:Response) => {
    const {id} = req.params;
    try {
        const user = prisma.user.findUnique({
            where:{
                id: Number(id)
            }
        });
        res.status(200).json(user)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_USER')
    }
}

const postUser = async ({ body}:Request, res:Response)=>{
    const { email, name, surName, identification, phone, dateIn, dateOut, description, linkedin, languaje, position, role} = body;

    try {
        const newUser = await prisma.user.create({
            data:{
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
        })
        res.status(200).json(newUser);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_USER')
    }
}

const updateUser =async (req:Request, res:Response) => {
    const { id } = req.params;
    const { email, name, surName, identification, phone, dateIn, dateOut, description, linkedin, languaje, position, role} = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: {id: Number(id)},

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
        })
        res.status(200).json(updatedUser);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_USER')
    }
}

const deleteUser = async (req:Request, res:Response) => {
    const {id} = req.params;

    try {
        
        const user = await prisma.user.delete({
            where:{
                id: Number(id)
            }
        })
        res.status(200).json(user)
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_USER')
    }
}

export {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
}