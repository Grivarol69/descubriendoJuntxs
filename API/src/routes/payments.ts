import { Router } from "express";
import {
    getPaymentsByService,
    getPaymentsByUser,
    postPayment,
    updatePayment,
} from "../controllers/payment"

const router = Router()

router.get('/:serviceId', getPaymentsByService)
router.get('/:userId', getPaymentsByUser)
router.post('/', postPayment)
router.put('/:id', updatePayment)


export default router;