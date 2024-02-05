'use client'
import Filter from "@/components/filters/Filter";
import CardProyect from "@/components/CardProyecto/cardProyecto";
import SearchBar from "@/components/searchbar/SearchBar";
import { useState } from "react";
import { Proyect } from '../../components/CardProyecto/cardProyecto';
import style from './proyectos.module.css'


export interface ProyectTypes {
    nombre: string,
    descripcion: string,
    meta: string,
    comentarios: string[]
    imagen: string,
    rating: string
}

const Proyectos: React.FC = () => {

    const proyecto = [{
        nombre: 'Isa',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://thumbs.dreamstime.com/b/el-conejo-de-conejito-pascua-lanza-para-arriba-d%C3%B3lares-celebra-persona-afortunada-rica-del-hombre-debajo-la-lluvia-cientos-147702809.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
    {
        nombre: 'Brigitte',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://s1.abcstatics.com/media/bienestar/2021/02/04/risa-k60E--1248x698@abc.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
    {
        nombre: 'Luci',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://previews.123rf.com/images/leventegyori/leventegyori1506/leventegyori150600375/41665806-retrato-mayor-de-la-se%C3%B1ora.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    }
    ]

    const [proyectosFinales, setProyectosFinales] = useState<ProyectTypes[]>([...proyecto])


    const handleFilter = (filtro: any) => {

        setProyectosFinales(proyecto.filter(proyecto => proyecto.nombre.includes(filtro)));
    };
    return (
        <>
            <div className={style.backgroundProyecto}>
                <SearchBar
                    seteador={setProyectosFinales}
                    proyectos={proyecto}
                />
                <Filter onFilter={handleFilter} ></Filter>
                {proyectosFinales.map((proyecto) => {
                    return (
                        <>
                            <CardProyect
                                key={proyecto.nombre}
                                project={proyecto}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Proyectos;

