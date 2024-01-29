import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler";
import { PrismaClient } from "@prisma/client";
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
       
        const categories = await prisma.category.findMany();
        res.json(categories)

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

const updateCategory = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        console.log(id, name)
        const updatedCategory = await prisma.category.update({
            where:{
                id: Number(id)
            },
            data:{
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

export{
    getCategory,
     getCategories,
    postCategory,
    updateCategory,
}