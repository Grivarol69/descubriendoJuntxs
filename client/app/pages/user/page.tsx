'use client'
import style from './myProfile.module.css'

const Profile = () => {
    return (
        <div className={style.gridColumns}>
            <div className={style.cardMyProfile}>
                <h1>Mi Perfil</h1>
                <h2>Mis datos</h2>
                <h2>Seguridad</h2>
                <h2>Tarjetas</h2>
                <h2>Privacidad</h2>
                <h2>Terminos y Condiciones</h2>
            </div>
        </div>
    )
}

export default Profile