import { useState } from "react"
import style from './CreateUser.module.css'
import axios from "axios"


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
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        telefono: "",
        linkedin: "",
        identificacion: "",
        idiomas: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            const response = await axios.post(`${URL_BASE}users/users`)
            if (response) {
                closeModal()
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
                                    <input className={style.input} type="text" name="nombre" value={input.nombre} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Apellido</label>
                                    <input className={style.input} type="text" name="apellido" value={input.apellido} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Fecha De Nacimiento</label>
                                    <input className={style.input} type="text" name="fechaNacimiento" value={input.fechaNacimiento} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Telefono</label>
                                    <input className={style.input} type="text" name="telefono" value={input.telefono} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >LinkedIn</label>
                                    <input className={style.input} type="text" name="linkedin" value={input.linkedin} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Identificación</label>
                                    <input className={style.input} type="text" name="identificacion" value={input.identificacion} onChange={handleChange} />
                                </div>
                            </div >
                            <div className={style.inputsContainer}>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Idiomas</label>
                                    <input className={style.input} type="text" name="idiomas" value={input.idiomas} onChange={handleChange} />
                                </div>
                                <div className={style.labelInput}>
                                    <label htmlFor="" >Email</label>
                                    <input className={style.input} type="text" name="email" value={input.email} onChange={handleChange} />
                                </div>
                            </div>
                        </form>
                        <button onClick={handleSubmit}>Crear Usuario</button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default CreateUser;