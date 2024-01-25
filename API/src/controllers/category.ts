import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"


const getCategory = (_req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORY')
    }

}

const getCategorys =(_req:Request, res:Response) => {
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
    getCategorys,
    postCategory,
    updateCategory,
    deleteCategory
}