'use client'
import { userInfo } from 'os'
import style from './myProfile.module.css'
import { icons } from '@/components/Icons/Icons'
import ProfilePage from '@/components/UserProfile/ProfilePage/ProfilePage'
import { useAuthContext } from '../../contexto/AuthContext'

const Profile = () => {

    const { user }: any = useAuthContext()
    console.log(user);
    
    
    const useInfo = {
        nombre: user?.displayName,
        apellido: '',
        identificacion: '1092012746',
        fechaNacimiento: '09/08/2000',
        idiomas: 'Español, Portugués, Inglés',
        telefono: '3156378508',
        email: 'luisfgonzalezt09@gmail.com',
        linkedin: 'https://www.linkedin.com/in/luisfgonzalezt09/',
        contraseña: 'luisito'
    }
    
    console.log(user);
    return (
        <div className={style.gridColumns} style={{ color: '#24275A' }}>
            <ProfilePage
            useInfo={useInfo}
            />
        </div>
    )
}

export default Profile