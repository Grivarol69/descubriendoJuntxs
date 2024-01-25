import React from "react";
import { CSSProperties } from "styled-components";

const DonacionesRecurrentesPage: React.FC = () => {

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
      <h1>Donaciones Recurrentes</h1>
      <p>
        Esta es la página para las donaciones recurrentes. Puedes agregar aquí
        contenido específico para este tipo de donación.
      </p>
    </div>
  );
};

export default DonacionesRecurrentesPage;