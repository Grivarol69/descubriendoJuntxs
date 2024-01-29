import { Router } from "express";
import { deleteCategory, getCategory, getCategories, postCategory, updateCategory } from "../controllers/category";

const router = Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', postCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)


export {router}; 