import React, { useState, ChangeEvent, FormEvent } from 'react';
import Axios from 'axios';
import style from './CreateServices.module.css'

interface FormData {
  name: string;
  description: string;
  userId: number;
  categoryId: number;
  dateIn: string;
  dateOut: string;
  hourIn: string;
  hourOut: string;
  amount: number;
  objective: string;
  syllabus: string;
  type: string;
  state: string;
}

interface CreateServicesProps {
    modal: boolean,
    closeModal: () => void
}

const CreateServices: React.FC<CreateServicesProps> = ({modal, closeModal}) => {
if(!modal) {
    return null
}

  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    userId: 1,
    categoryId: 1,
    dateIn: '',
    dateOut: '',
    hourIn: '',
    hourOut: '',
    amount: 0,
    objective: '',
    syllabus: '',
    type: '',
    state: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    Axios.post('https://juntxs.vercel.app/services', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Nuevo servicio creado:', response.data);
      })
      .catch(error => console.error('Error creating service:', error));
  };

  
  
    return (
      <div className={style.background}>
        <div className={style.container}>
          <h1>Crear Servicio</h1>
          <button onClick={closeModal}>X</button>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="" >Nombre del servicio</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre del servicio"/>
              </div>
              <div>
                <label htmlFor="" >Descripción del servicio</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange}placeholder="" />
              </div>
              <div>
                <label htmlFor="" >Fecha de inicio</label>
                <input type="date" name="dateIn" value={formData.dateIn} onChange={handleChange}placeholder="" />
              </div>
              <div>
                <label htmlFor="" >Fecha de finalización</label>
                <input type="date" name="dateOut" value={formData.dateOut} onChange={handleChange}placeholder="" />
              </div>
              <div>
                <label htmlFor="" >Hora de inicio</label>
                <input type="time" name="hourIn" value={formData.hourIn} onChange={handleChange}placeholder="" />
              </div>
              <div>
                <label htmlFor="" >Hora de finalización</label>
                <input type="time" name="hourOut" value={formData.hourOut} onChange={handleChange} placeholder=""/>
              </div>
              <div>
                <label htmlFor="" >Cantidad</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleChange}placeholder="" />
              </div>
              <div>
                <label htmlFor="" >Objetivo</label>
                <input type="text" name="objective" value={formData.objective} onChange={handleChange} placeholder="" />
              </div>
              <div>
                <label htmlFor="" >Sílabo</label>
                <input type="text" name="syllabus" value={formData.syllabus} onChange={handleChange} placeholder=""/>
              </div>
              <div>
                <label htmlFor="" >Tipo</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder=""/>
              </div>
              <div>
                <label htmlFor="" >state</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder=""/>
              </div>
              <button type="submit">Crear Servicio</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateServices;