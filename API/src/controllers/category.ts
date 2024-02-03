import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler";
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient();




const getCategory = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const category = await prisma.category.findUnique({
            where: {
                id: Number(id)
            },

            include: {



                program: true
            }
        });
        res.json(category)

    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORY')
    }

}

const getCategories = async (_req: Request, res: Response) => {
    try {

        const categories = await prisma.category.findMany();
        res.json(categories)

    } catch (error) {
        console.log(error)
    }
}

const postCategory = async ({ body }: Request, res: Response) => {
    const { name } = body;
    console.log(body)
    if (!name) {
        res.status(400).json({ error: "El nombre de la categoría es requerido" });
        return;
    }
    try {
        const newCategory = await prisma.category.create({
            data: {
                name: name,
            }
        });
        res.json(newCategory)
    } catch (error) {
        const message = (error as Error).message;
        console.log(error);
        res.status(500).json({ error: message });
    }
}

const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        console.log(id, name)
        const updatedCategory = await prisma.category.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name
            }
        });
        res.json(updatedCategory)

    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_CATEGORY')
    }
}

// const deleteCategory = (_req:Request, res:Response) => {
//     try {

//     } catch (error) {
//         handleHttp(res, 'ERROR_DELETE_CATEGORY')
//     }

// }

export {
    getCategory,
    getCategories,
    postCategory,
    updateCategory,
}