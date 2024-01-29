'use client'

import React from 'react';
import CardServicios from '@/components/CardServicios/CardServicios';

const ServiciosPage: React.FC = () => {
  const serviciosData = [
    {
      id: 1,
      nombre: 'Coaching',
      descripcion: 'Servicio de coaching personalizado para alcanzar tus metas.',
      ruta: '/servicios/coaching/page', 
    },
    {
      id: 2,
      nombre: 'Talleres',
      descripcion: 'Participa en nuestros talleres para adquirir nuevas habilidades.',
      ruta: '/servicios/talleres/page', 
    },
    {
      id: 3,
      nombre: 'Retiros',
      descripcion: 'Experimenta la tranquilidad en nuestros retiros.',
      ruta: '/servicios/retiros/page', 
    }
  ];

  return (
    <div>
      <h1>Servicios</h1>
      <CardServicios servicios={serviciosData} />
    </div>
  );
};

export default ServiciosPage;
