import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PaymentState, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPaymentsByService = async (req: Request, res: Response) => {
  const { serviceId } = req.params;

    try {
      const participants = await prisma.participant.findMany({
        where: {
          serviceId: Number(serviceId),
          state: "Activo",
        },
      });

      res.status(200).json(participants);

    } catch (error) {
      handleHttp(res, "ERROR_GET_PARTICIPANTS_BY_SERVICE");
    }
  };

  const getPaymentsByUser = async (req: Request, res: Response) => {
    const { userEmail } = req.params;
  
      try {

        const user = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
        });
    
        if (!user) {
          return handleHttp(res, "ERROR_USER_NOT_FOUND");
        }
        const participants = await prisma.participant.findMany({
          where: {
            userId: user.id,
            state: "Activo",
          },
        });
  
        res.status(200).json(participants);
  
      } catch (error) {
        handleHttp(res, "ERROR_GET_PARTICIPANTS_BY_USER");
      }
    };


const postPayment = async (req: Request, res: Response) => {
  const {
    serviceId,
    userEmail,
    amount,
    instrument,
    transactionId,
    state = "Aceptado"
  } = req.body;

  try {

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return handleHttp(res, "ERROR_USER_NOT_FOUND");
    }

    const newPayment = await prisma.payment.create({
      data: {
        serviceId: serviceId && (serviceId as number),
        userId: user.id,
        amount: amount && (amount as number),
        instrument: instrument && (instrument as string),
        transactionId: transactionId && (transactionId as string),
        state: state, // Add the missing property "state"
      },
    });

    res.status(200).json(newPayment);
  } catch (error) {
    handleHttp(res, "ERROR_POST_PAYMENT");
  }
};

const updatePayment = async (req: Request, res: Response) => {
  const { userEmail } = req.params;
  const { amount, instrument, transactionId, state } = req.body;

  try {

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return handleHttp(res, "ERROR_USER_NOT_FOUND");
    }
    
    const updatedPayment = await prisma.payment.update({
      where: { id: user.id },

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
};
