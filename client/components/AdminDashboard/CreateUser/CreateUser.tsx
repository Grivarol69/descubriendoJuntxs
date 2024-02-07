import { useState } from "react"
import style from './CreateUser.module.css'
import axios from "axios"
import signUp from "@/app/firebase/auth/signup";


interface CreateProjectProps {
    modal: boolean,
    closeModal: () => void
}

const CreateUser: React.FC<CreateProjectProps> = ({ modal, closeModal }) => {
    if (!modal) {
        return null
    }

    const URL_BASE = "https://juntxs.vercel.app/"

    const [input, setInput] = useState({
        email: "",
        name: "",
        surName: "",
        identification: "",
        phone: "",
        dateIn: "",
        description: "",
        linkedin: "",
        languaje: "",
        position: "",
        role: "",
        password: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            const { result, error } = await signUp(input.email, input.password)
            if (error) {
                alert(error)
                return console.log(error);
            }
            else {
                const token = await result?.user.getIdToken();
                if (token) {
                    console.log(token);
                    const fechaActualIn = new Date
                    const response = await axios.post(`${URL_BASE}users`, {
                        email: input.email,
                        name: input.name,
                        surName: input.surName,
                        identification: input.identification,
                        phone: input.phone,
                        dateIn: fechaActualIn,
                        dateOut: fechaActualIn,
                        description: input.description,
                        linkedin: input.linkedin,
                        languaje: input.languaje,
                        position: input.position,
                        role: 'Coach',
                        token
                    })
                    if (response) {
                        location.reload();
                        closeModal()
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className={style.background}>
                <div className={style.container}>
                    <div className={style.createUserAndCloseModal}>
                        <h1>Crear usuario</h1>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <div>
                        <form className={style.form} action="">
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Nombre</label>
                                    <input className={style.input} type="text" name="name" value={input.name} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Apellido</label>
                                    <input className={style.input} type="text" name="surName" value={input.surName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Descripción</label>
                                    <input className={style.input} type="text" name="description" value={input.description} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Position</label>
                                    <input className={style.input} type="text" name="position" value={input.position} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Telefono</label>
                                    <input className={style.input} type="text" name="phone" value={input.phone} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Idiomas</label>
                                    <input className={style.input} type="text" name="languaje" value={input.languaje} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >LinkedIn</label>
                                    <input className={style.input} type="text" name="linkedin" value={input.linkedin} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Identificación</label>
                                    <input className={style.input} type="text" name="identification" value={input.identification} onChange={handleChange} />
                                </div>
                            </div >
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Email</label>
                                    <input className={style.input} type="text" name="email" value={input.email} onChange={handleChange} />
                                </div>
                            </div>
                        </form>
                        <button onClick={() => handleSubmit()}>Crear Usuario</button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default CreateUser;