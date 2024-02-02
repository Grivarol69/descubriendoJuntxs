import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { PrismaClient, ProgramType, State } from "@prisma/client"

const prisma = new PrismaClient();


const getPrograms = async (req: Request, res: Response) => {
    const { name } = req.query;

    try {
        const programs = await prisma.program.findMany({
            where: {
                state: "Activo"
            }
        });

        const names = name
            ? programs.filter((program) => {
                return program.name.toLowerCase().includes(name.toString().toLowerCase());
            })
            : programs

        res.status(200).json(names);

    } catch (error) {
        console.log(error)
        handleHttp(res, 'ERROR_GET_Programs')
    }
}

const getProgramsByCategory = async (req: Request, res: Response) => {

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
        console.log(error)
        handleHttp(res, 'ERROR_GET_Programs')
    }

}




const getProgramById = async (req: Request, res: Response) => {

    const { id } = req.params;
    
    try {
        const program = await prisma.program.findUnique({
            where: {
                id: Number(id)
            }
        });
        
        res.status(200).json(program);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORYS')
    }
}

const getProgramByType = async (req: Request, res: Response) => {
    const { type } = req.params;
    console.log('Type: ', type);

    try {
        const program = await prisma.program.findMany({
            where: {
                type: type as ProgramType,
                state: "Activo",
            }
        });
        res.status(200).json(program);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_PROGRAMS_BY_TYPE')
    }
}


const postProgram = async ({ body }: Request, res: Response) => {


    const { name, description, amount, objective, syllabus, state, type, categoryId } = body;


    try {
        const newProgram = await prisma.program.create({
            data: {

                name: name && name as string,
                description: description && description as string,
                amount: amount && amount as number,
                objective: objective && objective as string,
                syllabus: syllabus && syllabus as string,
                state: state && state as State,
                type: type && type as ProgramType,
                categoryId: categoryId && categoryId

            }
        });

        res.status(200).json(newProgram);

    } catch (error) {

        handleHttp(res, 'ERROR_POST_CATEGORY')
    }

}

const updateProgram = async (req: Request, res: Response) => {

    const { id } = req.params;

    

    const { name, description, amount, objective, syllabus, state, type, categoryId } = req.body;


    try {

        const updatedProgram = await prisma.program.update({
            where: { id: Number(id) },

            data: {

                name: name && name as string,
                description: description && description as string,
                amount: amount && amount as number,
                objective: objective && objective as string,
                syllabus: syllabus && syllabus as string,
                state: state && state as State,
                type: type && type as ProgramType,
                categoryId: categoryId && categoryId

            }
            
        });

        res.status(200).json(updatedProgram);

    } catch (error) {
        return handleHttp(res, 'ERROR_UPDATE_CATEGORY')
    }
}

const paginationProgram = async (req: Request, res: Response) => {
    
    try {
        const page = Number(req.query.page) || 1; //*Número de página
        const pageSize = Number(req.query.pageSize) || 10; //* Tamaño de la página
    
        console.log('page: ' + page);
        console.log('pageSize: ' + pageSize);
    
        //* calcular el indice de inicio y limitar la consulta a la página
        const startIndex = (page - 1) * pageSize;

        const programs = await prisma.program.findMany({
            skip: startIndex,
            take: pageSize
        });

        res.status(200).json(programs);

    } catch (error) {
        console.log('Error al obtener programas ',error);
        res.status(500).json({ error: 'error interno del servidor'});
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

export {
    getPrograms,
    getProgramById,
    getProgramByType,
    postProgram,
    updateProgram,
    getProgramsByCategory,
    paginationProgram
    // deleteProgram
}