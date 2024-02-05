
import { Router } from "express";
import {
    getFavoritesByProgramAndUser,
    postFavorite,
    deleteFavorite
} from "../controllers/favorite"


const router = Router()

router.get('/program/:programId/user/:userId', getFavoritesByProgramAndUser)
router.post('/', postFavorite)
router.delete('/program/:programId/user/:userId', deleteFavorite)

export default router;