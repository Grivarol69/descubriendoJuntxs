import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PrismaClient, State } from "@prisma/client";

const prisma = new PrismaClient();

const getCommentaryByProgramAndUser = async (req: Request, res: Response) => {
  // const { programId, userEmail } = req.params;
  const { programId, userEmail } = req.query;

    try {

      const user = await prisma.user.findUnique({
        where: {
          email: userEmail as string,
        },
      });
  
      if (!user) {
        return handleHttp(res, "ERROR_USER_NOT_FOUND");
      }

      const commentary = await prisma.commentary.findMany({
        where: {
          programId: Number(programId),
          userId: Number(user.id),
        },
      });

      res.status(200).json(commentary);

    } catch (error) {
      handleHttp(res, "ERROR_GET_COMMENTARIES_BY_PROMGRAM_AND_USER");
    }
};


const getCommentaryByProgram = async (req: Request, res: Response) => {
const { programId } = req.params;

  try {

    const commentaries = await prisma.commentary.findMany({
      where: {
        programId: Number(programId),
      },
    });

    res.status(200).json(commentaries);

  } catch (error) {
    handleHttp(res, "ERROR_GET_COMMENTARIES_BY_PROMGRAM");
  }
};


const getCommentaryByUser = async (req: Request, res: Response) => {
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

    const commentaries = await prisma.commentary.findMany({
      where: {
        userId: Number(user.id),
      },
    });

    res.status(200).json(commentaries);

  } catch (error) {
    handleHttp(res, "ERROR_GET_COMMENTARIES_BY_PROMGRAM");
  }
};
  
const postCommentary = async (req: Request, res: Response) => {
  const {
    programId,
    userEmail,
    commentary
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

    const newCommentary = await prisma.commentary.create({
      data: {
        programId: programId && (programId as number),
        userId: user.id as number,
        commentary: commentary && (commentary as string),
        state: "Activo"
      }
    })

    res.status(200).json(newCommentary);
  } catch (error) {
    handleHttp(res, "ERROR_POST_COMMENTARY");
  }
};

const putCommentary = async (req: Request, res: Response) => {
  const { programId, userEmail } = req.query;
  
  const {
    commentary,
    state
  } = req.body;

  try {

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail as string,
      },
    });

    if (!user) {
      return handleHttp(res, "ERROR_USER_NOT_FOUND");
    }

    const updatedCommentary = await prisma.commentary.update({
      where: {
        programId_userId: {
          programId: Number(programId),
          userId: user.id,
        },
      },
      data: {
        commentary: commentary && (commentary as string),
        state: state && (state as State)
      },
    })

    res.status(200).json(updatedCommentary);
  } catch (error) {
    handleHttp(res, "ERROR_PUT_COMMENTARY");
  }
};

const deleteCommentary = async (req:Request, res:Response) => {
  const { programId, userEmail } = req.query;

  // console.log('Route: ',req.route);
  // console.log(programId, userId)

  try {

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail as string, 
      },
    });

    if (!user) {
      return handleHttp(res, "ERROR_USER_NOT_FOUND");
    }
      
    const commentary = await prisma.commentary.delete({
        where:{
            programId_userId:{
                programId: Number(programId),
                userId: Number(user.id)
            }
        }
    })
    res.status(200).json(commentary)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_COMMENTARY')
  }
}


export {
  getCommentaryByProgramAndUser,
  getCommentaryByProgram,
  getCommentaryByUser,
  postCommentary,
  putCommentary,
  deleteCommentary
};
