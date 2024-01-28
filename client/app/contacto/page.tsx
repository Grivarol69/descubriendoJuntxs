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
      <div className="flex border">
        <div className="w-1/2 border">
          <form
            action=""
            id="form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete=""
          >
            <div className="flex flex-col-reverse border">
              <input
                type="text"
                id="name"
                placeholder="Ingresa tu nombre completo"
                {...register("nombre", {
                  required: true,
                  pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                })}
              />
              <div>
                {errors.nombre?.type === "required" && (
                  <p className="text-red-600 text-[12px]">
                    El campo nombre es requerido
                  </p>
                )}
                {errors.nombre?.type === "pattern" && (
                  <p className="text-red-600 text-[12px]">
                    Ingrese tu Nombre y Apellido
                  </p>
                )}
              </div>
              <label htmlFor="name">Nombre Completo</label>
            </div>

            <div className="flex flex-col-reverse">
              <input
                type="email"
                id="email"
                placeholder="Direccion de Correo Electronico"
                {...register("correo", {
                  required: true,
                  pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                })}
              />
              <div>
                {errors.correo?.type === "pattern" && (
                  <p className="text-red-600 text-[12px]">
                    El Email es incorrecto
                  </p>
                )}
                {errors.correo?.type === "required" && (
                  <p className="text-red-600 text-[12px]">
                    Email es requerido{" "}
                  </p>
                )}
              </div>
              <label htmlFor="email">Correo</label>
            </div>

            <div className="flex flex-col-reverse">
              <input
                type="text"
                id="telephone"
                placeholder="Numero Telefónico"
                {...register("celular", {
                  required: true,
                  pattern: /^\d{9,15}$/,
                })}
              />
              <div>
                {errors.celular?.type === "required" && (
                  <p className="text-red-600 text-[12px]">
                    Celular es requerido{" "}
                  </p>
                )}
              </div>
              <label htmlFor="telephone">Celular</label>
            </div>

            <div className="flex flex-col-reverse">
              <input
                type="text"
                id="asunto"
                placeholder="Proposito del mensaje"
                {...register("asunto", {
                  required: true,
                })}
              />
              <div>
                {errors.asunto?.type === "required" && (
                  <p className="text-red-600 text-[12px]">
                    Asunto del mensaje es requerido{" "}
                  </p>
                )}
              </div>
              <label htmlFor="asunto">Asunto</label>
            </div>

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
                  <p className="text-red-600 text-[12px]">
                    El Mensaje es requerido{" "}
                  </p>
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
        <div
          className="absolute bottom-56 right-0 z-[-1] bg-orange-950 p-4"
          style={{ height: "20vh", width: "30vh" }}
        >
          1
        </div>
      </div>
    </div>
  );
};

export default Contacto;
