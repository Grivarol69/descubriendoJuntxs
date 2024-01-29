import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


const getCategory = async (req:Request, res:Response) => {

    try {
        const {id} = req.params;
        const category = await prisma.category.findUnique({
            where:{
                id: Number(id)
            },
            include:{
                programs: true
            }
        });
        res.json(category)

    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORY')
    }

}


const getCategories = async (_req:Request, res:Response) => {
    try {

    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORYS')
    }
}

const postCategory = ({body }:Request, res:Response) => {
    try {
        res.send(body);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_CATEGORY')
    }

}

const updateCategory = (_req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_CATEGORY')
    }

}

const deleteCategory = (_req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_CATEGORY')
    }

}

export{
    getCategory,
    getCategories,
    postCategory,
    updateCategory,
    deleteCategory
}