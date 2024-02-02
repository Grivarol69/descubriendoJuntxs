'use client';

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signIn from "@/app/firebase/auth/signIn";
import Footer from "@/components/Footer/Footer";
import signUp from "@/app/firebase/auth/signup";
import signUpWithGoogle from "@/app/firebase/auth/signInWithGoogle";
import axios from "axios";
import style from './signup.module.css'
import googleLogo from '../../../public/googleLogo.png'


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
            if(!infoUser.name) {
                alert ('Debes escribir un nombre')
            }
            if(!infoUser.email) {
                alert ('Debes escribir un email')
            }
            if(!infoUser.password) {
                alert ('Debes escribir una contraseña ')
            }
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
        <div className={style.backgroundSignin}>
            <div className={style.cardContainer}>
                <div className={style.formAndImage}>
                    <div className={style.textInfo}>
                        <div className={style.registerAndInit}>
                            <h1 className={style.titleCard}>Registrarse</h1>
                            <p> ¿Ya tienes una cuenta? <Link href="/pages/signin" className={style.register}> Inicia sesión </Link></p>
                        </div>
                        <form onSubmit={handleSubmit} className={style.formDesign}>
                            <div className={style.labelAndInput}>
                                <label >
                                    Nombre Completo
                                </label>
                                <input className={style.input} type="text" name="name" value={infoUser.name} placeholder="Escribe un nombre" onChange={handleChange} />
                            </div>
                            <div className={style.labelAndInput}>
                                <label>
                                    Correo Electronico
                                </label>
                                <input className={style.input} type="text" name="email" value={infoUser.email} placeholder="ejemplo@dominio.com" onChange={handleChange} />
                            </div>
                            <div className={style.labelAndInput}>

                                <label>
                                    Contraseña
                                </label>
                                <input className={style.input} type="password" name="password" value={infoUser.password} placeholder="Contraseña segura" onChange={handleChange} />
                            </div>
                            <div className={style.buttons}>
                                <button type="submit" className={style.buttonFull}>Registrarse</button>
                                <button  className={style.buttonGoogle} 
                                 onClick={handleGoogleSignUp}>
                                    <img src={googleLogo.src} style={{ width: '3rem' }} alt="google" /> Registrarse Con Google </button>
                            </div>
                        </form>
                    </div>
                    <div className={style.illu}></div>

                </div>
            </div>
        </div>
    )
}

export default SignUpPage;