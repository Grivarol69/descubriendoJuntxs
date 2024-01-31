import { Request, Response } from "express"
// import { PrismaClient } from '@prisma/client';
import admin from "../../firebase/firebase-config"

// const prisma = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
    try {
        const { token } = req.body

        const decodedToken = await admin.auth().verifyIdToken(token);

        if (decodedToken) {
   
            return res.status(200).json({
                status: true,
                decodedToken
            })
        }
        
        return res.status(200).json({
            status: false,
            messagE: 'No se pudo'
        })

    } catch (error: any) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}


export {
    createUser
}
