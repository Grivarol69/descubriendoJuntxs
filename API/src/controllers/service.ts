import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { ServiceType, PrismaClient, ServiceState } from "@prisma/client";

const prisma = new PrismaClient();

const getServices = async (_req: Request, res: Response) => {
      
    try {
      const service = await prisma.service.findMany({
        where: {
          state: "Activo",
        },
      });
  
      res.status(200).json(service);
    } catch (error) {
      handleHttp(res, "ERROR_GET_SERVICE_BY_ID");
    }
  };

const getServiceById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const service = await prisma.service.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(service);
  } catch (error) {
    handleHttp(res, "ERROR_GET_SERVICE_BY_ID");
  }
};

const getServiceByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  
  try {
    const event = await prisma.service.findMany({
      where: {
        type: type as ServiceType,
        state: "Activo",
      },
    });
    res.status(200).json(event);
  } catch (error) {
    handleHttp(res, "ERROR_GET_SERVICES_BY_TYPE");
  }
};


const postService = async (req: Request, res: Response) => {
  const {
    name,
    userId,
    dateIn,
    dateOut,
    hourIn,
    duration,
    amount,
    objective,
    syllabus,
  } = req.body;

  try {
    const newEvent = await prisma.service.create({
      data: {
        userId: userId && (userId as number),
        name: name && (name as string),
        dateIn: dateIn && (dateIn as Date),
        dateOut: dateOut && (dateOut as Date),
        hourIn: hourIn && (hourIn as Date),
        duration: duration && (duration as string),
        amount: amount && (amount as number),
        objective: objective && (objective as string),
        syllabus: syllabus && (syllabus as string),
        state: "Activo"
      },
    });

    res.status(200).json(newEvent);
  } catch (error) {
    handleHttp(res, "ERROR_POST_SERVICE");
  }
};

const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;

  const {
    name,
    dateIn,
    dateOut,
    hourIn,
    duration,
    amount,
    objective,
    syllabus,
    type,
    state
  } = req.body;

  try {
    const updatedEvent = await prisma.service.update({
      where: { id: Number(id) },

      data: {
        name: name && (name as string),
        dateIn: dateIn && (dateIn as Date),
        dateOut: dateOut && (dateOut as Date),
        hourIn: hourIn && (hourIn as Date),
        duration: duration && (duration as string),
        amount: amount && (amount as number),
        objective: objective && (objective as string),
        syllabus: syllabus && (syllabus as string),
        type: type && (type as ServiceType),
        state: state && (state as ServiceState)
      },
    });

    res.status(200).json(updatedEvent);
  } catch (error) {
    return handleHttp(res, "ERROR_UPDATE_SERVICE");
  }
};

const paginationService = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1; //*Número de página
    const pageSize = Number(req.query.pageSize) || 10; //* Tamaño de la página

    //* calcular el indice de inicio y limitar la consulta a la página
    const startIndex = (page - 1) * pageSize;

    const events = await prisma.service.findMany({
      skip: startIndex,
      take: pageSize,
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "error interno del servidor" });
  }
};

export {
    getServices,
    getServiceById,
    getServiceByType,
    postService,
    updateService,
    paginationService,
};
