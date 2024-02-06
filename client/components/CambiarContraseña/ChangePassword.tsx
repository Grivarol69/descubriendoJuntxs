import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail, updatePassword } from "firebase/auth";

const PasswordChange = () => {

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     set(e.target.value);
    // }

    const auth = getAuth();
    const user = auth.currentUser;

    const handleSubmit = async () => {
        event.preventDefault();
        if (user && user.email) {
            try {
                await sendPasswordResetEmail(auth, user.email);
                alert('Email enviado para cambiar contraseña');
            } catch (error) {
                alert('Error al enviar email para cambiar contraseña');
            }
        } else {
            alert('No hay usuario logueado');
        }
    }

    return (
        <div>
            <button onClick={handleSubmit}>Enviar email para cambiar la contraseña</button>
        </div>
    )
}

export default PasswordChange