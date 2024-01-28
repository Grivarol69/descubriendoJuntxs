'use client'
import style from './myProfile.module.css'

const Profile = () => {
    return (
        <div>
            <h2>Mis datos
                <button >
                    <span className={style.arrow}>-&gt;</span>
                </button>
            </h2>
            <h2>Seguridad
                <button >
                    <span className={style.arrow}>-&gt;</span>
                </button>
            </h2>
            <h2>Terminos y Condiciones
                <button >
                    <span className={style.arrow}>-&gt;</span>
                </button>
            </h2>
        </div>
    )
}

export default Profile