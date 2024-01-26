import React from "react";
import { CSSProperties } from "styled-components";

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
    <div style={styles}>
      <h1>Donaciones Corporativas</h1>
      <label>
        Proyecto:
        <select>
          <option value="proyecto1">Proyecto 1</option>
          <option value="proyecto2">Proyecto 2</option>
        </select>
        <button> Ver proyecto </button>
      </label>

      <div>
        <h2>Beneficios fiscales:</h2>
        <ul >
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
  );
};

export default DonacionesCorporativasPage;