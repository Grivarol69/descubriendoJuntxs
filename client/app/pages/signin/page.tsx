'use client'
import Link from "next/link";
import { FormEvent, useState } from "react";

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign in here with firebase
    }


    return (
        <div>
        <h1>Inicio De Sesión</h1>
        <p> ¿No tienes cuenta aún? <Link href="/pages/signup"> Registrarme </Link></p>
        <form onSubmit={handleSubmit}>
                <label>
                    Correo Electronico:
                    <input type="text" value={email} placeholder="ejemplo@dominio.com" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Contraseña:
                    <input type="password" value={password} placeholder="Contraseña segura" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit"> Iniciar Sesión </button>
                <div>
                    <button onClick={handleGoogleSignIn}>Iniciar Sesión Con Google</button>
                </div>
            </form>
        </div>
    );
}

export default SignInPage;