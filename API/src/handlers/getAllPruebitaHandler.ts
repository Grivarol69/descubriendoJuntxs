 import getPruebita from "../controllers/getPruebita";

const getAllPruebitaHandler = async (req: Request, res: Response) => {
    try {
        const pruebita = await getPruebita();
        res.status(200).json(pruebita);
    } catch (error) {
        console.error(error);
    }
}
export default getAllPruebitaHandler;