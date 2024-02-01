import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client';
import admin from "../../firebase/firebase-config"

const prisma = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
    try {
        const { token, name } = req.body
        console.log(token, name);
        
        const decodedToken = await admin.auth().verifyIdToken(token);

        if (decodedToken) {
            const email = decodedToken.email || 'null'
            const createUser = await prisma.user.create({
                data: {
                    email: email,
                    name: name
                }
            })
            if (createUser) {
                return res.status(200).json({
                    status: true,
                    createUser
                })
            } else {
                return res.status(400).json({
                    status: false,
                    message: 'no se pudo crear el usuario'
                })
            }
        } else {
            return res.status(400).json({
                status: false,
                messagE: 'No se pudo decodificar el email'
            })
        }
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
