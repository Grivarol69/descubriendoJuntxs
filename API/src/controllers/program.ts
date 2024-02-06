import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PrismaClient, State } from "@prisma/client";
import { ZodError } from "zod";
import { programSchema } from "../schemas/program.schema";

const prisma = new PrismaClient();

const getPrograms = async (req: Request, res: Response) => {
  const { name } = req.query;

  try {
    const programs = await prisma.program.findMany({
      where: {
        state: "Activo",
      },
      include: {
        commentary: true,
      },
    });

    const names = name
      ? programs.filter((program) => {
          return program.name
            .toLowerCase()
            .includes(name.toString().toLowerCase());
        })
      : programs;

    res.status(200).json(names);
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_GET_Programs");
  }
};

const getProgramsByCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  try {
    const programs = await prisma.program.findMany({
      where: {
        state: "Activo",
        categoryId: Number(categoryId),
      },
    });
    res.status(200).json(programs);
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_GET_Programs");
  }
};

const getProgramById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const program = await prisma.program.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(program);
  } catch (error) {
    handleHttp(res, "ERROR_GET_CATEGORYS");
  }
};

const postProgram = async ({ body }: Request, res: Response) => {

    try {
        const { state } = body; //* restricciones en la DB Enum
        const result = programSchema.parse(body);
        //Datos validados por Zod
        const { name, description, image, urlYoutube, objective, syllabus, categoryId } = result; 
      
        const newProgram = await prisma.program.create({
            data: {
                name: name && name as string,
                description: description && description as string,
                image: image && image as string,
                urlYoutube: urlYoutube && urlYoutube as string,
                objective: objective && objective as string,
                syllabus: syllabus && syllabus as string,
                state: state && state as State,
                categoryId: categoryId && categoryId
            }
        });
    
        return res.status(200).json(newProgram);
      
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json(error.issues.map((issue) => ({ message: `${issue.path}: ${issue.message}` })));
      }
  
      return res.status(400).json({ error: "Bad request" });
    }
};

const updateProgram = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { state } = req.body; //* restricciones en la DB Enum
    const result = programSchema.parse(req.body);
        //Datos validados por Zod
    const { name, description, image, urlYoutube, objective, syllabus, categoryId } = result;
    const updatedProgram = await prisma.program.update({
      where: { id: Number(id) },

      data: {
        name: name && name as string,
        description: description && description as string,
        image: image && image as string,
        urlYoutube: urlYoutube && urlYoutube as string,
        objective: objective && objective as string,
        syllabus: syllabus && syllabus as string,
        state: state && state as State,
        categoryId: categoryId && categoryId
      },
    });

    return res.status(200).json(updatedProgram);
  } catch (error) {
    if (error instanceof ZodError) {
        return res
          .status(400)
          .json(error.issues.map((issue) => ({ message: `${issue.path}: ${issue.message}` })));
      }
  
      return res.status(400).json({ error: "Bad request" });
  }
};

const paginationProgram = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1; //*Número de página
    const pageSize = Number(req.query.pageSize) || 10; //* Tamaño de la página

    console.log("page: " + page);
    console.log("pageSize: " + pageSize);

    //* calcular el indice de inicio y limitar la consulta a la página
    const startIndex = (page - 1) * pageSize;

    const programs = await prisma.program.findMany({
      skip: startIndex,
      take: pageSize,
    });

    res.status(200).json(programs);
  } catch (error) {
    console.log("Error al obtener programas ", error);
    res.status(500).json({ error: "error interno del servidor" });
  }
};

export {
  getPrograms,
  getProgramById,
  postProgram,
  updateProgram,
  getProgramsByCategory,
  paginationProgram,
};
