import Link from "next/link";
import { useEffect, useState } from "react";




const RedirectPage: React.FC = () => {
    const [selectedDonationType, setSelectedDonationType] = useState<string | null>(null);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

    const handleDonationTypeToggle = (donationType: string) => {
        if (selectedDonationType === donationType) {
            setSelectedDonationType(null);
        } else {
            setSelectedDonationType(donationType);
        }
    };

    useEffect(() => {
        setNextButtonDisabled(
            selectedDonationType !== "recurrente" &&
            selectedDonationType !== "en_especie" &&
            selectedDonationType !== "corporativa"
        );
    }, [selectedDonationType]);

   const linkPage = () => {
    if(selectedDonationType === "corporativa") return "/donaciones/corporativa"
    if(selectedDonationType ===  "especie") return "/donaciones/especie"
    if(selectedDonationType === "recurrente") return "/donaciones/recurrente"
    return "/donaciones/recurrente"
   };

   const finalUrl = linkPage()

    const buttonStyle = {
        backgroundColor: nextButtonDisabled ? "#888" : "#7286FF",
        color: "#fff",
        cursor: nextButtonDisabled ? "not-allowed" : "pointer",
        padding: "12px 24px",
        borderRadius: "8px",
        marginTop: "16px",
    };

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <div style={{ textAlign: "left", margin: "0 20px" }}>
                <img src="tu-imagen.jpg" alt="Imagen" style={{ width: "100%", maxWidth: "200px" }} />
            </div>
            <div style={{ textAlign: "right", maxWidth: "400px" }}>
                <h1>Tipo de Donacion</h1>
                <form>
                    <div>
                        <label>
                            <strong>Recurrente</strong>
                            <input
                                type="checkbox"
                                value="recurrente"
                                checked={selectedDonationType === "recurrente"}
                                onChange={() => handleDonationTypeToggle("recurrente")}
                            />
                        </label>
                        <p style={{ fontSize: "14px", color: "#555", textAlign: "left" }}>
                            Podrás pagar como si fuera una suscripción, eligiendo la frecuencia mensual.
                        </p>
                    </div>
                    <div>
                        <label>
                            <strong>En Especie</strong>
                            <input
                                type="checkbox"
                                value="especie"
                                checked={selectedDonationType === "en_especie"}
                                onChange={() => handleDonationTypeToggle("en_especie")}
                            />
                        </label>
                        <p style={{ fontSize: "14px", color: "#555", textAlign: "left" }}>
                            Puedes donar con bienes físicos o servicios en lugar de dinero.
                        </p>
                    </div>
                    <div>
                        <label>
                            <strong>Corporativa</strong>
                            <input
                                type="checkbox"
                                value="corporativa"
                                checked={selectedDonationType === "corporativa"}
                                onChange={() => handleDonationTypeToggle("corporativa")}
                            />
                        </label>
                        <p style={{ fontSize: "14px", color: "#555", textAlign: "left" }}>
                            Podrás contribuir como empresa, como por ejemplo el patrocinio de eventos.
                        </p>
                    </div>
                    <Link href={finalUrl}>
                    <button
                        type="button"
                        disabled={nextButtonDisabled}
                        style={buttonStyle}
                    >
                        {nextButtonDisabled ? "Seleccione al menos una opción" : "Siguiente"}
                    </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default RedirectPage