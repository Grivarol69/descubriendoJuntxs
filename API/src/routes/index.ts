import express from "express";
// import { readdirSync } from "fs";
import MessageResponse from "../interfaces/MessageResponse";
import categories from "./categories";
import programs from "./programs";
import users from "./users";
// import path from "path";

// const PATH_ROUTER = path.resolve('./src/routes') 
const router = express.Router()

// const loadedRoutes: string[] = [];

// const cleanFileName = (fileName: string) => {
//     const file = fileName.split('.').shift()
//     return file ? file : '';
// }

// readdirSync(PATH_ROUTER).filter((fileName) => {
//     const cleanName = cleanFileName(fileName)
    
//     if(cleanName !== 'index'){
//         import(`./${cleanName}`).then((moduleRouter) => {
//             console.log(`Loading router: /${cleanName}`)
//             router.use(`/${cleanName}`, moduleRouter.router)
//             loadedRoutes.push(cleanName);
//         })
//     }
// })

router.get<{}, MessageResponse>('/', (_req, res) => {
  res.json({
    "message": "Descubriendo Juntxs 🦄🌈✨👋🌎🌍🌏✨🌈🦄"
  });
});

router.use('/categories', categories);
router.use('/programs', programs);
router.use('/users', users);



export default router;