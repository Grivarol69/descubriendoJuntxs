import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PaymentState, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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


const postPayment = async (req: Request, res: Response) => {
  const {
    serviceId,
    userId,
    amount,
    instrument,
    transactionId
  } = req.body;

  try {
    const newPayment = await prisma.payment.create({
      data: {
        serviceId: serviceId && (serviceId as number),
        userId: userId && (userId as number),
        amount: amount && (amount as number),
        instrument: instrument && (instrument as string),
        transactionId: transactionId && (transactionId as string),
        state: "Aceptado", // Add the missing property "state"
      },
    });

    res.status(200).json(newPayment);
  } catch (error) {
    handleHttp(res, "ERROR_POST_PAYMENT");
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
};
