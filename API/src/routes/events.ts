import { Router } from "express";
import { deleteEvent, getEvent, getEvents, postEvent, updateEvent } from "../controllers/event";

const router = Router()

router.get('/', getEvents)
router.get('/:id', getEvent)
router.post('/', postEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

export {router};