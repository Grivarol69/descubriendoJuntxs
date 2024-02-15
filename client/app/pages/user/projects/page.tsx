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
    
    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.visionContainer}>
                    <div className={style.container}>
                        <div className={style.topInfoContainer}>
                            <div className={style.titlePage}>Proyectos Favoritos</div>
                            {/* <SearchBar
                                seteador={setProjects}
                                proyectos={proyecto}
                                /> */}
                        </div>
                        <FavoriteProject  />
                        {/* {projects.map((proyecto) => {
                            return (
                                <>
                                    <CardProyect
                                        project={proyecto}
                                        />
                                </>
                            )
                        })} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProjectsPage