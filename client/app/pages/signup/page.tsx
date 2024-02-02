'use client';

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signUp from "@/app/firebase/auth/signup";
import signUpWithGoogle from "@/app/firebase/auth/signInWithGoogle";
import { ValidateForm } from "@/app/firebase/validation";


const SignUpPage = () => {
    const [infoUser, setInfoUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfoUser(prevState => ({
            ...prevState,
            [name]: value
        }));

        let error = '';

        switch (name) {
            case 'name':
                error = !value ? 'El nombre es obligatorio' : '';
                break;
            case 'email':
                if (!value) {
                    error = 'El correo electrónico es obligatorio';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'El correo electrónico no es válido';
                }
                break;
            case 'password':
                if (!value) {
                    error = 'La contraseña es obligatoria';
                } else if (value.length < 7 || !/[A-Za-z]/.test(value) || !/\d/.test(value)) {
                    error = 'La contraseña debe tener al menos 7 caracteres, un numero y una letra';
                }
                break;
        }

        setErrors(prevState => ({
            ...prevState,
            [name]: error
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        // const formErrors = ValidateForm(infoUser);
        // setErrors(formErrors);

        // if (Object.values(formErrors).some(error => error !== '')) {
        //     return;
        // }

        try {
            console.log('hola');
            const { result, error } = await signUp(infoUser.email, infoUser.password)
            if (error) {
                setErrorMessage('Error al registrarse');
                return console.log(error);
            }
            console.log(result);
            return router.push('/userIn')
        } catch (error) {
            alert(error)
        }
    };

    const handleGoogleSignUp = async (event: any) => {
        event.preventDefault()
        try {
            console.log('hola');
            const { result, error } = await signUpWithGoogle()
            if (error) {
                setErrorMessage('Error al registrarse con Google');
                return console.log(error);
            }
            console.log(result);
            return router.push('/userIn')
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
                    {errors.name && <p>{errors.name}</p>}
                </label>
                <label>
                    Correo Electronico:
                    <input type="text" name="email" value={infoUser.email} placeholder="ejemplo@dominio.com" onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" value={infoUser.password} placeholder="Contraseña segura" onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </label>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button
                    disabled={Object.values(errors).some(error => error !== '') || !infoUser.name || !infoUser.email || !infoUser.password}
                    type="submit">Registrarse</button>
                <div>
                    <button onClick={handleGoogleSignUp}> Registrarse Con Google </button>
                </div>
            </form>
        </div >
    )
}

export default SignUpPage;