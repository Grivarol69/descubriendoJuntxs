'use client'

import React, { useState } from 'react';
import CardServicios, { ServicioTypes } from '@/components/CardServicios/CardServicios';
import style from './servicios.module.css';
import Filter from '@/components/filters/Filter';

const ServiciosPage: React.FC = () => {
  const serviciosData: ServicioTypes[] = [
    {
      id: 1,
      nombre: 'Coaching',
      descripcion: 'Servicio de coaching personalizado para alcanzar tus metas.',
      ruta: '/servicios/coaching',
      comentarios: [],
      imagen: '',
    },
    {
      id: 2,
      nombre: 'Talleres',
      descripcion: 'Participa en nuestros talleres para adquirir nuevas habilidades.',
      ruta: '/servicios/talleres',
      comentarios: [],
      imagen: '',
    },
    {
      id: 3,
      nombre: 'Retiros',
      descripcion: 'Experimenta la tranquilidad en nuestros retiros.',
      ruta: '/servicios/retiros',
      comentarios: [],
      imagen: '',
    }
  ];

  const [serviciosFinales, setServiciosFinales] = useState<ServicioTypes[]>(serviciosData);

  const handleFilter = (filtro: string) => {
    setServiciosFinales(serviciosData.filter(servicio => servicio.nombre.includes(filtro)));
  };

  return (
    <div className={style.backgroundServicio}>
      <Filter onFilter={handleFilter}></Filter>
      {serviciosFinales.map((servicio) => (
        <CardServicios key={servicio.nombre} servicio={servicio} />
      ))}
    </div>
  );
};

export default ServiciosPage;