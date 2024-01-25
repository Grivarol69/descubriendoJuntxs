import React, { useState } from "react";

interface SearchBarProps {
    proyectos:  {nombre: string}[];
    seteador: React.Dispatch<React.SetStateAction<{ nombre: string; }[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ proyectos, seteador }) => {
    const [busqueda, setBusqueda] = useState("")
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const query = formData.get('searchQuery') as string;
     seteador([...proyectos].filter((proyecto)=>proyecto.nombre.includes(busqueda)));
    };
const handleChange = (event:any) => {
    setBusqueda(event.target.value)
}
    return (
      <form onSubmit={handleSearch}>
        <input onChange={handleChange} 
        value={busqueda}
        type="text" 
        name="searchQuery" 
        placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
    );
  };
  
  export default SearchBar;