"use client"
import SearchBar from "@/components/searchbar/searchBar";
import ModalProject from "../../components/modal/modal";
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

    const proyectoArcodeado = [{nombre: "ndjkfhdfjkgb"},{nombre: "luciana"}, {nombre: "isabella"}, {nombre:"luis"}, {nombre: "brigitte"}]
    const [proyectosFinales, setProyectosFinales] = useState<{ nombre: string; }[]>([...proyectoArcodeado])
   
   

    return (
        
        <>
        <div>{proyectosFinales.map((proyecto)=>{
            return (
                <div>{proyecto.nombre}</div>
            )
        } )}</div>
        <SearchBar 
        seteador={setProyectosFinales}
        proyectos={proyectoArcodeado} 
        />
        <ModalProject
        openModal={modal}
        closeModal={()=> setModal(false)}
        project={proyecto}
        />
        <button onClick={() => setModal(true)} >Detalle</button>


        </>
    )
}
      
        


export default Project;