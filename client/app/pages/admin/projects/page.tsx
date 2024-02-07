'use client'
import SearchBar from "@/components/searchbar/SearchBar"
import { useState } from "react"
import CardProyect from "@/components/CardProyecto/cardProyecto"
import CreateProject from "@/components/AdminDashboard/CreateProject/CreateProject"
import style from './adminProjects.module.css'
import Link from "next/link"


export interface ProyectTypes {
    nombre: string,
    descripcion: string,
    meta: string,
    comentarios: string[]
    imagen: string,
    rating: string
}

const DashBoardProjects = () => {

    const proyecto = [{
        nombre: 'Luis',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://www.cajasietecontunegocio.com/images/recursos-humanos/rrhh-large.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
    {
        nombre: 'Brigitte',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://s1.abcstatics.com/media/bienestar/2021/02/04/risa-k60E--1248x698@abc.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
    {
        nombre: 'Luci',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://previews.123rf.com/images/leventegyori/leventegyori1506/leventegyori150600375/41665806-retrato-mayor-de-la-se%C3%B1ora.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    }
    ]

    const [projects, setProjects] = useState<ProyectTypes[]>([...proyecto])

    const [modal, setModal] = useState(false)

    return (
        <>
            <CreateProject
                modal={modal}
                closeModal={() => setModal(false)}
            />
            <div className={style.container}>
                <h1>Proyectos</h1>
                <SearchBar
                    seteador={setProjects}
                    proyectos={proyecto}
                />
                <div>
                    {projects.map((proyecto) => {
                        return (
                            <>
                                <CardProyect
                                    project={proyecto}
                                />
                            </>
                        )
                    })}
                </div>
                <Link href="/admin/projects/create" />
                <button className={style.buttonFull} onClick={() => setModal(true)}>Crear Proyecto +</button>
            </div>
        </>
    )

}

export default DashBoardProjects