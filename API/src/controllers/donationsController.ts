import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getDonations = async (_req: Request, res: Response) => {
    try {
        const donations = await prisma.donation.findMany();
        res.status(200).json(donations);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_DONATIONS')
    }
}

const getDonationsByProgram = async (req: Request, res: Response) => {
    const { programId } = req.query;

    try {
        const donation = await prisma.donation.findMany({
            where: {
                programId: Number(programId)
            }
        });

        res.status(200).json(donation);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_DonationsByProgram')
    }
}

const getDonationsByUser = async (req: Request, res: Response) => {
    const { userId } = req.query;

    try {
        const donation = await prisma.donation.findMany({
            where: {
                userId: Number(userId)
            }
        });

        res.status(200).json(donation);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_DonationsByUser')
    }
}

const getDonationsByUserAndProgram = async (req: Request, res: Response) => {
    const { userId, programId } = req.query;

    try {
        const donation = await prisma.donation.findMany({
            where: {
                userId: Number(userId),
                programId: Number(programId)
            }
        });
        res.status(200).json(donation);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_DonationsByUserAndProgram')
    }
}

const postDonation = async (req: Request, res: Response) => {

    const { programId, userId, amount, date, type, frequency, message, contact_phone, contact_email, state, transactionId } = req.body;

    try {
        const newDonation = await prisma.donation.create({
            data: {
                programId: programId && programId,
                transactionId: transactionId ? Number(transactionId) : 0,
                userId: userId && userId,
                amount: amount && amount as number,
                date: date && date as Date,
                type: type && type as string,
                frequency: frequency && frequency as string,
                message: message && message as string,
                contact_phone: contact_phone && contact_phone as string,
                contact_email: contact_email && contact_email as string,
                state: state && state as string
            }
        });


        res.status(200).json(newDonation);

    } catch (error) {
        handleHttp(res, 'ERROR_POST_DONATION')
    }
}

export {
    getDonations,
    getDonationsByProgram,
    getDonationsByUser,
    getDonationsByUserAndProgram,
    postDonation
}