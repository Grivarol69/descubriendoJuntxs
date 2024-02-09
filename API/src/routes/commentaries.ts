import { Router } from "express";
import {
    getCommentaryByProgramAndUser,
    getCommentaryByProgram,
    getCommentaryByUser,
    postCommentary,
    putCommentary,
    deleteCommentary
} from "../controllers/commentary"


const router = Router()

// router.get('/program/:programId/user/:userEmail', getCommentaryByProgramAndUser)
router.get('/', getCommentaryByProgramAndUser)
router.get('/program/:programId', getCommentaryByProgram)
router.get('/program/:userEmail', getCommentaryByUser)
router.post('/', postCommentary)
router.put('/', putCommentary)
router.delete('/', deleteCommentary)


export default router;