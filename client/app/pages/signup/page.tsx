'use client';

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signIn from "@/app/firebase/auth/signIn";
import Footer from "@/components/Footer/Footer";
import signUp from "@/app/firebase/auth/signup";
import signUpWithGoogle from "@/app/firebase/auth/signInWithGoogle";
import axios from "axios";

const SignUpPage = () => {
    const [infoUser, setInfoUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfoUser({
            ...infoUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // Handle form submission here
        event.preventDefault()
        try {
            console.log('hola');
            const { result, error } = await signUp(infoUser.email, infoUser.password)
            if (error) {
                return console.log(error);
            }
            else {
                const token = result?.user.accessToken
                console.log(token);

                const userInfoCreate = (await axios.post('http://localhost:3002/auth', { token, name: infoUser.name })).data
                if (userInfoCreate.status) {
                    alert('Todo bien')
                    return router.push('/userIn')
                }
                return console.log(
                    'error al logearse'
                );
            }
        } catch (error) {
            alert(error)
        }
    };

    const handleGoogleSignUp = async (event: any) => {
        // Handle Google sign up here with firebase
        event.preventDefault()
        try {
            console.log('hola');
            const { result, error } = await signUpWithGoogle()
            if (error) {
                return console.log(error);
            }

            else {
                const token = result?.user.accessToken
                const name = result?.user.displayName
                const userInfoCreate = (await axios.post('http://localhost:3002/auth', { token, name })).data
                if (userInfoCreate.status) {
               
                    return router.push('/userIn')
                }
                return console.log(
                    'error amigo'
                );
            }
        } catch (error) {
            alert(error)
        }
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