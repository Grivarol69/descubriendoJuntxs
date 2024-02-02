import { Request, Response } from "express"
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient();

require('dotenv').config()

if (!process.env.MP_TOKEN) {
    throw new Error('No se ha encontrado el token de mercado pago')
}

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-2980126963536437-020119-4e286ecf46944fbb0eeca10c524a8e8a-1663162309' });

const payment = new Payment(client);



const postCreatePayment = async (req: Request, res: Response) => {
    const { programId, userId, amount, type, message, contact_phone, contact_email } = req.body;
    const preference = new Preference(client);
    try {
        const infoUser = {
            userId: userId ? userId : "anonimo",
            contact_phone: contact_phone ? contact_phone : "anonimo",
            contact_email: contact_email ? contact_email : "anonimo"
        }

        let program;
        try {
            program = await prisma.program.findUnique({
                where: {
                    id: Number(programId)
                }
            })
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                program = { name: "Default Program", id: 0 };
            } else {

                throw error;
            }
        }

        const programToUse = program;

        const response = await preference.create({
            body: {
                items: [
                    {
                        id: 'item_id',
                        title: programToUse?.name ?? "Default Program Name",
                        quantity: 1,
                        unit_price: amount
                    }
                ],
                purpose: "wallet_purchase",
                back_urls: {
                    success: "http://localhost:3000",
                    failure: "http://localhost:3000/feedback",
                    pending: "http://localhost:3000/feedback",
                },
                auto_return: "approved",
                notification_url: "https://124a-181-167-76-221.ngrok-free.app/webhook",
                metadata: {
                    programId: programId,
                    userId: infoUser.userId,
                    message: message,
                    type: type,
                    state: "Active",
                    contact_email: infoUser.contact_email,
                    contact_phone: infoUser.contact_phone
                }
            },
        });
        res.send(response);
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

const reciveWebhook = async (req: Request, res: Response) => {
    console.log(req.query);
    const id = req.query.id || "xxxx";

    if (typeof id === 'string') {
        try {
            const paymentInfo = await payment.get({ id: id });
            console.log('meta', paymentInfo);
            res.send('ok');
        } catch (error) {
            console.log('Error al obtener el pago:', error);
            res.status(500).send('Error al obtener el pago');
        }
    } else {
        console.log('ID no es una cadena');
        res.status(400).send('ID no es una cadena');
    }
}

const getPaymentDetails = async (req: Request, res: Response) => {
    const paymentId = req.params.paymentId;

    if (typeof paymentId === 'string') {
        try {
            const paymentInfo = await (payment as any).get({ id: paymentId });
            console.log('meta', paymentInfo);

            const createPayment = await prisma.donation.create({
                data: {
                    programId: paymentInfo.metadata.programId,
                    userId: paymentInfo.metadata.userId,
                    amount: paymentInfo.transaction_amount,
                    date: paymentInfo.date_created,
                    type: paymentInfo.metadata.type,
                    message: paymentInfo.metadata.message,
                    state: paymentInfo.metadata.state,
                    contact_email: paymentInfo.metadata.contact_email,
                    contact_phone: paymentInfo.metadata.contact_phone

                }
            });

            res.status(200).json(createPayment);



        } catch (error) {
            console.log(error)
            res.status(500).send('Error al obtener el pago');
        }
    } else {
        res.status(400).send('ID no es una cadena');
    }

}

export {
    postCreatePayment,
    reciveWebhook,
    getPaymentDetails
}