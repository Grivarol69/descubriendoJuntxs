
import { Router } from "express";
import {
    getFavoritesByProgramAndUser,
    postFavorite,
    deleteFavorite,
    countFavoritesByProgram,
    getFavoritesByUser
} from "../controllers/favorite"


const router = Router()

router.get('/count/:programId', countFavoritesByProgram);
<<<<<<< HEAD
router.get('/program/:programId/user/:userEmail', getFavoritesByProgramAndUser)
=======
router.get('/program/:programId/user/:userId', getFavoritesByProgramAndUser)
router.get('/:userId', getFavoritesByUser)
>>>>>>> Feature/Hu-back/deploy
router.post('/', postFavorite)
router.delete('/program/:programId/user/:userEmail', deleteFavorite)

export default router;