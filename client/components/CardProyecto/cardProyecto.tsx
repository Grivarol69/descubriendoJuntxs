import React from "react"
import style from './card.module.css'

interface Proyect {
    project: {
        nombre: string,
        descripcion: string,
        meta: string,
        imagen: string
    }
}
const CardProyect: React.FC<Proyect> = ({ project }) => {

    const { nombre, descripcion, meta, imagen } = project

    return (
        <>
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
                        <button className={style.buttonText}>
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