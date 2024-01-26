import React, { useEffect } from "react";
import "./modal.css"
import { useState } from "react"
import Link from "next/link";
import { icons } from '../Icons/Icons';

interface ModalProjectProps {
    openModal: boolean;
    closeModal: () => void;
    project: {
        nombre: string,
        descripcion: string,
        meta: string,
        comentarios: string[],
        rating: string,
        imagen: string
    }

}

const ModalProject: React.FC<ModalProjectProps> = ({ openModal, closeModal, project }) => {
    if (!openModal) return null
    const { nombre, descripcion, meta, comentarios, rating, imagen } = project;
    const [MostrarComentario, setMostrarComentario] = useState(false)
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [])
    icons.chat
    return (

        <>
            <div className="padreProyect">
                <div className="proyectLetra">
                    <div className="proyectDetailImage">
                        <img className="imageProject" src={imagen} alt="" />
                    </div>
                    <div className="infoTotalComplete">
                        <div className="closeModal">
                            <button
                                className="closeModalTransition"
                                onClick={() => closeModal()}>
                                <img src={icons.close.src} alt="" />
                            </button>
                        </div>
                        <div className="infoContainerDetail">
                            <div className="proyectDescRating">
                                <p>{rating}</p>
                                <button className="verMasInfo" onClick={() => setMostrarComentario(!MostrarComentario)}>
                                    {MostrarComentario ? "Ocultar Comentarios" : <div className="flex gap-2" style={{ color: '#7286FF' }}>
                                        Ver Comentarios
                                        <img style={{ width: '1.5rem' }} src={icons.chat.src} alt="" />
                                    </div>}
                                </button>
                            </div>
                            <div className="proyectDetailInfo">
                                <div className="containerTextProyect">
                                    {!MostrarComentario && 
                                        <>
                                            <h1 className="title">{nombre}</h1>
                                            <p className="descriptionParrafo">{descripcion}</p>
                                        </>
                                    }
                                    {MostrarComentario && (
                                        <>
                                            <h2 className="titleComments" >30 Comentarios</h2>
                                            <ul className="commentsStyle">
                                                {comentarios.map((comentario, index) => (
                                                    <div>
                                                        <div className="titleComment">
                                                            nombre user
                                                            <div className="likeDislike">
                                                                <div>Like</div>
                                                                <div>Dislike</div>
                                                            </div>
                                                        </div>
                                                        <li className="commentBox" key={index}>{comentario}</li>
                                                    </div>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                                <div className="buttonsContainer">
                                    <p className="meta">{meta}</p>
                                    <Link href="/donaciones">
                                        <button className="buttonFull"> Donar Proyecto </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ModalProject;
