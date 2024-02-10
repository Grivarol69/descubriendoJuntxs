'use client'
import React, { useState } from "react"
import style from './card.module.css'
import ModalProject from "../modal/Modal"
import { useSocketContext } from "@/app/contexto/SocketContext";

export interface Proyect {
    project: {
        id: number,
        name: string,
        description: string,
        amount: number,
        objective: string,
        syllabus: string,
        state: string,
        categoryId: number,
        type: string,
        image: string,
        donation: [],
        commentary: [],
        favorite: []
    }
}


const CardProyect: React.FC<Proyect> = ({ project }) => {
    const { socket } = useSocketContext()
    const { name, description, image, objective} = project
    const [modal, setModal] = useState(false)


    return (
        <>
            {modal && <div className={style.ModalView}>
                <ModalProject
                    openModal={modal}
                    closeModal={() => setModal(false)}
                    project={project}
                    socket={socket}
                />
            </div>}
            <div className={style.cardContainer}>
                <div className={style.infoContainer}>
                    <h2 className={style.meta}>{objective}</h2>
                    <div className={style.titleAndDescription}>
                        <h1 className={style.title}>{name}</h1>
                        <div className={style.containerDesc}>
                            <p className={style.description}>{description}</p>
                        </div>
                    </div>
                    <div className={style.buttonContainer}>
                        <button onClick={() =>
                            setModal(true)
                        } className={style.buttonText}>
                            Ver Proyecto
                        </button>
                        <button className={style.buttonFull}>
                            Donar Proyecto
                        </button>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <img className={style.image} src={image} alt="no se pudo" />
                </div>
            </div>
        </>
    )
}
export default CardProyect

