import { Router } from "express";
import { getUsers, getUser, postUser, updateUser, deleteUser} from "../controllers/users"

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', postUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;