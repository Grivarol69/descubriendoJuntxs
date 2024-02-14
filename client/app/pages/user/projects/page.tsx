'use client'

import { useEffect, useState } from "react"
import CardProyect from "@/components/CardProyecto/cardProyecto"
import SearchBar from "@/components/searchbar/SearchBar"
import style from './projects.module.css'
import axios from "axios"
import { useAuthContext } from "@/app/contexto/AuthContext"


export interface ProyectTypes {
    id: number,
    name: string,
    description: string,
    dateIn: string,
    dateOut: string,
    urlYoutube: string,
    objective: string,
    syllabus: string,
    state: string,
    categoryId: number,
    type: string,
    image: string,
    commentary: [],
}

const UserProjectsPage = () => {

    const { infoUserGlobal } = useAuthContext()
    const [projects, setProjects] = useState<ProyectTypes[]>([]) 
    const infoParseada = JSON.parse(infoUserGlobal ?? '')

    const fetcheoFavoritos = async () => {
        try {
            const userId: number = infoParseada.id ?? ''
            
            const projectsFetch: ProyectTypes[] = (await axios(`https://juntxs.vercel.app/users/favorites/${userId}`)).data
            if(projectsFetch) return setProjects(projectsFetch)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetcheoFavoritos()
    }, [])

    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.visionContainer}>
                    <div className={style.container}>
                        <div className={style.topInfoContainer}>
                            <div className={style.titlePage}>Proyectos Favoritos</div>
                        </div>
                        {projects?.map((proyecto) => {
                            return (
                                <>
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