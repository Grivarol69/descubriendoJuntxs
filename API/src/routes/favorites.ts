
import { Router } from "express";
import {
    getFavoritesByProgramAndUser,
    postFavorite,
    deleteFavorite,
    countFavoritesByProgram
} from "../controllers/favorite"


const router = Router()

router.get('/count/:programId', countFavoritesByProgram);
router.get('/program/:programId/user/:userEmail', getFavoritesByProgramAndUser)
router.post('/', postFavorite)
router.delete('/program/:programId/user/:userEmail', deleteFavorite)

export default router;