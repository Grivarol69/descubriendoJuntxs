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

  const { nombre, descripcion, comentarios, ruta } = servicio;

  return (
    <div className={style.padreServicio}>
      <div className={style.servicioLetra}>
        <div className={style.servicioDetailImage}>
        </div>
        <div className={style.infoTotalComplete}>
          <div className={style.closeModal}>
            <button className={style.closeModalTransition} onClick={closeModal}>
              X
            </button>
          </div>
          <div className={style.infoContainerDetail}>
            <div className={style.servicioDesc}>
              <p>{descripcion}</p>
              <div className={style.buttonContainer}>
                <button className={style.buttonText} onClick={closeModal}>
                  Cerrar
                </button>
                <Link href={ruta}>
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