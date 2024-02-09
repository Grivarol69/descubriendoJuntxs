"use client";
import Image from "next/image";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Donaciones from "../../../public/assets/donaciones-icon.svg";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

interface FormData {
  programId: number;
  amount: number;
  type: string;
  message: string;
  // Agrega más claves según tus campos de formulario
}

const DonacionesEspeciePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    programId: 0,
    amount: 0,
    type: "recurrente",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value =
      (e.target.name === "programId" || e.target.name === "amount") &&
      e.target.value !== ""
        ? +e.target.value
        : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value =
      (e.target.name === "programId" || e.target.name === "amount") &&
      e.target.value !== ""
        ? +e.target.value
        : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post<{ mensaje: string }>(
        "http://localhost:3002/payments",
        formData
      );
      console.log("Respuesta del servidor:", response.data);
    } catch (error: any) {
      console.error("Error al enviar datos al servidor:", error.message);
    }
  };

  initMercadoPago("APP_USR-91c35bb4-a98b-4c8a-b4a7-acf55e1bb8e3");

  return (
    <div className="w-screen h-[80vh]  flex justify-center items-center">
      <div className="w-11/12 h-5/6 border border-blue-400 rounded-2xl shadow-2xl flex justify-center">
        <div className="w-full h-full flex justify-center">
          <form
            action=""
            className="w-full h-full  flex"
            onSubmit={handleSubmit}
          >
            <div className=" w-4/6 h-full  flex flex-col justify-center">
              <div className="w-full flex justify-center ">
                <div className=" w-2/3  flex flex-col justify-center">
                  <div className="w-full flex flex-col justify-center gap-7">
                    <div className="text-3xl">Donaciones Especie</div>

                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <label className="m-0">Proyecto:</label>
                        <select
                          className="bg-blue-50 rounded-lg"
                          value={formData.programId}
                          name="programId"
                          onChange={handleChangeSelect}
                        >
                          <option value="" selected hidden>
                            Selecciona un proyecto
                          </option>
                          <option value="1" id="1">
                            Proyecto 1
                          </option>
                          <option value="2" id="2">
                            Proyecto 2
                          </option>
                        </select>
                        <button className="text-xs flex justify-end ">
                          {" "}
                          Ver proyecto{" "}
                        </button>
                      </div>
                    </div>

                    <div className="w-full h-96 overflow-auto  bg-blue-50 rounded-lg p-4 scrollbar">
                      Descripción de la donación Aca tengo que agregar el texto
                      de la descripcion de la donacion.
                      {/* Agrega más contenido según sea necesario y tambien hacer un overflow = scroll */}
                      Beneficios fiscales:
                      <ul>
                        <li>✓ Menos impuestos sobre el empleado</li>
                        <li>✓ Deducciones fiscales...</li>
                      </ul>
                    </div>

                    <div className=" ">
                      <label htmlFor="" className="">
                        Precio:
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="bg-blue-50 rounded-lg"
                        value={formData.amount}
                        onChange={handleChange}
                      />
                    </div>

                    <div className=" ">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full h-16 rounded-lg bg-blue-50"
                        placeholder="Deja tu mensaje"
                      />
                    </div>

                    <div>
                      <button className="bg-[#7286FF] rounded-md p-3 text-white">
                        {" "}
                        Donar con Paypal
                      </button>
                      <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-2/6 h-full overflow-hidden flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center object-contain h-full w-full">
                  <Image
                    src={Donaciones}
                    alt=""
                    className="h-full"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonacionesEspeciePage;
