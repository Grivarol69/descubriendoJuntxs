"use client";
import { useForm } from "react-hook-form";

const Contacto: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl">Envianos un Mensaje</h1>
      <form
        action=""
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete=""
      >
        <div className="flex flex-col border">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            placeholder="Ingresa tu nombre completo"
            {...register("nombre", {
              required: true,
              minLength: 7,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "minLength" && (
            <p>Ingrese Nombre y Apellido</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            placeholder="Direccion de Correo Electronico"
            {...register("correo", {
              required: true,
              pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            })}
          />
          {errors.correo?.type === "pattern" && <p>El Email es incorrecto</p>}
          {errors.correo?.type === "required" && <p>Email es requerido </p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="telephone">Celular</label>
          <input
            type="text"
            id="telephone"
            placeholder="Numero Telefónico"
            {...register("celular", {
              required: true,
              pattern: /^\d{9,15}$/,
            })}
          />
        </div>
        {errors.celular?.type === "required" && <p>Celular es requerido </p>}

        <div className="flex flex-col">
          <label htmlFor="asunto">Asunto</label>
          <input
            type="text"
            id="asunto"
            placeholder="Proposito del mensaje"
            {...register("asunto", {
              required: true,
            })}
          />
        </div>
        {errors.asunto?.type === "required" && (
          <p>Asunto del mensaje es requerido </p>
        )}

        <div className="flex flex-col-reverse">
          <textarea
            id="mensaje"
            cols={1}
            rows={4}
            className="border"
            placeholder="Escribenos todos los detalles de tu mensaje"
            {...register("mensaje", {
              required: true,
            })}
          ></textarea>
          <div>
            {errors.asunto?.type === "required" && (
              <p>El Mensaje es requerido </p>
            )}
          </div>
          <label htmlFor="mensaje">Mensaje</label>
        </div>

        <div>
          <input
            type="submit"
            value="Enviar"
            className="cursor-pointer border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Contacto;
