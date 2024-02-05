import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getFavoritesByProgramAndUser = async (req: Request, res: Response) => {
  const { programId, userId } = req.params;

    try {
      const participants = await prisma.favorite.findMany({
        where: {
          programId: Number(programId),
          userId: Number(userId),
        },
      });

      res.status(200).json(participants);

    } catch (error) {
      handleHttp(res, "ERROR_GET_FAVORITES_BY_SERVICE");
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
  postFavorite,
  deleteFavorite
};
