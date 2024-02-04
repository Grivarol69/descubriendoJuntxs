'use client'
import React, { useState } from "react"
import style from './card.module.css'
import ModalProject from "../modal/Modal"

export interface Proyect {
    project: {
        nombre: string,
        descripcion: string,
        meta: string,
        comentarios: string[]
        imagen: string,
        rating: string
    }
}


const CardProyect: React.FC<Proyect> = ({ project }) => {

    const { nombre, descripcion, meta, imagen } = project
    const [modal, setModal] = useState(false)


    return (
        <>
            {modal && <div className={style.ModalView}>
                <ModalProject
                    openModal={modal}
                    closeModal={() => setModal(false)}
                    project={project}
                />
            </div>}
            <div className={style.cardContainer}>
                <div className={style.infoContainer}>
                    <h2 className={style.meta}>{meta}</h2>
                    <div className={style.titleAndDescription}>
                        <h1 className={style.title}>{nombre}</h1>
                        <div className={style.containerDesc}>
                            <p className={style.description}>{descripcion}</p>
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
                    <img className={style.image} src={imagen} alt="no se pudo" />
                </div>
            </div>
        </>
    )
}
export default CardProyect

