'use client'
import React, { useState } from 'react';
import DashServicios, { Servicio } from '../../../../components/DashboardAdmin/DashServicios/DashServicios';
import ModalServicio from '../../../../components/CardServicios/Modal/ModalServicio';
import style from './ServiciosPage.module.css';
import Link from 'next/link';

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

  const [selectedService, setSelectedService] = useState<Servicio | null>(null);

  const openModal = (servicio: Servicio) => {
    setSelectedService(servicio);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      <DashServicios servicios={talleres} openModal={openModal} />
      <div className={style.container}>
        {/* Render talleres */}
        {talleres.map((servicio, index) => (
          <DashServicios key={index} servicios={[servicio]} openModal={() => openModal(servicio)} />
        ))}

        {/* Render retiros */}
        {retiros.map((servicio, index) => (
          <DashServicios key={index} servicios={[servicio]} openModal={() => openModal(servicio)} />
        ))}

        {/* Render coaching */}
        <DashServicios servicios={[coaching]} openModal={() => openModal(coaching)} />

        <Link href="/admin/services">
          <button className={style.buttonFull} onClick={() => setModal(true)}>
            Open Modal
          </button>
        </Link>
      </div>

      {/* Render ModalServicio with selectedService if it exists */}
      {selectedService && (
        <ModalServicio openModal={modal} closeModal={closeModal} servicio={selectedService} />
      )}
    </>
  );
};

export default ServiciosPage;