'use client'

import React, { useState, useEffect } from "react";
import RedirectPage from "@/components/elegirDonacion/elegirDonacion";


const DonacionesPage: React.FC = () => {
    const [donationStarted, setDonationStarted] = useState(false);

    const handleStartDonation = () => {
        setDonationStarted(true);
    };

    useEffect(() => {
        if (window) {
            console.log("Running on the client side");
        }
    }, []); 

    return (
        <div
            style={{
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
            }}
        >
            {!donationStarted ? (
                <div>
                    <h1>Donaciones</h1>
                    <p>
                        Gracias por decidir dar tu granito de arena, podrás hacerlo de forma
                        anónima, o si prefieres puedes hacerlo registrándote primero, así
                        podrás tener un historial de tus aportes. Tendrás 3 opciones para
                        donar: recurrente, en especie y corporativo, elige con el que desees
                        colaborar.
                    </p>
                    <button
                        type="button"
                        onClick={handleStartDonation}
                        style={{
                            background: "#7286FF",
                            color: "#FFFFFF",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginTop: "16px",
                        }}
                    >
                        Comenzar
                    </button>
                </div>
            ) : (
                <RedirectPage />
            )}
        </div>
    );
};



export default DonacionesPage;