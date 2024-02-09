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
        // id: "",
        name: "",
        description: "",
        dateIn: new Date().toISOString(),
        dateOut: new Date().toISOString(),
        state: "Activo",
        urlYoutube: "",
        objective: "",
        syllabus: "",
        categoryId: 1,
        image: "",
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
            const response = true
            await axios.post('https://juntxs.vercel.app/programs', {
                // id: input.id,
                name: input.name,
                description: input.description,
                objective: input.objective,
                dateIn: input.dateIn,
                dateOut: input.dateOut,
                state: input.state,
                syllabus: input.syllabus,
                urlYoutube: input.urlYoutube,
                categoryId: input.categoryId,
                image: input.image,
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
                                <label htmlFor="" >URL YouTube</label>
                                <input className={style.input} type="text" name="urlYoutube" value={input.urlYoutube} onChange={handleChange} />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="" >Imagen</label>
                                <input className={style.input} type="text" name="image" value={input.image} onChange={handleChange} />
                            </div>
                        </div>
                    </form>
                    <button onClick={() => handleSubmit()}>Crear Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProject