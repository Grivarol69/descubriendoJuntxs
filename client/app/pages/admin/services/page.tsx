'use client'
import React, { useState } from 'react';
import ServiciosServer, { Servicio } from '../../../serverC/serverServicios/page'; // Ajusta la ruta correcta
import DashServicios from '../../../../components/DashboardAdmin/DashServicios/DashServicios';
import CardServicios from '../../../../components/CardServicios/CardServicios';
import style from './ServiciosPage.module.css';

const ServicesPage: React.FC = () => {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  return (
    <div className={style.pageContainer}>
      <ServiciosServer>
        {(serviciosFromServer: Servicio[]) => {
          setServicios(serviciosFromServer);
          return (
            <>
              <DashServicios servicios={servicios} />
              {servicios.map((servicio) => (
                <CardServicios key={servicio.nombre} servicio={servicio} />
              ))}
            </>
          );
        }}
      </ServiciosServer>
    </div>
  );
};

export default ServicesPage;