"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";

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
    <div className="min-h-screen overflow-hidden">
      <h1 className="text-3xl mb-8 lg:mb-20 text-center">
        Envianos un Mensaje
      </h1>
      <div className="flex justify-center relative w-full">
        <div className="flex justify-start relative w-5/6 ">
          <div className="w-full lg:w-3/5 border rounded-2xl border-slate-100 lg:h-full relative">
            <div className="w-full lg:w-4/5 p-4 lg:p-8 ">
              <div className=" text-3xl font-semibold mb-6 lg:mb-8 text-center lg:text-left">
                CONTACTANOS
              </div>
              <form
                action=""
                id="form"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete=""
              >
                <div className="flex flex-col-reverse ">
                  <input
                    type="text"
                    id="name"
                    placeholder="Ingresa tu nombre completo"
                    {...register("nombre", {
                      required: true,
                      pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                    })}
                    className="border rounded p-1 text-sm placeholder-zinc-300"
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
                    className="border rounded p-1 text-sm placeholder-zinc-300"
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
                    className="border rounded p-1 text-sm placeholder-zinc-300"
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
                    className="border rounded p-1 text-sm placeholder-zinc-300"
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
                    placeholder="Escribenos todos los detalles de tu mensaje"
                    {...register("mensaje", {
                      required: true,
                    })}
                    className="border rounded p-1 text-sm placeholder-zinc-300"
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
                    className="cursor-pointer border rounded-md w-full lg:w-auto"
                  />
                </div>
              </form>
            </div>
            {/* div 2 */}

            <div className="absolute flex   justify-center z-[1] -bottom-28 -right-96">

                <Image
                  src={Gradient}
                  alt="Gradient"
                  className="min-h-[500px] w-[450px] object-cover lg:h-auto  rounded-2xl z-[2]"
                />
              <div className="z-[3] text-white text-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2r">frfe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
