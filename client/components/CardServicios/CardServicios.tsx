import React from 'react';
import style from './CardServicios.module.css';

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
}

interface CardServiciosProps {
  servicios: Servicio[];
}

const CardServicios: React.FC<CardServiciosProps> = ({ servicios }) => {
  return (
    <div className={style.cardContainer}>
      {servicios.map((servicio) => (
        <div key={servicio.id} className={style.card}>
          <h3>{servicio.nombre}</h3>
          <p>{servicio.descripcion}</p>
          <div className={style.buttonContainer}>
            <button className={style.buttonText}>
              Realizar Donación
            </button>
            <button className={style.buttonFull}>
              Agendar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardServicios;