'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ServiciosServer from '@/app/serverC/serverServicios/serverComponent';

export interface Servicio {
  name: string;
  description: string;
  comentarios: string[];
  imagen: string;
  id?: number;
  ruta?: string;
}

export interface ServicioTypes {
  name: string;
  description: string;
  comentarios: string[];
  imagen: string;
  id?: number;
  ruta?: string;
  date: string | number;
  dateIn: string | number;
  dateOut: string | number;
  type: string;
}

const ServicesPage: React.FC = () => {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    Axios.get('https://juntxs.vercel.app/services')
      .then(response => {
        const data = response.data.map((servicioFromServer: any) => {
          return {
            ...servicioFromServer,
            name: servicioFromServer.name,
            date: servicioFromServer.date,
          };
        });
        setServicios(data);
        console.log('Data from API:', data);
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const newService = {
    name: 'Nuevo servicio',
    description: 'Descripción del nuevo servicio',
    userId: 1,
    categoryId: 1,
    dateIn: "2024-02-13T00:00:00",
    dateOut: "2024-02-13T23:59:59",
    hourIn: "11",
    hourOut: "10",
    amount: 100,
    objective: "Objetivo del servicio",
    syllabus: "Sílabo del servicio",
    type: "coaching",
    state: "Estado del servicio",
  };

  const createService = () => {
    Axios.post('https://juntxs.vercel.app/services', newService)
      .then(response => {
        console.log('Nuevo servicio creado:', response.data);
      })
      .catch(error => console.error('Error creating service:', error));
  };

  return (
    <>
      <ServiciosServer servicios={servicios} />
    </>
  );
};

export default ServicesPage;