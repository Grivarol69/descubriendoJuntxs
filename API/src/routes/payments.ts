import { Router } from "express";
import { postCreatePayment, reciveWebhook } from "../controllers/payments";

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
router.post('/webhook', reciveWebhook)


router.get('/', (_req, res) => {
    res.send("Descubriendo Juntxs 🦄🌈✨👋🌎🌍🌏✨🌈🦄");

})
router.post('/', postCreatePayment)

router.get('/success', (_req, res) => {
    res.send("Success");
})

router.get('/failure', (_req, res) => {
    res.send("Failure");
})
router.get('/pending', (_req, res) => {
    res.send("pending");
})



export default router;