'use client'

import React from 'react';
import style from './CardServicios.module.css';
import Link from 'next/link';

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  ruta: string;
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
            <Link href={servicio.ruta}>
                <button className={style.buttonFull}>
                  Agendar
                </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardServicios;