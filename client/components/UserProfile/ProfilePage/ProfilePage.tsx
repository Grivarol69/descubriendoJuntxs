import style from './profilePage.module.css'
import { userInfo } from 'os';

interface useInfoType {
    useInfo: {
        nombre: string,
        apellido: string,
        identificacion: string,
        fechaNacimiento: string,
        idiomas: string,
        telefono: string,
        email: string,
        linkedin: string,
        contraseña: string
    }
}


const ProfilePage: React.FC<useInfoType> = ({ useInfo }) => {
    return (
        <>
            <div className={style.userProfile}>
                <div className={style.portadaImage}></div>
                <div className={style.bodyInfo}>
                    <div className={style.nombreCompleto}>{useInfo.nombre + ' ' + useInfo.apellido}</div>
                    <div className={style.optionsContainerOfAll}>
                        <div className={style.contanerOptions}>
                            <div className={style.menuDescriptionTitle}>
                                <div className={style.titleMenu}>Mis datos</div>
                                <div className={style.descriptionMenu}>Maneja tu información</div>
                            </div>
                            <button className={style.buttonIn}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white "><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                            </button>
                        </div>
                        <div className={style.contanerOptions}>
                            <div className={style.menuDescriptionTitle}>
                                <div className={style.titleMenu}>Seguridad</div>
                                <div className={style.descriptionMenu}>Autentificaciones de seguridad</div>
                            </div>
                            <button className={style.buttonIn}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white "><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                            </button>
                        </div>
                        <div className={style.contanerOptions}>
                            <div className={style.menuDescriptionTitle}>
                                <div className={style.titleMenu}>Términos y condiciones</div>
                                <div className={style.descriptionMenu}>Acceso a los acuerdos</div>
                            </div>
                            <button className={style.buttonIn}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white "><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.profilePhoto}>
                    <div className={style.profilePhotoCircle}> LG </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage