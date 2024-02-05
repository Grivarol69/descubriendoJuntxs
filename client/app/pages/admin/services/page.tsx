"use client"
import React from 'react';
import DashServicios, { Servicio } from '../../../../components/DashboardAdmin/DashServicios/DashServicios';
import style from './ServiciosPage.module.css'; 

const ServiciosPage: React.FC = () => {
  const talleres: Servicio[] = [
    {
      nombre: 'Taller A',
      descripcion: 'Descripción del Taller A',
      imagen: 'URL de la imagen del Taller A',
      comentarios: ['Comentario Taller A'],
    },
    {
      nombre: 'Taller B',
      descripcion: 'Descripción del Taller B',
      imagen: 'URL de la imagen del Taller B',
      comentarios: ['Comentario Taller B'],
    },
  ];

  const retiros: Servicio[] = [
    {
      nombre: 'Retiro X',
      descripcion: 'Descripción del Retiro X',
      imagen: 'URL de la imagen del Retiro X',
      comentarios: ['Comentario Retiro X'],
    },
    {
      nombre: 'Retiro Y',
      descripcion: 'Descripción del Retiro Y',
      imagen: 'URL de la imagen del Retiro Y',
      comentarios: ['Comentario Retiro Y'],
    },
  ];

  const coaching: Servicio = {
    nombre: 'Coaching',
    descripcion: 'Descripción del servicio de Coaching Personalizado',
    imagen: 'URL de la imagen del coaching',
    comentarios: ['Comentario 1', 'Comentario 2'],
  };

  return (
    <div>
      <h1>Página de Servicios</h1>
      <DashServicios
        servicios={[coaching, ...talleres, ...retiros]}
      />
    </div>
  );
};

export default ServiciosPage;