'use client'
import SearchBar from "@/components/searchbar/SearchBar"
import { useState } from "react"
import CardProyect from "@/components/CardProyecto/cardProyecto"
import CreateProject from "@/components/AdminDashboard/CreateProject/CreateProject"
import style from './adminProjects.module.css'
import Link from "next/link"
import axios from 'axios'
import ListaProyectos from "@/components/ListaProyectosAdmin/ListaProyectos"



export interface ProyectTypes {
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
    favorite: []
}

const DashBoardProjects = () => {

    // const URL_BASE = 'https://juntxs.vercel.app/'
    // const response = (await axios.get(`${URL_BASE}programs/pagination`)).data
    const [modal, setModal] = useState(false)

    return (
        <>
            <CreateProject
                modal={modal}
                closeModal={() => setModal(false)}
            />
            <div className={style.container}>
                <h1>Proyectos</h1>
                <div>
                    {/* <ListaProyectos /> */}
                </div>
                <button className={style.buttonFull} onClick={() => setModal(true)}>Crear Proyecto +</button>
            </div>
        </>
    )

}

export default DashBoardProjects