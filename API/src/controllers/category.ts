import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const getCategory = async (_req:Request, res:Response) => {
    
    try {
        
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

const postCategory = async ({body }:Request, res:Response) => {
    const {name} = body;
    try {
        const newCategory = await prisma.category.create({
            data:{
                name: name,
            }
        });
        res.json(newCategory)

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