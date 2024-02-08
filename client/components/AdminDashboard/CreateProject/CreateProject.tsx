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

    const URL_BASE = "https://juntxs.vercel.app/"

    const [input, setInput] = useState({
        id: "",
        name: "",
        description: "",
        objective: "",
        syllabus: "",
        duration: "",
        state: "",
        categoryId: 1,
        image: "",
        commentary: "",
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
            await axios.post('https://juntxs.vercel.app/programs', {
                // id: input.id,
                name: input.name,
                description: input.description,
                objective: input.objective,
                syllabus: input.syllabus,
                duration: input.duration,
                state: input.state,
                categoryId: input.categoryId,
                image: input.image,
                commentary: input.commentary,
            })
            if (response) {
                location.reload();
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
                            <input type="text" name="name" value={input.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Descripción</label>
                            <input type="text" name="description" value={input.description} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Objetivo</label>
                            <input type="text" name="objective" value={input.objective} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Syllabus</label>
                            <input type="text" name="syllabus" value={input.syllabus} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Duración</label>
                            <input type="text" name="duration" value={input.duration} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Estado</label>
                            <input type="text" name="state" value={input.state} onChange={handleChange} />
                        </div>
                        {/* <div>
                            <label htmlFor="" >Categoria</label>
                            <input type="text" name="categoryId" value={input.categoryId} onChange={handleChange} />
                        </div> */}
                        <div>
                            <label htmlFor="" >Imagen</label>
                            <input type="text" name="image" value={input.image} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="" >Comentarios</label>
                            <input type="text" name="commentary" value={input.commentary} onChange={handleChange} />
                        </div>
                    </form>
                    <button onClick={handleSubmit}>Crear Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProject