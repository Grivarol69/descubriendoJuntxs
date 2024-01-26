'use client'

import React from 'react';
import CardServicios from '@/components/CardServicios/CardServicios';

const ServiciosPage: React.FC = () => {
  const serviciosData = [
    {
      id: 1,
      nombre: 'Coaching',
      descripcion: 'Servicio de coaching personalizado para alcanzar tus metas.'
    },
    {
      id: 2,
      nombre: 'Talleres',
      descripcion: 'Participa en nuestros talleres para adquirir nuevas habilidades.'
    },
    {
      id: 3,
      nombre: 'Retiros',
      descripcion: 'Experimenta la tranquilidad en nuestros retiros.'
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
