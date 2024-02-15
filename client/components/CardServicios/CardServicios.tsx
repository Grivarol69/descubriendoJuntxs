import React, { useState } from 'react';
import style from './CardServicios.module.css';
import { ServicioTypes } from '@/app/pages/admin/services/page';
import ServiciosDetail from '../ServicesDetail/ServicesDetail';
import CreateServices from '../DashboardAdmin/CreateServices/CreateServices';

interface CardServiciosProps {
  servicios: ServicioTypes[];
}

const CardServicios: React.FC<CardServiciosProps> = ({ servicios }) => {
  if (!servicios) {
    return null; 
  }

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false); 
  const [selectedServicio, setSelectedServicio] = useState<ServicioTypes | null>(null);

  const openDetailModal = (servicio: ServicioTypes) => {
    setSelectedServicio(servicio); 
    setShowDetailModal(true);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const closeCreateModal = () => { 
    setShowCreateModal(false);
  };

  

  return (
    <div className={style.gridContainer}>
      <div className={style.containerDonations}>
        <div className={style.titlePage}> Participacion de Servicios </div>
        <div className={style.allDonations}>
          <div className={style.cardHeader}>
            <div className={style.subtitle}>Nombre de servicios</div>
            <div className={style.subtitleRight}>Tipo de servicios</div>
          </div>
          {servicios.map(servicio => (
            <div key={servicio.name} className={style.cardDonation}>
              <div className={style.projectAndProjectType}>
                <div className={style.imageAndTitle}>
                  <div className={style.imageProject}></div>
                  <div className={style.titleAndButton}>
                    <div className={style.titleProyect}>{servicio.name}</div>
                    <button className={style.buttonProyect} onClick={() => openDetailModal(servicio)}>Ver Agenda</button>
                  </div>
                </div>
                <div className={style.type}>{servicio.type}</div>
              </div>
            </div>
          ))}
        </div>
        <button className={style.buttonCrear} onClick={openCreateModal}>Crear Servicios</button>
      </div>
      {showDetailModal && selectedServicio && (
        <ServiciosDetail
          servicio={selectedServicio}
          onClose={closeDetailModal}
        />
      )}
      {showCreateModal && (
        <CreateServices
          modal={showCreateModal}
          closeModal={closeCreateModal}
        />
      )}
    </div>
  );
};

export default CardServicios;