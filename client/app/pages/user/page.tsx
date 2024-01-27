'use client'
import style from './myProfile.module.css'

const Profile = () => {
    return (
        <div className={style.gridColumns}>
            <div className={style.cardMyProfile}>
                    <h1>Mi Perfil
                        <button >
                            <span className={style.arrow}>-&gt;</span>
                        </button>
                    </h1>
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
                    <h2>Tarjetas
                        <button >
                            <span className={style.arrow}>-&gt;</span>
                        </button>
                    </h2>
                    <h2>Privacidad
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
        </div>
    )
}

export default Profile