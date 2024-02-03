import { Router } from "express";
import { postCreatePayment, reciveWebhook } from "../controllers/payments";


const router = Router()
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

router.post('/webhook', reciveWebhook)


export default router;