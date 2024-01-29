'use client'
import ProyectDetail from '@/components/ProyectDetail/ProyectDetail'
import style from './donations.module.css'
import { useState } from 'react'

const UserDonationsPage = () => {

    const [modal, setModal] = useState(false)

    const proyectos = [{
        nombre: 'Luis',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://www.cajasietecontunegocio.com/images/recursos-humanos/rrhh-large.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
    {
        nombre: 'Brigitte',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://s1.abcstatics.com/media/bienestar/2021/02/04/risa-k60E--1248x698@abc.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    },
    {
        nombre: 'Luci',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredsadas magnadasdasdsadsadsadsadsadsadas',
        meta: 'Meta 200.000 - 300.000',
        imagen: 'https://previews.123rf.com/images/leventegyori/leventegyori1506/leventegyori150600375/41665806-retrato-mayor-de-la-se%C3%B1ora.jpg',
        comentarios: ['Hola', 'Adios'],
        rating: '5'
    }
    ]

    const proyecto = {
        nombre: 'Mujeres',
        tipoDonacion: '1092012746',
        monto: '$82',
        frecuencia: 'Mensual',
        fechaInicial: '27/12/24',
        proximaDonacion: '28/12/24'
    }
    


    return (
        <div className={style.gridContainer}>
            <ProyectDetail
                project={proyecto}
                closeModal={() => setModal(false)}
                openModal={modal}
            />
            <div className={style.containerDonations}>
                <div className={style.titlePage}> Donaciones </div>
                <input className={style.select} placeholder='Buscar Proyecto' />
                <input className={style.select} placeholder='Tipo de donación' />
                <div className={style.allDonations}>
                    <div className={style.projectAndProjectType}>
                        <div>Proyecto</div>
                        <div>Tipo de proyecto</div>
                    </div>
                    <div className={style.cardDonation}>
                        <div className={style.imageAndTitle}>
                            <div className={style.imageProject}></div>
                            <div className={style.titleAndButton}>
                                <div className={style.titleProyect}> Mujeres </div>
                                <button onClick={() => setModal(true)} className={style.buttonProyect}> Ver proyecto </button>
                            </div>
                        </div>
                        <div className={style.tipoDeProyecto}> Recurrente </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDonationsPage