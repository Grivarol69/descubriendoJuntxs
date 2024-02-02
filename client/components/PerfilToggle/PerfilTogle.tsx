import style from './Perfil.module.css'
import { logout } from '@/app/firebase/auth/signOut';


interface ToggleTyps {
    toggle: boolean,
    logOut: () => void
}

const PerfilTogle: React.FC<ToggleTyps> = ({toggle, logOut}) => {

    const styleFunction = () => {
        const styleOff = {
            opacity: '0',
            height: '0rem'
        }
        const styleOn = {
            display: 'flex',
            height: '5rem'
        }
        if(!toggle) return styleOff
        if(toggle) return styleOn
    }

    const styles = styleFunction()

    return (
        <>
            <div className={style.containerToggle} style={styles}>
                <div className={style.myProfile}> Mi Perfil </div>
                <div onClick={logOut} className={style.logOut}> Logout </div>
            </div> 
        </>
    )
}

export default PerfilTogle