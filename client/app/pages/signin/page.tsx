'use client'
import Link from "next/link";
import { FormEvent, FormEventHandler, useState } from "react";
import style from './signin.module.css'
import googleLogo from '../../../public/googleLogo.png'
import { useRouter } from 'next/navigation'
import signIn from "@/app/firebase/auth/signIn";
import signUpWithGoogle from "@/app/firebase/auth/signInWithGoogle";
import ResetPassword from "@/components/ResetPassword/ResetPassword";
import { userInfo } from 'os';
import axios from "axios";

const SignInPage = () => {
    const [infoUser, setInfoUser] = useState({
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

            const { result, error } = await signIn(infoUser.email, infoUser.password)

            if (error) {
                return console.log(error);
            }
     
            return router.push('/userIn')

        } catch (error) {
            alert(error)
        }
    };

    const handleGoogleSignIn = async (event: any) => {
        // Handle Google sign in here with firebase
        event.preventDefault()
        try {
            console.log('hola');
            const { result, error } = await signUpWithGoogle()
            if (error) {
                return console.log(error);
            }
            
            return router.push('/pages/user')
        } catch (error) {
            alert(error)
        }
    }



    return (
        <div className={style.backgroundSignin}>
            <div className={style.cardContainer}>
                <div className={style.formAndImage}>
                    <div className={style.illu}>
                    </div>
                    <div className={style.textInfo}>
                        <div className={style.registerAndInit}>
                            <h1 className={style.titleCard}>Inicio De Sesión</h1>
                            <p> ¿No tienes cuenta aún? <Link href="/pages/signup" className={style.register}> Registrarme </Link></p>
                            <p>
                                <ResetPassword />
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className={style.formDesign}>
                            <div className={style.labelAndInput}>
                                <label>
                                    Correo Electronico
                                </label>
                                <input className={style.input} type="text" value={infoUser.email} name='email' placeholder="ejemplo@dominio.com" onChange={handleChange} />

                            </div>
                            <div className={style.labelAndInput}>
                                <label>
                                    Contraseña
                                </label>
                                <input className={style.input} type="password" value={infoUser.password} name='password' placeholder="Contraseña segura" onChange={handleChange} />
                            </div>
                            <div className={style.buttons}>
                                <button className={style.buttonFull} type="submit"> Iniciar Sesión </button>

                                <button className={style.buttonGoogle} onClick={handleGoogleSignIn}>
                                    <img src={googleLogo.src} style={{ width: '3rem' }} alt="google" /> Iniciar Sesión Con Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </div>
    );
}

export default SignInPage;