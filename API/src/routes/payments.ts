import { Router } from "express";
import {
    getPaymentsByService,
    getPaymentsByUser,
    postPayment,
    updatePayment,
} from "../controllers/payment"

const router = Router()

router.get('/:serviceId', getPaymentsByService)
router.get('/:userEmail', getPaymentsByUser)
router.post('/', postPayment)
router.put('/:userEmail', updatePayment)


export default router;