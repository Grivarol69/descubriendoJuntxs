
import React, { useEffect } from "react";
import "./modal.css"
import { useState } from "react"

import Link from "next/link";
import { icons } from '../Icons/Icons';

interface ModalProjectProps {
    openModal: boolean;
    closeModal: () => void;
    project: {
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
        commentary: []
    }
}

const ModalProject: React.FC<ModalProjectProps> = ({ openModal, closeModal, project }) => {
    if (!openModal) return null
    const { name, description, image, objective, commentary } = project;
    const [MostrarComentario, setMostrarComentario] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [])
    if (!openModal) return null

    return (

        <>
            <div className="padreProyect">
                <div className="proyectLetra">
                    <div className="proyectDetailImage">
                        <img className="imageProject" src={image} alt="" />
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
                                            <h1 className="title">{name}</h1>
                                            <p className="descriptionParrafo">{description}</p>
                                        </>
                                    }
                                    {MostrarComentario && (
                                        <>
                                            <h2 className="titleComments" >30 Comentarios</h2>
                                            <ul className="commentsStyle">
                                                {commentary && commentary.map((comentario, index) => (
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
                                    <p className="meta">{objective}</p>
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
