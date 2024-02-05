import { useState } from "react"
import style from './CreateUser.module.css'


interface CreateProjectProps {
    modal: boolean,
    closeModal: () => void
}

const CreateUser: React.FC<CreateProjectProps> = ({ modal, closeModal }) => {
    if (!modal) {
        return null
    }

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
            const response = true
            // await axios.post('http://localhost:3000/api/proyectos')
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
                    <h1>Crear usuario</h1>
                    <button onClick={closeModal}>X</button>
                    <div>
                        <form action="">
                            <div>
                                <label htmlFor="" >Nombre</label>
                                <input type="text" name="nombre" value={input.nombre} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="" >Descripción</label>
                                <input type="text" name="apellido" value={input.apellido} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="" >Comentarios</label>
                                <input type="text" name="fechaNacimiento" value={input.fechaNacimiento} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="" >Imagen</label>
                                <input type="text" name="telefono" value={input.telefono} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="" >Imagen</label>
                                <input type="text" name="linkedin" value={input.linkedin} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="" >Imagen</label>
                                <input type="text" name="identificacion" value={input.identificacion} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="" >Imagen</label>
                                <input type="text" name="idiomas" value={input.idiomas} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="" >Imagen</label>
                                <input type="text" name="email" value={input.email} onChange={handleChange} />
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