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
    dateIn: new Date("2024-02-13T00:00:00").toISOString(),
    dateOut: new Date("2024-02-13T23:59:59").toISOString(),
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
      .catch(error => {
        console.error('Error creating service:', error);
        if (error.response) {
          // La solicitud fue hecha y el servidor respondió con un código de estado diferente de 2xx
          console.error('Server responded with:', error.response.data);
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió ninguna respuesta
          console.error('No response received from server');
        } else {
          // Algo sucedió en la configuración de la solicitud que provocó un error
          console.error('Error setting up the request:', error.message);
        }
      });
  };
  return (
    <>
      <ServiciosServer servicios={servicios} />
    </>
  );
};

export default ServicesPage;