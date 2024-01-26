import React from 'react';

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
}

interface CardServiciosProps {
  servicios: Servicio[];
}

const CardServicios: React.FC<CardServiciosProps> = ({ servicios }) => {
  return (
    <div>
      {servicios.map((servicio) => (
        <div key={servicio.id} className="card">
          <h3>{servicio.nombre}</h3>
          <p>{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default CardServicios;