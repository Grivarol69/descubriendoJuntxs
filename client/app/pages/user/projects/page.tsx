'use client'
import { useState } from "react"
import CardProyect from "@/components/CardProyecto/cardProyecto"
import SearchBar from "@/components/searchbar/SearchBar"
import style from './projects.module.css'
import FavoriteProject from "@/components/Favorite/Favorite"


interface ProyectTypes {
  id: number;
  name: string;
  description: string;
  dateIn: string;
  dateOut: string;
  urlYoutube: string;
  objective: string;
  syllabus: string;
  state: string;
  categoryId: number;
  type: string;
  image: string;
  commentary: [];

}

const UserProjectsPage = () => {

    

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