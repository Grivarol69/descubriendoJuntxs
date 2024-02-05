import { useState } from 'react'
import style from './CreateProject.module.css'
import { ProyectTypes } from '@/app/proyectos/page'
import axios from 'axios'


interface CreateProjectProps {
    modal: boolean,
    closeModal: () => void
}

const CreateProject: React.FC<CreateProjectProps> = ({ modal, closeModal }) => {
    if (!modal) {
        return null
    }

    const [input, setInput] = useState<ProyectTypes>({
        nombre: "",
        descripcion: "",
        meta: "",
        comentarios: [],
        imagen: "",
        rating: "",
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
            const response = false
            // await axios.post('http://localhost:3000/api/proyectos')
            if (response) {
                closeModal()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={style.background}>
            <div className={style.container}>
                <h1>Crear Proyecto</h1>
                <button onClick={closeModal}>X</button>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="" >Nombre</label>
                            <input type="text" name="nombre" value={input.nombre} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Descripción</label>
                            <input type="text" name="descripcion" value={input.descripcion} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Comentarios</label>
                            <input type="text" name="comentarios" value={input.comentarios} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Imagen</label>
                            <input type="text" name="imagen" value={input.imagen} onChange={handleChange} />
                        </div>
                    </form>
                    <button onClick={handleSubmit}>Crear Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProject