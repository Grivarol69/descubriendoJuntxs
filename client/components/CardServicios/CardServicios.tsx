import React from 'react';
import style from './CardServicios.module.css';

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
  return (
    <div className={style.cardContainer} key={servicio.nombre}>
      <div className={style.infoContainer}>
        <div className={style.titleAndDescription}>
          <h1 className={style.title}>{servicio.nombre}</h1>
          <div className={style.containerDesc}>
            <p className={style.description}>{servicio.descripcion}</p>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button className={style.buttonText}>Realizar Donacion</button>
          <button className={style.buttonFull}>Agendar</button>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img className={style.image} src={servicio.imagen} alt="no se pudo" />
      </div>
    </div>
  );
};

export default CardServicios;