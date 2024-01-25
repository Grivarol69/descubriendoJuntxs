import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"


const getPrograms = (_req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_Programs')
    }

}

const getProgram =(_req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORYS')
    }
}

const postPrograms = ({body }:Request, res:Response) => {
    try {
        res.send(body);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_CATEGORY')
    }

}

const updatePrograms = (_req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_CATEGORY')
    }

}

const deletePrograms = (_req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_CATEGORY')
    }

}

export{
    getPrograms,
    getProgram,
    postPrograms,
    updatePrograms,
    deletePrograms
}