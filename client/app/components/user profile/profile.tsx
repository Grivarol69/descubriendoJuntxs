import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWindowRestore, faHandHoldingDollar, faPeopleLine, faComment, faUserGear } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import style from './profile.module.css'


const UserProfile = () => {
    return (
        <div className={style.container}>
            <Link href="/pages/user/myprofile">
                <FontAwesomeIcon icon={faUser} className={style.icon} /> Mi Perfil
            </Link>
            <Link href="/pages/user/projects">
                <FontAwesomeIcon icon={faWindowRestore} className={style.icon} /> Proyectos
            </Link>
            <Link href="/pages/user/donations">
                <FontAwesomeIcon icon={faHandHoldingDollar} className={style.icon} /> Donaciones
            </Link>
            <Link href="/pages/user/services">
                <FontAwesomeIcon icon={faPeopleLine} className={style.icon} /> Servicios
            </Link>
            <Link href="/pages/user/questions">
                <FontAwesomeIcon icon={faComment} className={style.icon} /> Preguntas
            </Link>
            <Link href="/pages/user/configuration">
                <FontAwesomeIcon icon={faUserGear} className={style.icon} /> Configuracion
            </Link>
        </div>
    )
}

export default UserProfile;
