import {  useState } from 'react'
import style from './CreateProject.module.css'
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
        image: null,
    })
    
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
   
    const [file, setFile] = useState({});

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', input.name);
            formData.append('description', input.description);
            formData.append('urlYoutube', input.urlYoutube);
            formData.append('objective', input.objective);
            formData.append('syllabus', input.syllabus);
            formData.append( 'categoryId' , String(input.categoryId));
            formData.append('state', input.state);
            formData.append('image', file.File);

            
            // Asegúrate de tener el archivo adjunto en la variable `file`
            
            
            
            console.log('FormData:', formData.get('image', file));
            
            const response = await axios.post('https://juntxs.vercel.app/programs', {formData});
            console.log('Response:', response);
        } catch (error) {
            console.log('Error:', error);
        }
    };
       
        
    const handleFileChange = (event: any) => {
        console.log('holi', event.target.files[0]);
        
        setFile(event.target.files[0]);
        
        
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
                            <div className={style.labelInput}>
                            <label htmlFor="">Imagen</label>
                            <input
                                className={style.input}
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        {input.image && (
                            <img src={input.image} alt="Uploaded" />
                        )}
                            </div>
                        </div>
                    
                    </form>
                <button onClick={ handleSubmit}>Crear Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProject

