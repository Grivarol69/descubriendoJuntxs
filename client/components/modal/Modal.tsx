import React from "react";
import "./modal.css"
import {useState} from "react"
import Link from "next/link";

interface ModalProjectProps {
    openModal: boolean;
    closeModal: () => void;
    project: {
        nombre: string,
        descripcion: string,
        meta: string,
        comentarios: string[],
        rating: string
    }

}

const ModalProject: React.FC<ModalProjectProps> = ({openModal, closeModal, project}) => {
    if(!openModal) return null
    const {nombre, descripcion, meta, comentarios, rating} = project;
    const [MostrarComentario, setMostrarComentario] = useState(false)
   
    
    return (
        
        <>

        <div className="padreProyect">

        <div className="proyectLetra">
            <button onClick={() => closeModal()}>X</button>
            <button onClick={() => setMostrarComentario(!MostrarComentario)}>
            {MostrarComentario ? "Ocultar Comentarios" : "Ver Comentarios"}
            </button>
                
            <div className="proyectDetailImage">
            </div>
            <div className="proyectDetailInfo"> 
            <p>{nombre}</p>
            <p>{descripcion} </p>
            <p>{meta} </p>
            <p>{rating}</p>
        
            {MostrarComentario && (
                <>
                <h2>Comentarios:</h2>
                <ul>
                  {comentarios.map((comentario, index) => (
                      <li key={index}>{comentario}</li>
                      ))}
                </ul>
              </>
            )}
            <Link href="/donaciones">
                donar
            </Link>

            </div>

        </div>

        </div>
        </>


    )
}
export default ModalProject;
