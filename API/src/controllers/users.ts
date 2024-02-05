import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { PrismaClient } from "@prisma/client"
import admin from "../../firebase/firebase-config"

const prisma = new PrismaClient();


const postUser = async ({ body }:Request, res:Response)=>{

    try {
        const { email, name, surName, identification, phone, dateIn, dateOut, description, linkedin, languaje, position, role} = body;

        console.log(email);
        
        if (!email || !name) {
            handleHttp(res, 'EMAIL_AND_NAME_REQUIRED');
            return;
        }
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                surName: surName,
                identification: identification,
                phone: phone,
                dateIn: dateIn,
                dateOut: dateOut,
                description: description,
                linkedin: linkedin,
                languaje: languaje,
                position: position,
                role: role
            }
        })
        res.status(200).json(newUser);
    } catch (error:any) {
        //console.error('Error creating user:', error);
        //handleHttp(res, 'ERROR_POST_USER')
        res.status(500).json(error.message);
    }
}

const updateUserById = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId); // Obtener el ID de la solicitud
    const userData = req.body; // Datos actualizados del usuario

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId }, // Filtrar por ID
            data: userData // Datos actualizados
        });
        res.status(200).json(updatedUser); // Devolver el usuario modificado
    } catch (error) {
        console.error('Error updating user by ID:', error);
        handleHttp(res, 'ERROR_UPDATE_USER');
    }
}
const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const { token } = req.body
        const decodedToken = await admin.auth().verifyIdToken(token);
        if (decodedToken) {
            const email = decodedToken.email
            const user = await prisma.user.findUnique({
                where: { email: email } // Filtrar por ID
            });
            res.status(200).json({
                status: true,
                user}); // Devolver el usuario
        }
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        handleHttp(res, 'ERROR_FETCH_USER_BY_ID');
    }
}
const getUsersByRole = async (req: Request, res: Response) => {
    const role = req.params.role; // Obtener el rol de la solicitud
    try {
        // Obtener la lista de usuarios filtrados por rol y estado "Activo"
        const users = await prisma.user.findMany({
            where: {
                role: role === 'Coach' ? 'Coach' : 'Usuario', // Filtrar por el rol especificado
                AND: {
                    state: 'Activo' // Filtrar por el estado "Activo"
                }
            }
        });
        res.status(200).json(users); // Devolver la lista de usuarios
    } catch (error) {
        console.error('Error fetching users by role and status:', error);
        handleHttp(res, 'ERROR_FETCH_USERS_BY_ROLE_AND_STATUS');
    }
}


const getAllUsers = async ( req: Request, res: Response) => {
    try {
        // Obtener todos los usuarios
        const {usersReq} = req.body
        if (usersReq) {
            const users = await prisma.user.findMany();
            return res.status(200).json(users); // Devolver la lista de usuarios
        } return res.status(400)

    } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
        return handleHttp(res, 'ERROR_GET_ALL_USERS');
    }
}
export {
    postUser,
    updateUserById,
    getUsersByRole,
    getAllUsers,
    getUserByEmail
}