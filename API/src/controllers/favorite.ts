import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const countFavoritesByProgram = async (req: Request, res: Response) => {
  const { programId } = req.params;
  console.log('count: ', programId);

    try {
      const countFavorites = await prisma.favorite.count({
        where: {
          programId: Number(programId),
        },
      });

      res.status(200).json({ programId: programId, count: countFavorites });

    } catch (error) {
      handleHttp(res, "ERROR_GET_FAVORITES_BY_SERVICE");
    }
  };

const getFavoritesByProgramAndUser = async (req: Request, res: Response) => {
  const { programId, userId } = req.params;

    try {
      const favorites = await prisma.favorite.findMany({
        where: {
          programId: Number(programId),
          userId: Number(userId),
        },
      });

      res.status(200).json(favorites);

    } catch (error) {
      handleHttp(res, "ERROR_GET_FAVORITES_BY_PROMGRAM_AND_USER");
    }
  };

  
const postFavorite = async (req: Request, res: Response) => {
  const {
    programId,
    userId,
    
  } = req.body;

  try {
    const newPayment = await prisma.favorite.create({
      data: {
        programId: programId && (programId as number),
        userId: userId && (userId as number),
        
      }
    })

    res.status(200).json(newPayment);
  } catch (error) {
    handleHttp(res, "ERROR_POST_FAVORITE");
  }
};

const deleteFavorite = async (req:Request, res:Response) => {
  const { programId, userId } = req.params;

  console.log('Route: ',req.route);
  console.log(programId, userId)

  try {
      
      const favorite = await prisma.favorite.delete({
          where:{
              programId_userId:{
                  programId: Number(programId),
                  userId: Number(userId)
              }
          }
      })
      res.status(200).json(favorite)
  } catch (error) {
      handleHttp(res, 'ERROR_DELETE_FAVORITE')
  }
}


export {
  getFavoritesByProgramAndUser,
  countFavoritesByProgram,
  postFavorite,
  deleteFavorite
};
