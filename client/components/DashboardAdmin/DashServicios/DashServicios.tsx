import React from 'react';
import Link from 'next/link';
import style from './DashServicios.module.css';

export interface Servicio {
  nombre: string;
  descripcion: string;
  comentarios: string[];
  imagen: string;
  id?: number;
  ruta?: string;
}

interface DashServiciosProps {
  servicios: Servicio[];
  openModal: (servicio: Servicio) => void;
}

const DashServicios: React.FC<DashServiciosProps> = ({ servicios, openModal }) => {
  return (
    <div className={style.dashboardContainer}>
      <div className={style.servicesContainer}>
        <ul>
          {servicios.map((servicio, index) => (
            <li key={index}>
              <button onClick={() => openModal(servicio)}>
                {servicio.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashServicios;