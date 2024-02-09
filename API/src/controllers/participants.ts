import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getParticipantsByService = async (req: Request, res: Response) => {
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

  const getParticipantByUser = async (req: Request, res: Response) => {
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


const postParticipant = async (req: Request, res: Response) => {
  const {
    serviceId,
    userEmail,
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

    const newParticipant = await prisma.participant.create({
      data: {
        serviceId: serviceId && (serviceId as number),
        userId: user.id,
        role: "Participante", // Add the missing property "role
        state: "Activo", // Add the missing property "state"
      },
    });

    res.status(200).json(newParticipant);
  } catch (error) {
    handleHttp(res, "ERROR_POST_PARTICIPANT");
  }
};

const updateParticipant = async (req: Request, res: Response) => {
  const { serviceId, userEmail } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail as string,
      },
    });

    if (!user) {
      return handleHttp(res, "ERROR_USER_NOT_FOUND");
    }
    
      const updatedParticipant = await prisma.participant.update({
        where: { 
          serviceId_userId: {
            serviceId: serviceId as unknown as number,
            userId: user.id,
          },
        }, 

        data: {
          state: "Inactivo",
        },
    });

      res.status(200).json(updatedParticipant);
  } catch (error) {
    return handleHttp(res, "ERROR_UPDATE_PARTICIPANT");
  }
};



export {
  getParticipantsByService,
  getParticipantByUser,
  postParticipant,
  updateParticipant,
};
