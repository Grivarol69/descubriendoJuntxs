'use client'
import { useState } from "react"
import CardProyect from "@/components/CardProyecto/cardProyecto"
import SearchBar from "@/components/searchbar/SearchBar"
import style from './projects.module.css'
import FavoriteProject from "@/components/Favorite/Favorite"


export interface ProyectTypes {
    nombre: string,
    descripcion: string,
    meta: string,
    comentarios: string[]
    imagen: string,
    rating: string
}

const UserProjectsPage = () => {

    const proyecto = [{
        nombre: 'Luis',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://www.cajasietecontunegocio.com/images/recursos-humanos/rrhh-large.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
   
    
    ]

    const [projects, setProjects] = useState<ProyectTypes[]>([...proyecto])
    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.visionContainer}>
                    <div className={style.container}>
                        <div className={style.topInfoContainer}>
                            <div className={style.titlePage}>Proyectos Favoritos</div>
                            <SearchBar
                                seteador={setProjects}
                                proyectos={proyecto}
                                />
                        </div>
                        {projects.map((proyecto) => {
                            return (
                                <>
                                <FavoriteProject  />
                                    <CardProyect
                                        project={proyecto}
                                        />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProjectsPage