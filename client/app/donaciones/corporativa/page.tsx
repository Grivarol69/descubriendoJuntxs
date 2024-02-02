"use client"
import React, { useState } from 'react';
import iconImage from '../../../public/assets/donaciones-icon.svg';
import Image from 'next/image';

const DonacionesCorporativasPage: React.FC = () => {
 

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-md p-6 w-[70vw] h-[60vh] lg:w-2/3 xl:w-1/3 box-border overflow-hidden">
        <h1 className="text-lg font-bold mb-4">Donación Corporativa</h1>

        <div className="border flex flex-col lg:flex-row">
          <div className="lg:w-1/2 border pr-4 mb-6 lg:mb-0 relative h-[45vh]">
            <h2 className="text-base mb-2">Proyecto</h2>
            <label className="mb-2">
              Selecciona un proyecto:
              <div className="relative">
                <select className="w-full border p-2 text-xs">
                  <option value="proyecto1">Proyecto 1</option>
                  <option value="proyecto2">Proyecto 2</option>
                </select>
              </div>
            </label>

            <div className="mb-2 mt-4">
              <h2 className="text-base mb-2">Contacto</h2>
              <label className="block mb-2">
                Número de teléfono:
                <input
                  type="text"
                  className="w-full border p-2 text-xs"
                  placeholder="Ingresa tu número"
                />
              </label>
            </div>

            <div className="mt-4">
              <h3 className="text-sm mb-2">Descripción de la donación:</h3>
              <p className="text-sm mb-2">
                Aca tengo que agregar el texto de la descripción de la donación.
              </p>

            </div>
          </div>

          <div className="lg:w-1/2 border pl-4 flex justify-center items-center h-[30vh]">
            <div className="border-none overflow-hidden box-border">
              <Image
                src={iconImage}
                alt="Donaciones Icon"
                width={250}
                height={300} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonacionesCorporativasPage;
