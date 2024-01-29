import React from "react";
import { CSSProperties } from "react";

interface DonacionEspeciePageProps {
  proyecto: string;
}

const DonacionesEspeciePage: React.FC<DonacionEspeciePageProps> = ({ proyecto }) => {
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

  const scrollableContainerStyle: CSSProperties = {
    maxHeight: "5%", // Ajusta según sea necesario
    overflowY: "auto",
    marginBottom: "10px",
  };

  return (
    <div style={styles}>
      <h1>Donaciones en Especie</h1>
      <p>Selecciona el proyecto: {proyecto}</p>

      <div style={scrollableContainerStyle}>
        <h2>Lista de Artículos Requeridos</h2>
        <ul>
          <li>Cucharas plásticas 0/10</li>
          <li>Cucharas plásticas 0/10</li>
        </ul>
        <button> Ver proyecto </button>
      </div>

      <div style={scrollableContainerStyle}>
        <h2>Descripción de la Donación</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          euismod massa ut sem fermentum, a aliquam quam aliquet. Donec
          fermentum augue vel justo volutpat, nec fermentum felis
          ullamcorper.
        </p>
        <button> Donar con Paypal </button>
      </div>
    </div>
  );
};

export default DonacionesEspeciePage;