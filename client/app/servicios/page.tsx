'use client'

import React from 'react';
import CardServicios from '@/components/CardServicios/CardServicios';
import style from './servicios.module.css'

const ServiciosPage: React.FC = () => {
  const serviciosData = [
    {
      id: 1,
      nombre: 'Coaching',
      descripcion: 'Servicio de coaching personalizado para alcanzar tus metas.',
      ruta: '/servicios/coaching', 
    },
    {
      id: 2,
      nombre: 'Talleres',
      descripcion: 'Participa en nuestros talleres para adquirir nuevas habilidades.',
      ruta: '/servicios/talleres', 
    },
    {
      id: 3,
      nombre: 'Retiros',
      descripcion: 'Experimenta la tranquilidad en nuestros retiros.',
      ruta: '/servicios/retiros' 
    }
  ];

  return (
    <div className={style.backgroundServicios}>
      <CardServicios servicios={serviciosData} />
    </div>
  );
};

export default ServiciosPage;