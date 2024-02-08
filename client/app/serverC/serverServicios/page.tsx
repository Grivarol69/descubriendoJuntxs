'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export interface Servicio {
  nombre: string;
  descripcion: string;
  comentarios: string[];
  imagen: string;
  id?: number;
  ruta?: string;
}

interface ServiciosServerProps {
  children: (servicios: Servicio[]) => React.ReactNode;
}

const ServiciosServer: React.FC<ServiciosServerProps> = ({ children }) => {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    Axios.get('https://juntxs.vercel.app/services')
      .then(response => {
        const data = response.data.map((servicioFromServer: any) => {
          return {
            ...servicioFromServer,
            nombre: servicioFromServer.name,
          };
        });
        setServicios(data);
        console.log('Data from API:', data);
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return <>{children(servicios)}</>;
};

export default ServiciosServer;