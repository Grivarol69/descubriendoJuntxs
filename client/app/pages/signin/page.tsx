'use client'
import Link from "next/link";
import { FormEvent, useState } from "react";
import style from './signin.module.css'


const SignInPage = () => {
    const [infoUser, setInfoUser] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e: any) => {
        setInfoUser({
            ...infoUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign in here with firebase
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
                                <button className={style.buttonGoogle} onClick={handleGoogleSignIn}>Iniciar Sesión Con Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SignInPage;