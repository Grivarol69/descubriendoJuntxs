'use client';
import { FormEvent, useState } from "react";
import Footer from "@/app/components/footer/footer";
import Link from "next/link";

const SignUpPage = () => {
    const [infoUser, setInfoUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfoUser({
            ...infoUser,
            [e.target.name]: e.target.value
        })
    }

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
                    <input type="text" name="name" value={infoUser.name} placeholder="Juan Pérez" onChange={handleChange} />
                </label>
                <label>
                    Correo Electronico:
                    <input type="text" name="email" value={infoUser.email} placeholder="ejemplo@dominio.com" onChange={handleChange} />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" value={infoUser.password} placeholder="Contraseña segura" onChange={handleChange} />
                </label>
                <button type="submit">Registrarse</button>
                <div>
                    <button onClick={handleGoogleSignUp}> Registrarse Con Google </button>
                </div>
            </form>
            {/* <div>
                <Footer />
            </div> */}
        </div>
    )
}

export default SignUpPage;