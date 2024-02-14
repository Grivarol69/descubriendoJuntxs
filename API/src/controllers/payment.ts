import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PaymentState, PrismaClient } from "@prisma/client";
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';

const prisma = new PrismaClient();

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-2980126963536437-020119-4e286ecf46944fbb0eeca10c524a8e8a-1663162309' });

const payment = new Payment(client);

const postPayment = async (req: Request, res: Response) => {
  const { serviceId, name, userId, amount, } = req.body;
  const preference = new Preference(client);
  try {
    const response = await preference.create({
      body: {
        items: [
          {
            id: serviceId,
            title: name,
            quantity: 1,
            unit_price: amount
          }
        ],
        purpose: "wallet_purchase",
        back_urls: {
          success: "https://client-gamma-three-32.vercel.app/",
          failure: "https://client-gamma-three-32.vercel.app/",
          pending: "https://client-gamma-three-32.vercel.app/"
        },
        auto_return: "approved",
        notification_url: "https://juntxs.vercel.app/payments/reciveMP",
        metadata: {
          serviceId: serviceId,
          userId: userId,
        }
        
      }

    });

    res.send(response)

  } catch (error) {

    console.log(error);

  }


  // try {
  //   const newPayment = await prisma.payment.create({
  //     data: {
  //       serviceId: serviceId && (serviceId as number),
  //       userId: userId && (userId as number),
  //       amount: amount && (amount as number),
  //       instrument: instrument && (instrument as string),
  //       transactionId: transactionId && (transactionId as string),
  //       state: "Aceptado", // Add the missing property "state"
  //     },
  //   });

  //   res.status(200).json(newPayment);
  // } catch (error) {
  //   handleHttp(res, "ERROR_POST_PAYMENT");
  // }
};

const reciveMP = async (req: Request, res: Response) => {
  try {
    if (req.query.topic === 'payment') {
      const paymentId = req.query.id as string;

      console.log(paymentId);
      console.log('isamela')
      const paymentInfo = await (payment as any).get({ id: paymentId });
      console.log(paymentInfo);

      if (paymentInfo.status === 'approved') {
        const payment = await prisma.payment.findFirst({
          where: {
            transactionId: paymentInfo.id.toString()
          }
        });
        if (!payment) {
          const newPayment = await prisma.payment.create({
            data: {
              serviceId: (paymentInfo.metadata.service_id as number),
              userId: paymentInfo.metadata.user_id,
              amount: paymentInfo.transaction_amount,
              instrument: paymentInfo.payment_method_id,
              transactionId: paymentInfo.id.toString(),
              state: "Aceptado"
            }
          });
          res.status(200).json(newPayment);
        }
      }
      // if (paymentInfo.status === 'approved') {
      //   const payment = await prisma.payment.findUnique({
      //     where: {
      //       transactionId: paymentInfo.id
      //     }
      //   });
      // if (!payment) {
      //   const newPayment = await prisma.payment.create({
      //     data: {
      //       amount: paymentInfo.transaction_amount,
      //       instrument: paymentInfo.payment_method_id,
      //       transactionId: paymentInfo.id,
      //       state: "Aceptado"
      //     }
      //   });
      //   res.status(200).json(newPayment);
      // }
    }


  } catch (error) {
    console.log(error);
  }
}
const getPaymentsByService = async (req: Request, res: Response) => {
  const { serviceId } = req.params;

  try {
    const participants = await prisma.participant.findMany({
      where: {
        id: Number(serviceId),
        state: "Activo",
      },
    });

    res.status(200).json(participants);

  } catch (error) {
    handleHttp(res, "ERROR_GET_PARTICIPANTS_BY_SERVICE");
  }
};

const getPaymentsByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const participants = await prisma.participant.findMany({
      where: {
        id: Number(userId),
        state: "Activo",
      },
    });

    res.status(200).json(participants);

  } catch (error) {
    handleHttp(res, "ERROR_GET_PARTICIPANTS_BY_USER");
  }
};




const updatePayment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount, instrument, transactionId, state } = req.body;

  try {
    const updatedPayment = await prisma.payment.update({
      where: { id: Number(id) },

      data: {
        amount: amount && (amount as number),
        instrument: instrument && (instrument as string),
        transactionId: transactionId && (transactionId as string),
        state: state && (state as PaymentState)
      },
    });

    res.status(200).json(updatedPayment);
  } catch (error) {
    return handleHttp(res, "ERROR_UPDATE_PAYMENT");
  }
};



export {
  getPaymentsByService,
  getPaymentsByUser,
  postPayment,
  updatePayment,
  reciveMP
};
