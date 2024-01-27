'use client'

import SearchBar from "@/components/searchbar/SearchBar"
import { useState } from "react"
import ModalProject from "@/components/modal/Modal"

export interface DonationTypes {
    tipoDeDonacion: string,
    descripcion: string,
    proyectoOInstitucion: string,
    monto: number,
    frecuencia: string,
}

const UserDonationsPage = () => {

    const donaciones = [{
        nombre: 'Luis',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://www.cajasietecontunegocio.com/images/recursos-humanos/rrhh-large.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
    {
        nombre: 'Isabella',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://cdn.shopify.com/s/files/1/0040/8997/0777/files/cute_rabbit_2_1024x1024.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    }]

    return (
        <div>
            <h1>Donaciones</h1>
        </div>
    )
}

export default UserDonationsPage