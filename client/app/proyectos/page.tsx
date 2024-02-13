import style from './proyectos.module.css'
import axios, { AxiosResponse } from "axios";
import AllCards from "@/components/allCardsComponent/allCards";


export interface ProyectTypes {
    id: number;
    nombre: string,
    descripcion: string,
    amount: number,
    objetiuve: string,
    syllabus: string,
    state: string,
    categoryId: number,
    type: string,
    donation: [],
    commentary: [],
    favorite: {
        userId: number;
        programId: number
        },
    }


const Proyectos = async () => {
    const urlGlobal = 'https://juntxs.vercel.app/'
    const proyectsFetch: any = (await axios.get(`${urlGlobal}programs/pagination`)).data
    return (
        <>
            <div className={style.backgroundProyecto}>
                <AllCards
                    projects={proyectsFetch}
                />
            </div>
        </>
    )
}
export default Proyectos;

