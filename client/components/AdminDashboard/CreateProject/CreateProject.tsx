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
                <div className={style.createProjectAndCloseModal}>
                    <h1>Crear Proyecto</h1>
                    <button onClick={closeModal}>X</button>
                </div>
                <div>
                    <form action="" className={style.form}>
                        <div className={style.inputsContainer}>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Nombre</label>
                                <input className={style.input} type="text" name="name" value={input.name} onChange={handleChange} />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Descripción</label>
                                <input className={style.input} type="text" name="description" value={input.description} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.inputsContainer}>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Objetivo</label>
                                <input className={style.input} type="text" name="objective" value={input.objective} onChange={handleChange} />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Syllabus</label>
                                <input className={style.input} type="text" name="syllabus" value={input.syllabus} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.inputsContainer}>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Duración</label>
                                <input className={style.input} type="text" name="duration" value={input.duration} onChange={handleChange} />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Estado</label>
                                <input className={style.input} type="text" name="state" value={input.state} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.inputsContainer}>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Imagen</label>
                                <input className={style.input} type="text" name="image" value={input.image} onChange={handleChange} />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Comentarios</label>
                                <input className={style.input} type="text" name="commentary" value={input.commentary} onChange={handleChange} />
                            </div>
                        </div>
                        {/* <div>
                            <label htmlFor="" >Categoria</label>
                            <input type="text" name="categoryId" value={input.categoryId} onChange={handleChange} />
                        </div> */}
                    </form>
                    <button onClick={handleSubmit}>Crear Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProject