import { Router } from "express";
import { getProgram, getPrograms, postProgram, updateProgram } from "../controllers/program";

const router = Router()

router.get('/', getPrograms)
router.get('/:id', getProgram)
router.post('/', postProgram)
router.put('/:id', updateProgram)
// router.delete('/:id', deleteProgram)

export default router;