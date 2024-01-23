import React from "react";
import "../componenst/modal.css"
import {useState} from "react"


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
    console.log(comentarios , "comentario");
    
    return (
        
        <>
        <div className="padreproyect">

        <div className="proyectletra">

            <div className="proyect-detail-image">
                
            </div>
            <div className="proyect-detail-info"> 
            <p>{nombre}</p>
            <p>{descripcion} </p>
            <p>{meta} </p>
            <p>{rating}</p>
        <h1>este mi modal</h1>
            </div>
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
            <button onClick={() => closeModal()}>cerrar modal</button>
            <button onClick={() => setMostrarComentario(!MostrarComentario)}>
            {MostrarComentario ? "Ocultar Comentarios" : "Mostrar Comentarios"}
            </button>
        </div>

        </div>
        </>


    )
}
export default ModalProject;
