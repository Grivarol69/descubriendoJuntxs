'use client'
import React, { useEffect, useRef, useState } from 'react';
import style from './CardServicios.module.css';
import AgendarComponente from './AgendarComponent/AgendarComponent';
import axios from 'axios';

export interface ServicioTypes {
  nombre: string;
  descripcion: string;
  comentarios: string[];
  imagen: string;
  id?: number;
  ruta?: string;
}

interface CardServiciosProps {
  servicio: ServicioTypes;
}

const CardServicios: React.FC<CardServiciosProps> = ({ servicio }) => {

  const [modal, setModal] = useState(false)
  const [coaches, setCoaches] = useState([])
  const getUser = 'https://juntxs.vercel.app/users/Coach'


  useEffect(() => {
    const getCoaches = async () => {
      try {
        const getUserCoaches: any = (await axios(getUser)).data
        if (getUserCoaches) {
          setCoaches(getUserCoaches)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCoaches()

  }, [])

  return (
    <div>
        <AgendarComponente
          modal={modal}
          closeModal={() => setModal(false)}
          coaches={coaches}
        />
      <div className={style.cardContainer} key={servicio.nombre}>
        <div className={style.infoContainer}>
          <div className={style.titleAndDescription}>
            <h1 className={style.title}>{servicio.nombre}</h1>
            <div className={style.containerDesc}>
              <p className={style.description}>{servicio.descripcion}</p>
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button onClick={() => setModal(true)} className={style.buttonFull}>Agendar</button>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img className={style.image} src={servicio.imagen} alt="no se pudo" />
        </div>
      </div>
    </div>
  );
};

export default CardServicios;