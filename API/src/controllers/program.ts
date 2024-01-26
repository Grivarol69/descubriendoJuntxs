import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getPrograms = async (_req:Request, res:Response) => {
    try {
        const programs = await prisma.program.findMany({
            where: {
                state: "Activo"
            }
        });
        res.status(200).json(programs);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_Programs')
    }

}

const getProgramsByCategory = async (req:Request, res:Response) => {

    const { categoryId } = req.params;

    try {
        const programs = await prisma.program.findMany({
            where: {
                state: "Activo",
                categoryId: Number(categoryId)
            }
        });
        res.status(200).json(programs);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_Programs')
    }

}



const getProgram =(req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const program = prisma.program.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(program);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORYS')
    }
}



const postProgram = async ({ body }:Request, res:Response) => {
    
    const { name, description, amount, state, category} = body;

    try {
        const newProgram = await prisma.program.create({
            data: { 
                name: name, 
                description: description, 
                amount: amount, 
                state: state,
                categoryId: category
            }
        });

        res.status(200).json(newProgram);

    } catch (error) {
        handleHttp(res, 'ERROR_POST_CATEGORY')
    }

}

const updateProgram = async (req:Request, res:Response) => {

    const { id } = req.params;
    const { name, description, amount, state, category} = req.body;

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

// const deleteProgram = async (req:Request, res:Response) => {
    
//     const { id } = req.params;

//     try {

//         const program = await prisma.program.delete({
//             where: { 
//                 id: Number(id) },
//         });
//         res.status(200).json(program);

//     } catch (error) {
//         handleHttp(res, 'ERROR_DELETE_CATEGORY')
//     }

// }

export{
    getPrograms,
    getProgram,
    postProgram,
    updateProgram,
    getProgramsByCategory
    // deleteProgram
}