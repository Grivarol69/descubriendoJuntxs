import React from 'react';
import style from './ModalServicio.module.css';
import Link from 'next/link';
import { Servicio } from '../CardServicios';

interface ModalServicioProps {
  openModal: boolean;
  closeModal: () => void;
  servicio: Servicio | null;
}

const ModalServicio: React.FC<ModalServicioProps> = ({ openModal, closeModal, servicio }) => {
  if (!openModal || !servicio) {
    return null;
  }

  const { nombre, descripcion, comentarios } = servicio;

  return (
    <div className={style.padreServicio}>
      <div className={style.servicioLetra}>
        <div className={style.servicioDetailImage}>
          {/* Puedes agregar tu imagen aquí si es necesario */}
        </div>
        <div className={style.infoTotalComplete}>
          <div className={style.closeModal}>
            <button className={style.closeModalTransition} onClick={closeModal}>
              X
            </button>
          </div>
          <div className={style.infoContainerDetail}>
            <div className={style.servicioDesc}>
              <h2>{nombre}</h2>
              <p>{descripcion}</p>
              <div className={style.buttonContainer}>
                {/* Añadir el botón de cierre aquí */}
                <button className={style.buttonText} onClick={closeModal}>
                  Cerrar
                </button>
                {/* Puedes agregar tu enlace aquí si es necesario */}
                <Link href="/ruta-a-agendar">
                  <button className={style.buttonFull}>Agendar</button>
                </Link>
              </div>
            </div>
            <div className={style.servicioDetailInfo}>
              <div className={style.containerTextServicio}>
                <h2 className={style.titleComments}>
                  {comentarios ? `${comentarios.length} Comentarios` : '0 Comentarios'}
                </h2>
                {comentarios && (
                  <ul className={style.commentsStyle}>
                    {comentarios.map((comentario: string, index: number) => (
                      <li className={style.commentBox} key={index}>
                        {comentario}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalServicio;