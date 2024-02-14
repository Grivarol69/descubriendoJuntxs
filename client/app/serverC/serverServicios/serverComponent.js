import React from 'react';
import CardServicios from '../../../components/CardServicios/CardServicios';

function formatService(service) {
  const formattedService = {
    id: service.id,
    nombre: service.nombre,
    descripcion: service.descripcion,
    comentarios: service.comentarios,
    imagen: service.imagen,
    ruta: service.ruta,
  };

  return formattedService;
}

function ServiciosServer({ servicios }) {
    return (
        <div>
          {servicios.map(servicio => (
            <CardServicios key={servicio.id} servicio={servicio} />
          ))}
        </div>
      );
    };

export default ServiciosServer;