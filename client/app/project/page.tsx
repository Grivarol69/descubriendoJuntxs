"use client"
import ModalProject from "@/componenst/modal";
import { useState } from "react";


const Project = () => {
    const proyecto = {
        nombre: "luis",
        descripcion: "soy el lider de programacion de la ong",
         meta: "vamos a llegar a 500k",
          comentarios: ["holii"],
           rating: "5"
        
    }
    const [modal, setModal] = useState(false)
    
    return (
        
        <>
       
        <ModalProject
        openModal={modal}
        closeModal={()=> setModal(false)}
        project={proyecto}
        />
        <button onClick={() => setModal(true)} >Abrir modal</button>


        </>
    )
}
      
        


export default Project;