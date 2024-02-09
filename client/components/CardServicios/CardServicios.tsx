import React, { useState } from 'react';
import style from './CardServicios.module.css';
import Link from 'next/link';
import ModalServicio from './Modal/ModalServicio';

export interface Servicio {
  nombre: string;
  descripcion: string;
  comentarios: string[];
  imagen: string; // Agregar la propiedad imagen
  id?: number;
  ruta?: string;
}

interface CardServiciosProps {
  servicios: Servicio[];
}

const CardServicios: React.FC<CardServiciosProps> = ({ servicios }) => {
  const [selectedService, setSelectedService] = useState<Servicio | null>(null);

  const openModal = (servicio: Servicio) => {
    setSelectedService(servicio);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      {selectedService && (
        <div className={style.ModalView}>
          <ModalServicio
            openModal={true}
            closeModal={closeModal}
            servicio={selectedService}
          />
        </div>
      )}
      <div className={style.cardContainer}>
        {servicios.map((servicio) => (
          <div key={servicio.id} className={style.card}>
            <h3>{servicio.nombre}</h3>
            <div className={style.infoContainer}>
              <p>{servicio.descripcion}</p>
              <div className={style.buttonContainer}>
                <button className={style.buttonText} onClick={() => openModal(servicio)}>
                  Realizar Donación
                </button>
                <Link href={servicio.ruta || ''}>
                  <button className={style.buttonFull}>
                    Agendar
                  </button>
                </Link>
              </div>
            </div>
            {servicio.comentarios && (
              <div>
                <h4>Comentarios:</h4>
                <ul>
                  {servicio.comentarios.map((comentario, commentIndex) => (
                    <li key={commentIndex}>{comentario}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardServicios;