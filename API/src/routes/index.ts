import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}/` // no de vuelve la ruta del directorio actual
const router = Router()

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) => {

            console.log(`Loading router: /${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
       
    }
   
})


export {router};