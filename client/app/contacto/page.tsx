"use client";
import { useForm, SubmitHandler } from "react-hook-form";

const Contacto: React.FC = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl">Envianos un Mensaje</h1>
      <form action="" id='form' autoComplete="">
        <div className="flex flex-col border">
          <label htmlFor="name">Nombre Completo</label>
          <input type="text" name="" id="name" placeholder="Ingresa tu nombre completo" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email" placeholder="Direccion de Correo Electronico" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telephone">Celular</label>
          <input type="text" name="telephone" id="telephone" placeholder="Numero Telefónico" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="asunto">Asunto</label>
          <input type="text" name="asunto" id="asunto" placeholder="Proposito del mensaje" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            name="mensaje"
            id="mensaje"
            cols={1}
            rows={4}
            className="border"
            placeholder="Escribenos todos los detalles de tu mensaje"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
