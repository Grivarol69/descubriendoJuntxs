'use client';
import { FormEvent, useState } from "react";
import Footer from "@/app/components/footer/footer";
import Link from "next/link";

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleGoogleSignUp = () => {
        // Handle Google sign up here with firebase
    }

    return (
        <div>
            <h1>Registro</h1>
            <p> ¿Ya tienes una cuenta? <Link href="/pages/signin"> Inicia sesión </Link></p>

            <form onSubmit={handleSubmit}>
                <label >
                    Nombre Completo:
                    <input type="text" value={name} placeholder="Juan Pérez" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Correo Electronico:
                    <input type="text" value={email} placeholder="ejemplo@dominio.com" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Contraseña:
                    <input type="password" value={password} placeholder="Contraseña segura" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Registrarse</button>
                <div>
                    <button onClick={handleGoogleSignUp}> Registrarse Con Google </button>
                </div>
            </form>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default SignUpPage;