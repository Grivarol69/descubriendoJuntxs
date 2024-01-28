'use client'
import React, { useState, useEffect } from "react"
import style from './card.module.css'
import ModalProject from "../modal/Modal"

export interface Donation {
    donation: {
        tipoDeDonacion: string,
        descripcion: string,
        proyectoOInstitucion: string,
        monto: number,
        frecuencia: string,
    }
}

const ModalDonation = ({ openModal, closeModal, project }) => {
    if (!openModal) return null
    const { nombre, descripcion, meta, comentarios, rating, imagen } = project;
    const [MostrarComentario, setMostrarComentario] = useState(false)
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [])

    return (
        <div>

        </div>

    )
}