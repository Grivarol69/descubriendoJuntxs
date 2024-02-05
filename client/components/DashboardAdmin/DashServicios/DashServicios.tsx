import React from 'react';
import Link from 'next/link';
import style from './DashServicios.module.css'

export interface Servicio {
  nombre: string;
  descripcion: string;
  imagen: string;
  comentarios: string[];
}

interface DashServiciosProps {
  servicios: Servicio[];
}

const DashServicios: React.FC<DashServiciosProps> = ({ servicios }) => {
  return (
    <div className={style.dashboardContainer}>
      <div className={style.servicesContainer}>
        <ul>
          {servicios.map((servicio, index) => (
            <li key={index}>
              <Link href={`/admin/services/${servicio.nombre.toLowerCase()}`}>
                {servicio.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashServicios;