import React, { CSSProperties } from 'react';
import style from './Perfil.module.css'
import { logout } from '@/app/firebase/auth/signOut';
import { useRouter } from 'next/navigation';


interface ToggleTyps {
    toggle: boolean,
    logOut: () => void,
    closeToggle: () => void
}

const PerfilTogle: React.FC<ToggleTyps> = ({ toggle, logOut, closeToggle }) => {

    const router = useRouter()
    const styleFunction = (): CSSProperties => {


        const styleOff: CSSProperties = {
            opacity: '0',
            height: '0rem',
            pointerEvents: 'none'
        }

        const styleOn: CSSProperties = {
            display: 'flex',
            height: '6rem',
            pointerEvents: 'visible'
        }

        if (!toggle) return styleOff
         return styleOn
    }

    const styles = styleFunction()

    return (
        <>
            <div className={style.containerToggle} style={styles}>
                <div
                onClick={() => {
                    closeToggle()
                    return router.push('/pages/user')
                }}
                className={style.myProfile}> Mi Perfil </div>
                <div onClick={() => {
                    logOut()
                    closeToggle()
                    return router.push('/')
                    }} className={style.logOut}> Logout </div>
            </div>
        </>
    )
}

export default PerfilTogle