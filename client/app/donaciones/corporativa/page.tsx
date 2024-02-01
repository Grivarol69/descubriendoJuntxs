import React, { CSSProperties } from "react";

const DonacionesCorporativasPage: React.FC = () => {
  const styles: CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    border: "2px solid #a9a9a9",
    overflow: "hidden",
    background: "#FFFFFF",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "24px",
  };

  return (
<<<<<<< HEAD
    <div >
      <h1>Donaciones      Corporativas</h1>
      <label>
        Proyecto:
        <select>
          <option value="proyecto1">Proyecto 1</option>
          <option value="proyecto2">Proyecto 2</option>
        </select>
        <button> Ver proyecto </button>
      </label>
=======
    <div className="border">
      <div className="flex flex-col">
        <h1 className="text-3xl">Donaciones Corporativas</h1>
        <div className="border flex">
        <div className="w-1/2 border">
          <label>
            Proyecto:
            <select>
              <option value="proyecto1">Proyecto 1</option>
              <option value="proyecto2">Proyecto 2</option>
            </select>
            <button> Ver proyecto </button>
          </label>
>>>>>>> cf5e26729e00e7360ef76cd4984ea8465b3ddeb2

          <div>
            <h2>Beneficios fiscales:</h2>
            <ul>
              <li>✓ Menos impuestos sobre el empleado</li>
              <li>✓ Deducciones fiscales...</li>
            </ul>
          </div>

          <div>
            <h2>Descripción de la donación:</h2>
            <p>
              Aca tengo que agregar el texto de la descripcion de la donacion.
              {/* Agrega más contenido según sea necesario y tambien hacer un overflow = scroll */}
            </p>
            <button> Donar con Paypal</button>
          </div>
        </div>
        <div className="w-1/2 border">d</div>
        </div>
      </div>
    </div>
  );
};

export default DonacionesCorporativasPage;
