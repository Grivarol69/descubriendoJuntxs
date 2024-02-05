import React, { useState } from "react";
import { Proyect } from '../CardProyecto/cardProyecto';
import { ProyectTypes } from "@/app/proyectos/page";


interface SearchBarProps {
  proyectos: ProyectTypes[];
  seteador: React.Dispatch<React.SetStateAction<ProyectTypes[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ proyectos, seteador }) => {
  const [busqueda, setBusqueda] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const query = event.target.value.toLowerCase()
    setBusqueda(query);
    seteador([...proyectos].filter((proyecto) => proyecto.nombre.toLowerCase().includes(query)));
  };
  
  return (
    <form >
      <input onChange={handleSearch}
        value={busqueda}
        type="text"
        name="searchQuery"
        placeholder="Buscar..." />
      
    </form>
  );
};

export default SearchBar;