'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWindowRestore, faHandHoldingDollar, faPeopleLine, faComment, faUserGear } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import style from './profile.module.css'
import { usePathname } from 'next/navigation'


const UserProfile = () => {

    const path = usePathname()

    return (
        <div className={style.container}>
            <div className={style.Buttons}>
                <Link href="/pages/user/myprofile">
                    <div className={style.iconAndText}>
                        <div className={style.iconsContainer}>
                            <FontAwesomeIcon icon={faUser} className={style.icon} />
                        </div>
                        <div className={style.textSideBar}>
                            Mi Perfil
                        </div>
                    </div>
                </Link>
                <Link href="/pages/user/projects">
                    <div className={style.iconAndText}>
                        <div className={style.iconsContainer}>
                            <FontAwesomeIcon icon={faWindowRestore}/>
                        </div>
                        <div className={style.textSideBar}>
                            Proyectos
                        </div>
                    </div>
                </Link>
                <Link href="/pages/user/donations">
                    <div className={style.iconAndText}>
                        <div className={style.iconsContainer}>
                            <FontAwesomeIcon icon={faHandHoldingDollar} className={style.icon} />
                        </div>
                        <div className={style.textSideBar}>
                            Donaciones
                        </div>
                    </div>
                </Link>
                <Link href="/pages/user/services">
                    <div className={style.iconAndText}>
                        <div className={style.iconsContainer}>
                            <FontAwesomeIcon icon={faPeopleLine} className={style.icon} />
                        </div>
                        <div className={style.textSideBar}>
                            Servicios
                        </div>
                    </div>
                </Link>
                <Link href="/pages/user/questions">
                    <div className={style.iconAndText}>
                        <div className={style.iconsContainer}>
                            <FontAwesomeIcon icon={faComment} className={style.icon} />
                        </div>
                        <div className={style.textSideBar}>
                            Preguntas
                        </div>
                    </div>
                </Link>
                <Link href="/pages/user/configuration">
                    <div className={style.iconAndText}>
                        <div className={style.iconsContainer}>
                            <FontAwesomeIcon icon={faUserGear} className={style.icon} />
                        </div>
                        <div className={style.textSideBar}>
                            Configuracion
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default UserProfile;
